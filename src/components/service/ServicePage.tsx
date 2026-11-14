"use client";
import React from "react";
import Link from "next/link";
import { BsArrowRight, BsCheck2Circle, BsPerson, BsCpu, BsPeople } from "react-icons/bs";
import PhoneFlow, { FlowStep } from "./PhoneFlow";
import RouteExplainer from "@/components/RouteExplainer";
import routes from "@/data/routes.json";
import { ladder, plan as planOf, prijs, Plan } from "@/data/ladder";

// One sub-page of an own niche site, the same on every site: on first view what the visitor gets in plain words,
// its price at the figure and what it does as a flow; then the route it takes (the video place), what you get,
// who does what (you, the AI, us), the price as the ladder says it, the services it works with, the answers and
// the way in. Every way in for a talk goes to /demo first: the e-mail address, then the agenda.
export type ServiceSpec = {
    slot?: keyof typeof routes;
    kicker: string;
    h1: string;
    lead: string;
    voor: string;
    plan: Plan["id"];
    priceWhy: string;
    flow: { gets: string; steps: FlowStep[] };
    intro?: { title: string; text: string[] };
    what: { title: string; items: { title: string; text: string }[] };
    who: { jij: string[]; ai: string[]; wij: string[] };
    related: { href: string; title: string; text: string }[];
    faqs: { q: string; a: string }[];
    close: { title: string; text: string };
    primary?: { text: string; href: string };
};

const faqSchema = (faqs: ServiceSpec["faqs"]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

const ServicePage: React.FC<{ spec: ServiceSpec }> = ({ spec }) => {
    const own = planOf(spec.plan);
    const primary = spec.primary || { text: "Vraag de demo aan", href: "/demo" };
    return (
        <main className="min-h-screen bg-white dark:bg-[#171717] transition-colors duration-500">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(spec.faqs)) }} />

            {/* Top: what it is, what it costs, and what it does, before the first scroll */}
            <section className="relative pt-28 md:pt-40 pb-14 overflow-hidden">
                <div className="absolute inset-0 z-0" aria-hidden="true">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-7 lg:gap-y-0">
                    <div className="text-left lg:col-start-1 lg:row-start-1 self-end">
                        <p className="text-blue-600 dark:text-[var(--secondary)] font-bold tracking-wider uppercase text-sm mb-3 sl-reveal">{spec.kicker}</p>
                        <h1 className="text-[2.15rem] leading-[1.1] md:text-6xl md:leading-[1.08] font-bold text-gray-900 dark:text-white mb-4 md:mb-5 sl-reveal">{spec.h1}</h1>
                        <p data-geo="what" className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 sl-reveal sl-reveal-1">{spec.lead}</p>
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-gray-900 dark:text-white sl-reveal sl-reveal-2">
                            <span className="text-2xl font-black">{prijs(own)}</span>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{spec.priceWhy}, excl. btw</span>
                        </div>
                    </div>
                    <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 self-center sl-reveal sl-reveal-3">
                        <PhoneFlow gets={spec.flow.gets} steps={spec.flow.steps} />
                    </div>
                    <div className="text-left lg:col-start-1 lg:row-start-2 self-start lg:pt-6">
                        <p data-geo="for-whom" className="text-base text-gray-600 dark:text-gray-400 mb-7 sl-reveal sl-reveal-2">{spec.voor}</p>
                        <div className="flex flex-col sm:flex-row gap-3 sl-reveal sl-reveal-2">
                            <a href={primary.href} className="inline-flex justify-center items-center gap-2 rounded-full bg-[var(--primary)] text-gray-900 font-bold py-3.5 px-7 hover:scale-105 transition-transform shadow-md">
                                {primary.text} <BsArrowRight />
                            </a>
                            <a href="#prijs" className="inline-flex justify-center items-center gap-2 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-bold py-3.5 px-7 hover:border-[var(--secondary)] transition-colors">
                                Wat het kost
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* The route it takes: the explainer in the video place */}
            {spec.slot && (
                <div className="bg-gray-50 dark:bg-gray-900/50">
                    <RouteExplainer slot={spec.slot} />
                </div>
            )}

            {/* What it is, in the words an AI engine can quote */}
            {spec.intro && (
                <section className="py-16 px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5">{spec.intro.title}</h2>
                        {spec.intro.text.map((p) => <p key={p} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-lg">{p}</p>)}
                    </div>
                </section>
            )}

            {/* What you get */}
            <section className={`py-16 px-4 ${spec.intro ? "bg-gray-50 dark:bg-gray-900/50" : ""}`}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">{spec.what.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {spec.what.items.map((it) => (
                            <div key={it.title} className="flex gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 hover:border-blue-400 dark:hover:border-[var(--secondary)] hover:-translate-y-0.5 transition-all">
                                <BsCheck2Circle className="shrink-0 mt-1 text-green-600" size={20} />
                                <span>
                                    <span className="block text-lg font-bold text-gray-900 dark:text-white mb-1">{it.title}</span>
                                    <span className="block text-gray-600 dark:text-gray-300 text-base leading-relaxed">{it.text}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who does what: you decide, the AI does the repeat work, a professional does what needs a person */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 text-center">Wat jij doet, wat de AI doet, wat wij doen</h2>
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">Jij beslist. De AI doet het herhaalwerk. Waar een mens nodig is, doen wij het.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { icon: BsPerson, title: "Jij", items: spec.who.jij },
                            { icon: BsCpu, title: "De AI", items: spec.who.ai },
                            { icon: BsPeople, title: "Wij", items: spec.who.wij },
                        ].map((col) => (
                            <div key={col.title} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-[var(--primary)] text-gray-900"><col.icon size={18} /></span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{col.title}</h3>
                                </div>
                                <ul className="space-y-2 list-none p-0 m-0">
                                    {col.items.map((x) => <li key={x} className="text-gray-600 dark:text-gray-300 leading-relaxed">{x}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The price as the ladder says it; this service's own step is marked */}
            <section id="prijs" className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50 scroll-mt-24">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 text-center">Wat het kost</h2>
                    <p data-geo="cost" className="text-center text-gray-600 dark:text-gray-300 mb-10">{spec.kicker} zit in {own.naam.toLowerCase()}, {prijs(own).toLowerCase()}. Maandelijks opzegbaar, bedragen excl. btw.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {ladder.map((p) => {
                            const mine = p.id === spec.plan;
                            return (
                                <div key={p.id} className={`rounded-2xl p-6 bg-white dark:bg-gray-800 ${mine ? "border-2 border-[var(--primary)] shadow-lg" : "border border-gray-200 dark:border-gray-700"}`}>
                                    {mine && <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-[var(--secondary)] mb-2">Hier zit {spec.kicker.toLowerCase()} in</p>}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{p.naam}</h3>
                                    <p className="text-2xl font-black text-gray-900 dark:text-white mt-2 mb-3">{prijs(p)}</p>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{p.kort}</p>
                                    <ul className="space-y-1.5 list-none p-0 m-0">
                                        {p.inbegrepen.map((x) => <li key={x} className="flex gap-2 text-sm text-gray-700 dark:text-gray-200"><BsCheck2Circle className="shrink-0 mt-0.5 text-green-600" />{x}</li>)}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                    <p className="text-center mt-8"><Link href="/tarieven" className="inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-[var(--secondary)] underline underline-offset-4">Alle tarieven <BsArrowRight /></Link></p>
                </div>
            </section>

            {/* Works with */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Werkt samen met</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {spec.related.map((r) => (
                            <Link key={r.href} href={r.href} className="group border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-800 hover:border-blue-400 transition-all">
                                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 text-gray-900 dark:text-white transition-colors">{r.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{r.text}</p>
                                <span className="inline-flex items-center gap-1 text-blue-600 dark:text-orange-500 text-sm font-semibold">Bekijk <BsArrowRight size={14} /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* The answers */}
            <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Veelgestelde vragen</h2>
                    <div className="space-y-3">
                        {spec.faqs.map((f) => (
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

            {/* The way in: the e-mail address first (/demo), the talk after */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-orange-600 dark:to-orange-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-5">{spec.close.title}</h2>
                            <p className="text-lg text-blue-100 dark:text-orange-100 mb-8 max-w-2xl mx-auto">{spec.close.text}</p>
                            <a href={primary.href} className="inline-flex items-center gap-3 bg-white text-blue-700 dark:text-orange-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg group">
                                {primary.text} <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServicePage;
