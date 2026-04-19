"use client";
import React, { useState, useEffect } from 'react';

declare global {
    interface Window {
        vapiSDK: any;
    }
}

const VoiceDemo: React.FC = () => {
    const [isCalling, setIsCalling] = useState(false);
    const [status, setStatus] = useState("Status: Stand-by");
    const [isSDKReady, setIsSDKReady] = useState(false);

    const publicKey = "5cf7462d-30fe-4d70-9ea1-89ce0bd65ec5";
    const assistantId = "b1738305-8aba-4337-8dab-1ed9c93e8747";

    useEffect(() => {
        // 1. Check if already loaded
        if (typeof window !== 'undefined' && window.vapiSDK) {
            setIsSDKReady(true);
            return;
        }

        // 2. Manual Script Injection
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
        script.defer = true;
        script.async = true;

        script.onload = () => {
            console.log("Vapi script loaded manually");
            setTimeout(() => {
                if (window.vapiSDK) setIsSDKReady(true);
            }, 500);
        };

        script.onerror = () => {
            console.error("Failed to load Vapi script");
            setStatus("Status: Script Error - check connection");
        };

        document.body.appendChild(script);

        // 3. Poll fallback
        const intervalId = setInterval(() => {
            if (typeof window !== 'undefined' && window.vapiSDK) {
                setIsSDKReady(true);
                clearInterval(intervalId);
            }
        }, 500);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const handleClick = () => {
        if (!isSDKReady || !window.vapiSDK) {
            alert("Vapi SDK niet geladen. Probeer de pagina te verversen.");
            return;
        }

        if (!isCalling) {
            // Cookie consent required before VAPI
            const consent = localStorage.getItem('cookie_consent');
            if (consent !== 'accepted') {
                setStatus('Status: Accepteer eerst cookies');
                return;
            }
            try {
                const vapi = window.vapiSDK.run({
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
                disabled={!isSDKReady}
                className={`
                    btn-shine flex items-center justify-center px-8 h-14 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95
                    ${!isSDKReady ? 'bg-gray-400 cursor-not-allowed opacity-70' : isCalling ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-[#007bff] hover:bg-blue-600 text-white'}
                `}
                style={{ minWidth: '205px' }}
            >
                {!isSDKReady ? "Laden..." : isCalling ? "Ophangen" : "Test Live Demo"}
            </button>
            <p className="text-sm text-foreground/60 font-medium">
                {status}
            </p>
        </div>
    );
};

export default VoiceDemo;
