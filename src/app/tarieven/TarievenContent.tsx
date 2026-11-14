"use client";
import React from "react";
import Link from "next/link";
import { BsCheck2Circle, BsArrowRight } from "react-icons/bs";
import LadderFlow from "@/components/service/LadderFlow";
import { siteDetails } from "@/data/siteDetails";
import { trade } from "@/data/trade";
import { ladder, prijs } from "@/data/ladder";
import { comparisonData, totalTraditionalCost } from "@/data/comparison";

// The pricing page, the same on every own niche site: the free design, then the three monthly steps of the ladder
// (src/data/ladder.ts: 79 fixed, 179 and 379 "vanaf"), the buy-once line to /website-kopen, the bill compared and the
// answers. The trade's words come from src/data/trade.ts. Every way in for a talk goes to /demo first.
const brand = siteDetails.siteName;
const uithanden = ladder[2];

const ways: Record<string, { cta: string; href: string; note: string }> = {
    start: { cta: "Begin met je gratis ontwerp", href: "/gratis-website", note: "Kies je ontwerp, daarna laten we hem draaien." },
    systeem: { cta: "Vraag de demo aan", href: "/demo", note: "Je ziet eerst de demo, daarna kies je." },
    uithanden: { cta: "Plan een gesprek", href: "/demo", note: "Eerst je e-mailadres, dan kies je een tijd." },
};

const faqs = [
    { q: "Is het ontwerp echt gratis?", a: `Ja. Je kiest een van onze websites, ziet hem meteen met de naam en plaats van je ${trade.bedrijf} erin, en het ontwerpbestand mag je houden. Geen bedenktijd, geen voorwaarden, geen proefperiode die stiekem doorloopt.` },
    { q: "Wat zit er in €79 per maand?", a: "Je website, gebouwd, online en bijgehouden, met een chatbot die vragen opvangt. Normaal gebruik zit erin. Het is een vast bedrag." },
    { q: "Waarom staat er bij €179 en €379 'vanaf'?", a: "Bij het volledige systeem komt wat je verbruikt erbij, zoals gesprekken van de telefoonagent. Bij Wij doen het voor je hangt het bedrag af van wat je ons laat doen. Je ziet het altijd vooraf." },
    { q: "Kan ik later meer erbij nemen?", a: "Ja. Je begint met wat je nu nodig hebt en zet er later een dienst bij, in je eigen dashboard. Je zit nergens aan vast." },
    { q: "Kan ik de website ook gewoon kopen?", a: "Dat kan. Een website tot 10 pagina's kost €1.000 eenmalig, met het eerste jaar beheer en hosting erbij. Daarna staat hij wel stil: geen nieuwe artikelen, geen chatbot, geen telefoon die opneemt. Je kunt altijd later alsnog laten draaien." },
    { q: "Wat kost het als ik het los zou regelen?", a: `Meer. Iemand voor je social, je advertenties, je blogs, je foto's en je video's: los bij elkaar loopt dat op tot ongeveer €${totalTraditionalCost} per maand. Bij ons doen we het voor je vanaf €${uithanden.bedrag} per maand.` },
    { q: "Is er een contract of opzegtermijn?", a: "Nee. Maandelijks opzegbaar, geen opzegtermijn. Je blijft omdat het werkt, niet omdat je vastzit." },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function TarievenContent() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#171717] transition-colors duration-500">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Top: what it costs, as the route from the free design to the work done for you */}
            <section className="relative pt-28 md:pt-40 pb-12 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <p className="text-blue-600 dark:text-[var(--secondary)] font-bold tracking-wider uppercase text-sm mb-3 sl-reveal">Tarieven</p>
                        <h1 className="text-[2.15rem] leading-[1.1] md:text-6xl md:leading-[1.08] font-bold text-gray-900 dark:text-white mb-4 sl-reveal">Het ontwerp is gratis. Het draaien niet.</h1>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 sl-reveal sl-reveal-1">
                            Je krijgt het ontwerp van je website en het bestand, zonder voorwaarden. Daarna betaal je voor wat hem laat werken: €79 per maand voor je website met een chatbot, en meer alleen als jij meer wilt. Alle bedragen excl. btw, maandelijks opzegbaar.
                        </p>
                    </div>
                    <div className="sl-reveal sl-reveal-2">
                        <LadderFlow />
                    </div>
                </div>
            </section>

            {/* The steps in full */}
            <section className="py-14 px-4 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">Wat er in elke stap zit</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {ladder.map((p) => (
                            <div key={p.id} className={`flex flex-col rounded-2xl p-6 bg-white dark:bg-gray-800 ${p.id === "start" ? "border-2 border-[var(--primary)] shadow-lg" : "border border-gray-200 dark:border-gray-700"}`}>
                                {p.id === "start" && <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-[var(--secondary)] mb-2">Hier begin je</p>}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{p.naam}</h3>
                                <p className="text-3xl font-black text-gray-900 dark:text-white mt-2 mb-3">{prijs(p)}</p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{p.kort}</p>
                                <ul className="space-y-1.5 list-none p-0 m-0 mb-6">
                                    {p.inbegrepen.map((x) => <li key={x} className="flex gap-2 text-sm text-gray-700 dark:text-gray-200"><BsCheck2Circle className="shrink-0 mt-0.5 text-green-600" />{x}</li>)}
                                </ul>
                                <div className="mt-auto">
                                    <a href={ways[p.id].href} className={`block text-center py-3 px-6 rounded-full font-bold transition-all ${p.id === "start" ? "bg-[var(--primary)] text-gray-900 hover:scale-[1.02]" : "border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-[var(--secondary)]"}`}>{ways[p.id].cta}</a>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">{ways[p.id].note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-600 dark:text-gray-300 mt-8">
                        Liever niet maandelijks betalen?{" "}
                        <Link href="/website-kopen" className="font-semibold text-blue-600 dark:text-[var(--secondary)] underline underline-offset-4">Bekijk wat een website eenmalig kost</Link>
                    </p>
                </div>
            </section>

            {/* The bill compared, not the parts */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-3">Reken het eens los uit</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-10 max-w-2xl mx-auto">
                        Dit is wat een {trade.bedrijf} kwijt is als hij alles apart laat doen. Kijk naar de rekening onderaan, niet naar het lijstje.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">Los bij elkaar</p>
                            <ul className="space-y-2 mb-5 list-none p-0">
                                {comparisonData.map((row) => (
                                    <li key={row.role} className="flex justify-between gap-4 text-sm border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-800 dark:text-gray-200">
                                        <span>{row.role}</span>
                                        <span className="whitespace-nowrap">€{row.cost} per maand</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-between items-baseline text-gray-900 dark:text-white">
                                <span className="font-semibold">Samen</span>
                                <span className="text-2xl font-bold">€{totalTraditionalCost} per maand</span>
                            </div>
                        </div>
                        <div className="rounded-2xl border-2 border-[var(--primary)] bg-white dark:bg-gray-800 p-6 shadow-xl">
                            <p className="text-sm font-semibold text-blue-600 dark:text-[var(--secondary)] mb-4">Bij {brand}: wij doen het voor je</p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                                De teksten, de vindbaarheid, de social en de opvolging, door ons gedaan en op elkaar aangesloten. Eén rekening, één aanspreekpunt.
                            </p>
                            <p className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">{prijs(uithanden)}</p>
                            <a href="/demo" className="block text-center py-3 px-6 rounded-full font-bold bg-[var(--primary)] text-gray-900 hover:scale-[1.02] transition-all">Reken het samen door</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* The answers */}
            <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Veelgestelde vragen</h2>
                    <div className="space-y-3">
                        {faqs.map((f) => (
                            <details key={f.q} className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-4 open:shadow-md transition-shadow">
                                <summary className="cursor-pointer list-none flex justify-between items-center gap-4 text-lg font-bold text-gray-900 dark:text-white">
                                    {f.q}
                                    <span className="text-2xl leading-none text-gray-400 group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* The way in */}
            <section className="py-20 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Klaar om te beginnen?</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">Begin bij het ontwerp, dat kost je niets, of vraag eerst de demo aan. Geen verplichtingen.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href="/gratis-website" className="inline-flex justify-center items-center gap-2 rounded-full bg-[var(--primary)] text-gray-900 font-bold py-3.5 px-7 hover:scale-105 transition-transform shadow-md">Kies je ontwerp <BsArrowRight /></a>
                        <a href="/demo" className="inline-flex justify-center items-center gap-2 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-bold py-3.5 px-7 hover:border-[var(--secondary)] transition-colors">Vraag de demo aan</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
