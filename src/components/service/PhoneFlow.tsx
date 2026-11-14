"use client";
import React, { useEffect, useState } from "react";

// What a service does, on first view and built in the page (no picture, no clip): a phone that walks through the
// steps the customer and the owner see, with each step in words under it. Real text, so a phone reads it at full
// size and Google and AI search read it; it walks by itself, a tap or a pointer on a step holds that step, and with
// reduced motion every step stands lit. The same component on every own niche site; the words come from the page.
export type Screen =
    | { kind: "call"; title: string; lines: [string, string][] }
    | { kind: "chat"; title: string; lines: [string, string][] }
    | { kind: "slot"; title: string; slot: string; detail: string; badge?: string }
    | { kind: "card"; title: string; name: string; rows: string[]; badge?: string }
    | { kind: "search"; query: string; results: { name: string; you?: boolean; note: string }[] }
    | { kind: "post"; channel: string; caption: string; meta: string }
    | { kind: "list"; title: string; items: { text: string; done?: boolean }[] };

export type FlowStep = { label: string; say: string; screen: Screen };

const Bubble = ({ who, text, i }: { who: string; text: string; i: number }) => {
    const mine = who === "Klant" || who === "Jij";
    return (
        <div className={`flex ${mine ? "justify-end" : "justify-start"}`} style={{ animation: `pf-in .4s ${i * 0.35}s both` }}>
            <div className={`max-w-[88%] rounded-2xl px-2.5 py-1.5 text-[11px] sm:text-[12px] leading-snug ${mine ? "bg-[#dcf8c6] text-gray-900 rounded-br-sm" : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-sm"}`}>
                <span className="block text-[9px] sm:text-[10px] font-bold opacity-60">{who}</span>
                {text}
            </div>
        </div>
    );
};

const Badge = ({ text }: { text: string }) => (
    <span className="inline-block rounded-full bg-green-600 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-white whitespace-nowrap" style={{ animation: "pf-in .4s .5s both" }}>{text}</span>
);

const ScreenView = ({ s }: { s: Screen }) => {
    switch (s.kind) {
        case "call":
        case "chat":
            return (
                <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] font-semibold text-gray-900 dark:text-white">
                        <span className={`grid place-items-center w-5 h-5 rounded-full ${s.kind === "call" ? "bg-green-600" : "bg-[var(--secondary)]"} text-white text-[10px]`}>{s.kind === "call" ? "☏" : "✉"}</span>
                        {s.title}
                    </div>
                    {s.lines.map(([who, text], i) => <Bubble key={i} who={who} text={text} i={i} />)}
                </div>
            );
        case "slot":
            return (
                <div className="space-y-2">
                    <div className="text-[11px] sm:text-[12px] font-semibold text-gray-900 dark:text-white">{s.title}</div>
                    <div className="grid grid-cols-4 gap-1" aria-hidden="true">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className={`h-4 rounded ${i === 5 ? "bg-[var(--primary)]" : "bg-gray-100 dark:bg-gray-800"}`} style={i === 5 ? { animation: "pf-pop .5s .3s both" } : undefined} />
                        ))}
                    </div>
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-2" style={{ animation: "pf-in .4s .4s both" }}>
                        <div className="text-[12px] sm:text-[13px] font-bold text-gray-900 dark:text-white">{s.slot}</div>
                        <div className="text-[10px] sm:text-[11px] text-gray-600 dark:text-gray-300 leading-snug">{s.detail}</div>
                    </div>
                    {s.badge && <Badge text={s.badge} />}
                </div>
            );
        case "card":
            return (
                <div className="space-y-2">
                    <div className="text-[11px] sm:text-[12px] font-semibold text-gray-900 dark:text-white">{s.title}</div>
                    <div className="flex items-center gap-2">
                        <span className="grid place-items-center w-7 h-7 rounded-full bg-[var(--primary)] text-[11px] font-bold text-gray-900">{s.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
                        <span className="text-[12px] sm:text-[13px] font-bold text-gray-900 dark:text-white">{s.name}</span>
                    </div>
                    <ul className="space-y-1 list-none p-0 m-0">
                        {s.rows.map((r, i) => (
                            <li key={r} className="rounded-lg bg-gray-50 dark:bg-gray-800 px-2 py-1 text-[10px] sm:text-[11px] leading-snug text-gray-700 dark:text-gray-200" style={{ animation: `pf-in .4s ${0.2 + i * 0.25}s both` }}>{r}</li>
                        ))}
                    </ul>
                    {s.badge && <Badge text={s.badge} />}
                </div>
            );
        case "search":
            return (
                <div className="space-y-1.5">
                    <div className="rounded-full border border-gray-200 dark:border-gray-700 px-2.5 py-1 text-[11px] text-gray-700 dark:text-gray-200 truncate"><span className="font-black text-[#4285F4]">G</span> {s.query}</div>
                    {s.results.map((r, i) => (
                        <div key={r.name} className={`rounded-lg px-2 py-1.5 ${r.you ? "border-2 border-[var(--primary)] bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800 opacity-70"}`} style={{ animation: `pf-in .4s ${i * 0.3}s both` }}>
                            <div className="text-[11px] sm:text-[12px] font-bold text-[#1a0dab] dark:text-blue-300 truncate">{r.name}</div>
                            <div className="text-[10px] text-gray-600 dark:text-gray-300 leading-snug">{r.note}</div>
                        </div>
                    ))}
                </div>
            );
        case "post":
            return (
                <div className="space-y-1.5">
                    <div className="text-[11px] sm:text-[12px] font-semibold text-gray-900 dark:text-white">{s.channel}</div>
                    <div className="h-16 sm:h-20 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-80" aria-hidden="true" style={{ animation: "pf-pop .5s both" }} />
                    <div className="text-[11px] sm:text-[12px] leading-snug text-gray-900 dark:text-gray-100" style={{ animation: "pf-in .4s .3s both" }}>{s.caption}</div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400" style={{ animation: "pf-in .4s .5s both" }}>{s.meta}</div>
                </div>
            );
        case "list":
            return (
                <div className="space-y-1.5">
                    <div className="text-[11px] sm:text-[12px] font-semibold text-gray-900 dark:text-white">{s.title}</div>
                    <ul className="space-y-1 list-none p-0 m-0">
                        {s.items.map((it, i) => (
                            <li key={it.text} className="flex items-start gap-1.5 text-[10px] sm:text-[11px] leading-snug text-gray-700 dark:text-gray-200" style={{ animation: `pf-in .4s ${i * 0.25}s both` }}>
                                <span className={`mt-px grid place-items-center shrink-0 w-3.5 h-3.5 rounded-full text-[8px] ${it.done ? "bg-green-600 text-white" : "border border-gray-400"}`}>{it.done ? "✓" : ""}</span>
                                {it.text}
                            </li>
                        ))}
                    </ul>
                </div>
            );
    }
};

const PhoneFlow: React.FC<{ gets: string; steps: FlowStep[] }> = ({ gets, steps }) => {
    const [step, setStep] = useState(1);
    const [held, setHeld] = useState(false);
    const [still, setStill] = useState(false);
    const n = steps.length;

    useEffect(() => {
        const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) { setStill(true); setStep(n); return; }
        if (held) return;
        const t = setTimeout(() => setStep((s) => (s % n) + 1), step === n ? 4800 : 3400);
        return () => clearTimeout(t);
    }, [step, held, n]);

    const pick = (i: number) => { setHeld(true); setStep(i); };
    const current = steps[step - 1];

    return (
        <figure
            data-explains="flow"
            data-gets={gets}
            className="relative m-0 rounded-3xl border border-gray-200 dark:border-gray-700 bg-[var(--hero-background)] p-4 sm:p-6 shadow-xl"
            onMouseLeave={() => setHeld(false)}
        >
            <style>{`@keyframes pf-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}@keyframes pf-pop{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:none}}@media (prefers-reduced-motion: reduce){figure[data-explains] *{animation:none!important}}`}</style>
            <div className="flex justify-center" aria-hidden="true">
                <div className="w-[208px] sm:w-[232px] h-[262px] sm:h-[320px] rounded-[28px] border-[6px] border-gray-900 bg-white dark:bg-[#111] shadow-2xl overflow-hidden">
                    <div className="mx-auto mt-1.5 h-1.5 w-12 rounded-full bg-gray-900/80" />
                    <div key={step} className="px-3 pt-3">
                        <ScreenView s={current.screen} />
                    </div>
                </div>
            </div>
            <ol className={`mt-4 grid grid-cols-1 ${n === 4 ? "sm:grid-cols-2" : "sm:grid-cols-3"} gap-2 list-none p-0 m-0`}>
                {steps.map((s, i) => {
                    const on = step === i + 1 || still;
                    return (
                        <li
                            key={s.label}
                            data-step={i + 1}
                            tabIndex={0}
                            onMouseEnter={() => pick(i + 1)}
                            onFocus={() => pick(i + 1)}
                            onClick={() => pick(i + 1)}
                            className={`cursor-default rounded-xl border-2 px-3 py-1.5 sm:py-2 text-left transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${on ? "border-[var(--primary)] bg-white dark:bg-gray-900" : "border-transparent bg-white/50 dark:bg-white/5 opacity-70"}`}
                        >
                            <span className="flex items-center gap-2 text-[15px] leading-snug font-bold text-gray-900 dark:text-white">
                                <span className={`grid shrink-0 place-items-center w-6 h-6 rounded-full text-[12px] ${on ? "bg-[var(--primary)] text-gray-900" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"}`}>{i + 1}</span>
                                {s.label}
                            </span>
                            <span className={`mt-1 min-h-[2.5rem] sm:min-h-0 text-[14px] leading-snug text-gray-600 dark:text-gray-300 ${on ? "block" : "hidden sm:block"}`}>{s.say}</span>
                        </li>
                    );
                })}
            </ol>
        </figure>
    );
};

export default PhoneFlow;
