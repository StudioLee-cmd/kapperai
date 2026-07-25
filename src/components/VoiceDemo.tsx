"use client";
import React, { useState, useEffect, useRef } from 'react';

declare global {
    interface Window {
        vapiSDK: any;
    }
}

const VoiceDemo: React.FC = () => {
    const [isCalling, setIsCalling] = useState(false);
    const [status, setStatus] = useState("Status: Stand-by");

    const publicKey = "5cf7462d-30fe-4d70-9ea1-89ce0bd65ec5";
    const assistantId = "b1738305-8aba-4337-8dab-1ed9c93e8747";

    // ⚡ De Vapi-SDK wordt pas bij de EERSTE KLIK van de CDN gehaald (25-07,
    //    niche-homepage-395kb-js-blokkeert-lcp). Dit stond in een MOUNT-effect: élke bezoeker haalde
    //    een third-party script van jsdelivr op — mét een poll-interval dat daarna elke 500 ms bleef
    //    draaien — voor een knop die vrijwel niemand aanraakt. Nu: één promise die 'm ophaalt op het
    //    moment dat 'ie nodig is, en die zichzelf onthoudt zodat een tweede klik niets opnieuw doet.
    const sdkRef = useRef<Promise<any> | null>(null);

    const laadSDK = () => {
        if (sdkRef.current) return sdkRef.current;
        sdkRef.current = new Promise<any>((resolve, reject) => {
            if (typeof window !== 'undefined' && window.vapiSDK) {
                resolve(window.vapiSDK);
                return;
            }
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
            script.defer = true;
            script.async = true;
            script.onload = () => {
                // het script zet `window.vapiSDK` nét ná onload — vandaar dezelfde poll als eerst,
                // nu mét een harde bovengrens zodat 'ie niet eeuwig door kan tikken.
                const start = Date.now();
                const intervalId = setInterval(() => {
                    if (typeof window !== 'undefined' && window.vapiSDK) {
                        clearInterval(intervalId);
                        resolve(window.vapiSDK);
                    } else if (Date.now() - start > 10000) {
                        clearInterval(intervalId);
                        sdkRef.current = null;
                        reject(new Error('vapiSDK kwam niet beschikbaar'));
                    }
                }, 250);
            };
            script.onerror = () => {
                console.error("Failed to load Vapi script");
                sdkRef.current = null;      // een volgende klik mag het opnieuw proberen
                reject(new Error('Vapi-script laadde niet'));
            };
            document.body.appendChild(script);
        });
        return sdkRef.current;
    };

    const handleClick = async () => {
        if (!isCalling) {
            // Cookie consent required before VAPI
            const consent = localStorage.getItem('cookie_consent');
            if (consent !== 'accepted') {
                setStatus('Status: Accepteer eerst cookies');
                return;
            }
            setStatus("Status: Verbinden...");
            let sdk: any;
            try {
                sdk = await laadSDK();
            } catch {
                setStatus("Status: Script Error - check connection");
                return;
            }

            try {
                const vapi = sdk.run({
                    apiKey: publicKey,
                    assistant: assistantId,
                    config: { position: "bottom-right" }
                });

                // Attach event listeners regarding the call
                if (vapi) {
                    vapi.on('call-start', () => {
                        console.log('Call started');
                        setStatus("Status: Verbonden (Spreek nu)");
                    });

                    vapi.on('call-end', () => {
                        console.log('Call ended');
                        setStatus("Status: Gesprek beëindigd");
                        setIsCalling(false);
                    });

                    vapi.on('error', (e: any) => {
                        console.error('Vapi Error:', e);
                        setStatus("Status: Fout opgetreden");
                    });

                    // Explicitly try to start the call if run() didn't do it
                    if (typeof vapi.start === 'function') {
                        console.log("Force starting call...");
                        vapi.start();
                    }
                }

                setIsCalling(true);
                setStatus("Status: Verbinden...");
            } catch (error) {
                console.error("Vapi SDK Error:", error);
                setStatus("Status: Error bij starten");
            }
        } else {
            window.location.reload();
        }
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <style jsx>{`
                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-15deg); }
                    15% { transform: translateX(100%) skewX(-15deg); }
                    100% { transform: translateX(100%) skewX(-15deg); }
                }
                .btn-shine {
                    position: relative;
                    overflow: hidden;
                }
                .btn-shine::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
                    transform: skewX(-15deg);
                    animation: shine 3s infinite;
                }
            `}</style>
            <button
                onClick={handleClick}
                className={`
                    btn-shine flex items-center justify-center px-8 h-14 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95
                    ${isCalling ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-[#007bff] hover:bg-blue-600 text-white'}
                `}
                style={{ minWidth: '205px' }}
            >
                {isCalling ? "Ophangen" : "Test Live Demo"}
            </button>
            <p className="text-sm text-foreground/60 font-medium">
                {status}
            </p>
        </div>
    );
};

export default VoiceDemo;
