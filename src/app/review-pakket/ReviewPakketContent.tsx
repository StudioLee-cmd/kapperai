"use client";
import React from 'react';
import Link from 'next/link';
import Header from "@/components/Header";
import ReviewPricing from "@/components/Review/ReviewPricing";
import ReviewTap from "@/components/Review/ReviewTap";
import RouteExplainer from "@/components/RouteExplainer";
import { siteDetails } from "@/data/siteDetails";
import { motion } from "framer-motion";
import { BsArrowRight, BsCalendarCheck, BsClock, BsShop, BsChatHeart, BsQrCode } from 'react-icons/bs';

// The trade's words (clusters/seo/own-sites/trades/<trade>.json): on another niche site the same page takes its own.
const trade = { enkelvoud: 'kapper', bedrijf: 'kapsalon' };
const brand = siteDetails.siteName;

const FAQ = [
    {
        q: 'Wat is het reviewpakket?',
        a: `Het reviewpakket van ${brand} is een set NFC-displays, deurstickers en kaartjes in de huisstijl van je ${trade.bedrijf}: je klant houdt de telefoon ertegen en schrijft meteen een Google review.`,
    },
    {
        q: 'Wat kost het reviewpakket?',
        a: 'Het Start Pakket kost €179 en het Dominantie Pakket €279, allebei eenmalig. Voor ketens en franchises maken we een pakket op maat.',
    },
    {
        q: 'Hoe snel heb ik het pakket in mijn zaak?',
        a: 'Na je bestelling krijg je een mail om je logo en wensen te sturen. Binnen 7 dagen ontvang je de ontwerpen, en na je akkoord duurt de productie ongeveer een week.',
    },
    {
        q: 'Kan elke klant ermee een review schrijven?',
        a: 'De meeste telefoons openen het reviewformulier met één tik op het display. Op de visitekaartjes staat ook een QR-code, voor wie liever scant of later thuis een review schrijft.',
    },
    {
        q: 'Mag ik mijn klanten om een review vragen?',
        a: 'Ja. Vraag het iedere klant en zet er niets tegenover: Google verbiedt beloningen voor reviews en het alleen vragen aan tevreden klanten. Het display en de kaartjes vragen het iedereen op dezelfde manier.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function ReviewPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#171717] transition-colors duration-500">
            <Header />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero: what it is, what it costs, and what it does, before the first scroll */}
            <section className="relative pt-28 md:pt-36 pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    <div className="text-left">
                        <p className="text-blue-600 dark:text-[var(--secondary)] font-bold tracking-wider uppercase text-sm mb-3 sl-reveal">Reviewpakket</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 leading-[1.08] sl-reveal">
                            Reviews verzamelen als {trade.enkelvoud}, met één tik
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 sl-reveal sl-reveal-1">
                            Het reviewpakket van {brand} is een set NFC-displays, deurstickers en kaartjes in de huisstijl van je {trade.bedrijf}: je klant houdt de telefoon ertegen en schrijft meteen een Google review.
                        </p>
                        <p className="text-base text-gray-600 dark:text-gray-400 mb-7 sl-reveal sl-reveal-1">
                            Het is gemaakt voor {siteDetails.niche.toLowerCase()} die meer Google reviews willen zonder elke klant er zelf om te vragen.
                        </p>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-gray-900 dark:text-white sl-reveal sl-reveal-2">
                            <span className="text-2xl font-black">Vanaf €179 eenmalig</span>
                            <span className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300"><BsClock /> ontwerp binnen 7 dagen</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 sl-reveal sl-reveal-2">
                            <a href="#pakketten" className="inline-flex justify-center items-center gap-2 rounded-full bg-[var(--primary)] text-gray-900 font-bold py-3.5 px-7 hover:scale-105 transition-transform shadow-md">
                                Bekijk de pakketten <BsArrowRight />
                            </a>
                            <a href="/demo" className="inline-flex justify-center items-center gap-2 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-bold py-3.5 px-7 hover:border-[var(--secondary)] transition-colors">
                                <BsCalendarCheck /> Eerst gratis advies
                            </a>
                        </div>
                    </div>
                    <div className="sl-reveal sl-reveal-3">
                        <ReviewTap bedrijf={trade.bedrijf} />
                    </div>
                </div>
            </section>

            {/* Pricing: the price stands where the choice is made */}
            <div id="pakketten" className="scroll-mt-24">
                <ReviewPricing />
            </div>

            {/* The route from order to review */}
            <div className="bg-gray-50 dark:bg-gray-900/50">
                <RouteExplainer slot="review-pakket" />
            </div>

            {/* How a kapper asks for reviews: what the first page of Google answers, and what the package adds */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
                    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5">Zo vraag je als {trade.enkelvoud} om een review</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            Wie een {trade.enkelvoud} zoekt, kijkt in Google eerst naar de sterren en het aantal reviews. Een tevreden klant wil best een review schrijven, maar thuis is hij het vergeten. Daarom werkt het het best op het moment zelf, in je {trade.bedrijf}.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Meer over het moment en de toon lees je in <Link href="/blog/meer-google-reviews-als-kapper" className="text-blue-600 dark:text-[var(--secondary)] font-semibold underline underline-offset-4">Meer Google reviews als kapper</Link>.
                        </p>
                    </motion.div>
                    <div className="grid gap-4">
                        {[
                            { icon: BsShop, title: 'Bij het afrekenen', text: 'Het display staat op de balie naast de pin. Je klant betaalt, houdt de telefoon ertegen en de review is geschreven voor hij de deur uit is.' },
                            { icon: BsQrCode, title: 'Voor wie later wil', text: 'De deursticker en de kaartjes met QR-code geven klanten die geen tijd hebben de link mee naar huis.' },
                            { icon: BsChatHeart, title: 'Na de afspraak', text: 'Met de reviewsoftware krijgt elke klant na de afspraak ook vanzelf een verzoek, en jij reageert op elke review vanuit één plek.' },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="group flex gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 hover:border-blue-400 dark:hover:border-[var(--secondary)] hover:-translate-y-0.5 transition-all"
                            >
                                <span className="grid place-items-center shrink-0 w-11 h-11 rounded-xl bg-[var(--primary)] text-gray-900"><item.icon size={20} /></span>
                                <span>
                                    <span className="block text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</span>
                                    <span className="block text-gray-600 dark:text-gray-300 text-base leading-relaxed">{item.text}</span>
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ: the plain answers an AI engine can quote */}
            <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Veelgestelde vragen over het reviewpakket</h2>
                    <div className="space-y-3">
                        {FAQ.map((f) => (
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

            {/* Cross-links */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl md:text-2xl font-bold text-center mb-6 dark:text-white">Combineer met andere AI-tools</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/reviews" className="group border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-800 hover:border-blue-400 transition-all">
                            <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:text-white transition-colors">Reviews Software</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Combineer fysieke kaartjes met automatische digitale review-verzoeken.</p>
                            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-orange-500 text-sm font-semibold">Bekijk <BsArrowRight size={14} /></span>
                        </Link>
                        <Link href="/seo" className="group border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-800 hover:border-blue-400 transition-all">
                            <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:text-white transition-colors">SEO voor {siteDetails.niche}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Reviews voeden je Google ranking. Combineer ze met SEO automatisering.</p>
                            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-orange-500 text-sm font-semibold">Bekijk <BsArrowRight size={14} /></span>
                        </Link>
                        <Link href="/automatisering" className="group border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-800 hover:border-blue-400 transition-all">
                            <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:text-white transition-colors">Workflow Automatisering</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Review-verzoek versturen op het juiste moment, automatisch.</p>
                            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-orange-500 text-sm font-semibold">Bekijk <BsArrowRight size={14} /></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Free advice CTA: the e-mail address first (/demo), the talk after */}
            <section className="pb-20 pt-4 bg-white dark:bg-[#171717]">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-orange-600 dark:to-orange-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Twijfel je welk pakket het beste is?</h2>
                            <p className="text-lg text-blue-100 dark:text-orange-100 mb-8 max-w-2xl mx-auto">
                                Laat je e-mailadres achter en plan daarna een gratis gesprek van 15 minuten. We kijken samen welk pakket in jouw {trade.bedrijf} de meeste reviews oplevert.
                            </p>
                            <a
                                href="/demo"
                                className="inline-flex items-center gap-3 bg-white text-blue-700 dark:text-orange-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg group"
                            >
                                <BsCalendarCheck size={20} />
                                Plan gratis advies
                                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
