"use client";
import React, { useEffect, useState } from "react";
import { ladder, prijs } from "@/data/ladder";

// The prices as the route a customer takes: the free design, the website with its chatbot, the whole system, the
// work done for you. Real text in the page; it walks by itself, a pointer or tap on a step holds it, and with
// reduced motion every step stands lit. The same on every own niche site; the amounts are src/data/ladder.ts.
const steps = [
    { label: "Je gratis ontwerp", price: "€0", say: "Kies een ontwerp, zie hem met je eigen naam en houd het bestand." },
    ...ladder.map((p) => ({ label: p.naam, price: prijs(p), say: p.kort })),
];

const LadderFlow: React.FC = () => {
    const [step, setStep] = useState(1);
    const [held, setHeld] = useState(false);
    const [still, setStill] = useState(false);
    const n = steps.length;
    useEffect(() => {
        const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) { setStill(true); return; }
        if (held) return;
        const t = setTimeout(() => setStep((s) => (s % n) + 1), 3000);
        return () => clearTimeout(t);
    }, [step, held, n]);
    const pick = (i: number) => { setHeld(true); setStep(i); };
    return (
        <figure data-explains="flow" data-gets="Je begint gratis en betaalt alleen voor wat je erbij wilt" className="m-0" onMouseLeave={() => setHeld(false)}>
            <ol className="grid grid-cols-1 md:grid-cols-4 gap-3 list-none p-0 m-0">
                {steps.map((s, i) => {
                    const on = still || step === i + 1;
                    const past = !still && step > i + 1;
                    return (
                        <li
                            key={s.label}
                            data-step={i + 1}
                            tabIndex={0}
                            onMouseEnter={() => pick(i + 1)}
                            onFocus={() => pick(i + 1)}
                            onClick={() => pick(i + 1)}
                            className={`relative cursor-default rounded-2xl border-2 p-4 md:p-5 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${on ? "border-[var(--primary)] bg-white dark:bg-gray-900 shadow-lg md:-translate-y-1" : past ? "border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60" : "border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-white/5"}`}
                        >
                            <span className="flex items-center gap-2 mb-2">
                                <span className={`grid shrink-0 place-items-center w-7 h-7 rounded-full text-[13px] font-bold ${on || past ? "bg-[var(--primary)] text-gray-900" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"}`}>{i + 1}</span>
                                <span className="text-base font-bold text-gray-900 dark:text-white leading-tight">{s.label}</span>
                            </span>
                            <span className="block text-xl lg:text-[1.35rem] leading-tight font-black text-gray-900 dark:text-white mb-1">{s.price}</span>
                            <span className="block text-sm leading-snug text-gray-600 dark:text-gray-300">{s.say}</span>
                        </li>
                    );
                })}
            </ol>
        </figure>
    );
};

export default LadderFlow;
