"use client";
import React, { useEffect, useState } from "react";

// What the review package does, shown on first view and built in the page (no picture, no clip): the customer holds the
// phone against the NFC display on the counter, Google's review form opens, the review stands on the business profile.
// Real text, so a phone reads it at full size and Google and AI search read it; it walks by itself, a tap or a pointer on
// a step holds that step, and with reduced motion every step stands lit.
type Props = { bedrijf: string };

const STEPS = [
    { n: 1, label: "Telefoon bij het display", say: "Je klant houdt de telefoon bij het display op de balie." },
    { n: 2, label: "Google opent het reviewformulier", say: "Het reviewformulier van Google gaat meteen open, zonder zoeken." },
    { n: 3, label: "Review op je bedrijfsprofiel", say: "De review staat op Google bij je bedrijfsprofiel." },
];

const Star = ({ on, delay }: { on: boolean; delay: number }) => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300" style={{ transitionDelay: `${delay}ms`, transform: on ? "scale(1)" : "scale(.8)" }} aria-hidden="true">
        <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2-6.2 3.2L7 14.2 2 9.3l6.9-1z" fill={on ? "#FBBC04" : "none"} stroke={on ? "#FBBC04" : "#9CA3AF"} strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
);

const ReviewTap: React.FC<Props> = ({ bedrijf }) => {
    const [step, setStep] = useState(1);
    const [held, setHeld] = useState(false);
    const [still, setStill] = useState(false);

    useEffect(() => {
        const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) { setStill(true); setStep(3); return; }
        if (held) return;
        const t = setTimeout(() => setStep((s) => (s % 3) + 1), step === 3 ? 4200 : 2600);
        return () => clearTimeout(t);
    }, [step, held]);

    const pick = (n: number) => { setHeld(true); setStep(n); };
    const tapped = step >= 2;

    return (
        <figure
            data-explains="flow"
            data-gets="Met één tik op het display schrijft je klant een Google review"
            className="relative m-0 rounded-3xl border border-gray-200 dark:border-gray-700 bg-[var(--hero-background)] p-5 sm:p-7 shadow-xl"
            onMouseLeave={() => setHeld(false)}
        >
            <div className="relative h-[250px] sm:h-[290px]" aria-hidden="true">
                {/* the counter */}
                <div className="absolute left-0 right-0 bottom-0 h-10 rounded-xl bg-gradient-to-b from-[#e9e4dc] to-[#d9d1c4] dark:from-[#3a3631] dark:to-[#2b2824]" />
                {/* the NFC display on the counter */}
                <div className="absolute bottom-8 left-[6%] sm:left-[10%] w-[132px] sm:w-[150px]">
                    <div className="relative rounded-2xl border-2 border-white/80 dark:border-white/20 bg-white/70 dark:bg-white/10 backdrop-blur px-3 pt-3 pb-4 text-center shadow-lg">
                        <div className="mx-auto mb-2 grid place-items-center w-12 h-12 rounded-full bg-[var(--primary)]">
                            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round"><path d="M6 8.5a5 5 0 0 1 0 7M9.5 6a8.5 8.5 0 0 1 0 12M13 3.5a12 12 0 0 1 0 17" /></svg>
                        </div>
                        <div className="text-[13px] font-bold leading-tight text-gray-900 dark:text-white">Tik hier voor<br />een review</div>
                        <div className="mt-2 text-[11px] text-gray-600 dark:text-gray-300 capitalize">Jouw {bedrijf}</div>
                        {/* the tap */}
                        <span className={`absolute right-2 top-2 w-14 h-14 rounded-full border-2 border-[var(--primary)] ${step === 1 && !still ? "animate-ping" : "opacity-0"}`} />
                    </div>
                    <div className="mx-auto h-3 w-20 rounded-b-lg bg-white/70 dark:bg-white/10" />
                </div>
                {/* the phone: moves to the display, then shows Google's form, then the review on the profile */}
                <div
                    className="absolute bottom-10 w-[132px] sm:w-[148px] h-[226px] sm:h-[262px] rounded-[26px] border-[5px] border-gray-900 bg-white dark:bg-[#111] shadow-2xl transition-all duration-700 ease-out"
                    style={{ left: tapped ? "54%" : "30%", transform: tapped ? "rotate(0deg)" : "rotate(-14deg) translateY(-6px)" }}
                >
                    <div className="mx-auto mt-1.5 h-1.5 w-10 rounded-full bg-gray-900/80" />
                    <div className="px-3 pt-3 text-left">
                        {step === 1 && (
                            <div className="pt-10 text-center text-[11px] text-gray-500">
                                <svg viewBox="0 0 24 24" className="mx-auto mb-2 w-9 h-9 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 8.5a5 5 0 0 1 0 7M9.5 6a8.5 8.5 0 0 1 0 12M13 3.5a12 12 0 0 1 0 17" /></svg>
                                bij het display houden
                            </div>
                        )}
                        {step >= 2 && (
                            <div>
                                <div className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-900 dark:text-white">
                                    <span className="font-black text-[15px]"><span className="text-[#4285F4]">G</span></span> Review schrijven
                                </div>
                                <div className="mt-3 text-[12px] font-bold capitalize text-gray-900 dark:text-white">Jouw {bedrijf}</div>
                                <div className="mt-2 flex gap-0.5">
                                    {[0, 1, 2, 3, 4].map((i) => <Star key={i} on={step >= 2} delay={still ? 0 : i * 140} />)}
                                </div>
                                <div className="mt-3 space-y-1.5">
                                    <div className="h-1.5 rounded bg-gray-200 dark:bg-gray-700 w-full" />
                                    <div className="h-1.5 rounded bg-gray-200 dark:bg-gray-700 w-4/5" />
                                </div>
                                <div className={`mt-4 rounded-full py-1.5 text-center text-[12px] font-bold transition-colors duration-300 ${step === 3 ? "bg-green-600 text-white" : "bg-[#1a73e8] text-white"}`}>
                                    {step === 3 ? "Geplaatst" : "Plaatsen"}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* the business profile gets the review */}
                <div className={`absolute right-0 top-2 sm:top-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-3 py-2 shadow-lg transition-all duration-500 ${step === 3 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
                    <div className="text-[11px] text-gray-500">Google bedrijfsprofiel</div>
                    <div className="text-[13px] font-bold text-gray-900 dark:text-white">+1 review <span className="text-[#FBBC04]">★★★★★</span></div>
                </div>
            </div>
            <ol className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2 list-none p-0 m-0">
                {STEPS.map((s) => (
                    <li
                        key={s.n}
                        data-step={s.n}
                        tabIndex={0}
                        onMouseEnter={() => pick(s.n)}
                        onFocus={() => pick(s.n)}
                        onClick={() => pick(s.n)}
                        className={`cursor-default rounded-xl border-2 px-3 py-2 text-left transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${step === s.n || still ? "border-[var(--primary)] bg-white dark:bg-gray-900" : "border-transparent bg-white/50 dark:bg-white/5 opacity-70"}`}
                    >
                        <span className="flex items-center gap-2 text-[15px] font-bold text-gray-900 dark:text-white">
                            <span className={`grid place-items-center w-6 h-6 rounded-full text-[12px] ${step === s.n || still ? "bg-[var(--primary)] text-gray-900" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"}`}>{s.n}</span>
                            {s.label}
                        </span>
                        <span className="mt-1 block text-[14px] leading-snug text-gray-600 dark:text-gray-300">{s.say}</span>
                    </li>
                ))}
            </ol>
        </figure>
    );
};

export default ReviewTap;
