"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsCheck2Circle, BsArrowRight, BsWhatsapp, BsCalendar3, BsStarFill, BsRocketTakeoff } from "react-icons/bs";
import { siteDetails } from "@/data/siteDetails";

const niche = siteDetails.niche?.toLowerCase() || "bedrijven";
const nicheSingular = niche.endsWith("s") ? niche.slice(0, -1) : niche;
const brand = siteDetails.siteName;

const plans = [
  {
    name: "Managed Groei Basis",
    price: "€79",
    period: "/maand",
    priceNote: "incl. BTW",
    description: `De ideale start voor ZZP\'ers en starters. Jouw online groei, beheerd door AI.`,
    features: [
      "SaaS Toolbox (Self-Service App)",
      "1x SEO Blog per week (beheerd)",
      "25 Credits Trial (14 dagen)",
      "Maandelijkse 15 min strategie call",
      "Daarna 50 Credits p/m",
      "Video & Photo AI (Basic)",
      "Voice AI (Basic)",
      "LazyAds & Social AI",
      "Social Media Planner",
      "Ad Manager",
      "On-site Chatbot",
    ],
    cta: "Start Gratis",
    ctaLink: "/gratis-scan",
    highlight: false,
    badge: "Starter",
    focus: "Focus: Ideale start voor ZZP & Starters.",
    buyout: true,
  },
  {
    name: "Managed Groei Pro",
    price: "€297",
    period: "/maand",
    priceNote: "excl. BTW",
    description: `Externe high-end marketing service voor MKB. Volledig beheerd, jij hoeft niets te doen.`,
    features: [
      "Alles uit Basis",
      "Volledig up-to-date in 15 min per maand",
      "Managed Studio (Agency Power)",
      "UGC Product Video\u2019s (AI Modellen)",
      "1x SEO Blog + 4x Social Post p/w",
      "Managed Dashboard & Setup",
      "Onbeperkt Credits (Managed)",
      "Groei-Garantie",
    ],
    cta: "Bekijk Opties",
    ctaLink: "https://calendly.com/tim-studiolee",
    highlight: true,
    badge: "Populair",
    focus: "Focus: MKB — Externe high-end software service.",
    buyout: false,
  },
  {
    name: "Managed Groei Elite",
    price: "€497",
    period: "/maand",
    priceNote: "excl. BTW",
    description: `Maximale inzet en dominantie. Voor ambitieuze bedrijven die willen groeien.`,
    features: [
      "Alles uit Pro",
      "Growth Partner (Ambitieuze Bedrijven)",
      "Maandelijkse 1 uur diepe strategie sessie",
      "High-End UGC Video\u2019s (Reels/TikTok)",
      "2x SEO Blogs + 8x Social Posts p/w",
      "Deep-Level SEO Editor",
      "Ads Strategie (Meta/Google)",
      "Client App (Afspraken maken)",
      "Physical Review Solutions (NFC/QR)",
    ],
    cta: "Bekijk Opties",
    ctaLink: "https://calendly.com/tim-studiolee",
    highlight: false,
    badge: "Best Value",
    focus: "Focus: Best Value — Maximale inzet & dominantie.",
    buyout: false,
  },
];

const faqs = [
  {
    q: "Wat zit er in het Managed Groei Basis pakket?",
    a: `Het Basis pakket is een volledig beheerd systeem: je krijgt een professionele website, 1 SEO-blogartikel per week, AI Chatbot en Voice AI, social media tools en een maandelijkse strategie call van 15 minuten. Alles wat je nodig hebt om vindbaar te worden en te groeien.`,
  },
  {
    q: "Wat is het verschil tussen Basis, Pro en Elite?",
    a: "Basis is AI-beheerd met 1 blog per week en de volledige toolbox. Pro voegt daar volledig managed marketing aan toe: UGC video\u2019s, social media posts, onbeperkt credits en Groei-Garantie. Elite gaat nog verder met 2 blogs per week, 8 social posts, ads strategie, een diepe strategie sessie en fysieke review-oplossingen.",
  },
  {
    q: "Kan ik het systeem eenmalig afkopen?",
    a: "Ja. Bij het Basis pakket kun je 12 maanden vooruit betalen en daarna nooit meer maandkosten hebben. Je houdt het volledige systeem inclusief wekelijkse SEO blogs. Je betaalt alleen nog voor daadwerkelijk AI-gebruik. Plan een gesprek in om deze optie te bespreken.",
  },
  {
    q: "Is er een contract of opzegtermijn?",
    a: "Nee. Alle pakketten zijn maandelijks opzegbaar. Geen contract, geen opzegtermijn, geen kleine lettertjes. Je blijft omdat het werkt, niet omdat je vastzit.",
  },
  {
    q: "Hoe verschilt dit van een traditioneel bureau?",
    a: `Een traditioneel marketing bureau rekent \u20ac1.500 tot \u20ac3.000+ per maand en bedient vooral bedrijven met \u20ac1M+ omzet. Wij leveren dezelfde kwaliteit door AI slim in te zetten. Toegankelijk voor elk ${nicheSingular}sbedrijf, ook als je net begint.`,
  },
  {
    q: "Zijn de prijzen inclusief of exclusief BTW?",
    a: "Het Basis pakket (\u20ac79/mo) is inclusief BTW. Pro, Elite en Full-Service zijn exclusief BTW. Als ZZP\u2019er of MKB-ondernemer kun je de BTW verrekenen met de Belastingdienst.",
  },
];

export default function TarievenContent() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Transparante Prijzen
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Tarieven — {brand}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-accent max-w-2xl mx-auto"
          >
            Eerlijke, transparante prijzen. Geen verrassingen. Kies het pakket dat bij jouw {nicheSingular}sbedrijf past.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`relative rounded-2xl p-6 md:p-8 border flex flex-col ${
                plan.highlight
                  ? "border-primary bg-[var(--card-background)] shadow-xl shadow-primary/10 scale-[1.02]"
                  : "border-[var(--card-border)] bg-[var(--card-background)]"
              }`}
            >
              {plan.badge && (
                <span
                  className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold ${
                    plan.highlight
                      ? "bg-primary text-black"
                      : "bg-foreground-accent/20 text-foreground-accent"
                  }`}
                >
                  {plan.badge}
                </span>
              )}
              <h3 className="text-xl font-bold mt-2 mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                <span className="text-foreground-accent text-sm">{plan.period}</span>
              </div>
              <p className="text-xs text-foreground-accent mb-2">({plan.priceNote})</p>
              <p className="text-xs text-primary font-medium mb-4">{plan.focus}</p>
              <p className="text-foreground-accent text-sm mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <BsCheck2Circle className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.ctaLink}
                className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.highlight
                    ? "bg-primary text-black hover:bg-primary-accent"
                    : "bg-foreground/10 hover:bg-foreground/20 text-foreground"
                }`}
              >
                {plan.cta}
              </a>
              {plan.buyout && (
                <div className="mt-4 pt-4 border-t border-[var(--card-border)]">
                  <p className="text-xs text-foreground-accent mb-2">
                    <strong>Eenmalige afkoop:</strong> Betaal 12 maanden vooruit en betaal nooit meer maandkosten. Je houdt het volledige systeem. Alleen AI-gebruikskosten.
                  </p>
                  <a
                    href="https://calendly.com/tim-studiolee"
                    className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    Boek een gesprek <BsArrowRight />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Unlimited Option */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="border border-primary/30 rounded-2xl p-6 md:p-8 text-center bg-primary/5"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <BsRocketTakeoff className="text-primary text-xl" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Unlimited Option</span>
              <span className="bg-primary text-black text-xs font-bold px-2 py-0.5 rounded-full">Populair</span>
            </div>
            <p className="text-foreground-accent text-sm mb-3">
              Upgrade naar onbeperkt gebruik van Voice AI en alle workflows.
            </p>
            <p className="text-2xl font-bold mb-1">€197<span className="text-sm font-normal text-foreground-accent"> /maand extra</span></p>
            <p className="text-xs text-foreground-accent">
              *Kan op elk moment wijzigen. Exclusief premium AI-versies (Credits). Bevat alle standaard tools voor dagelijks gebruik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full Service */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 md:p-10 text-white"
          >
            <div className="flex items-center gap-2 mb-2">
              <BsStarFill className="text-yellow-400" />
              <span className="text-sm font-bold uppercase tracking-wider text-yellow-400">VIP Service</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Full-Service</h3>
            <p className="text-gray-300 text-sm mb-4">
              Focus: Het complete pakket voor marketingsucces.
            </p>
            <p className="text-3xl font-bold text-primary mb-6">Op maat prijs</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {[
                "Alles uit Elite + Maatwerk",
                "Custom Maatwerk (High-End)",
                "Volledige Maatwerk Video-Producties",
                "Web Development & CRO",
                "Actieve Linkbuilding",
                "Fysieke Marketing (DM/Flyers)",
                "Custom AI Sales Machine",
                "Strategie op Locatie (Optioneel)",
              ].map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-gray-200">
                  <BsCheck2Circle className="text-primary mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <a
              href="https://calendly.com/tim-studiolee"
              className="inline-block bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all"
            >
              Boek een Demo Call
            </a>
          </motion.div>
        </div>
      </section>

      {/* How is this affordable */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Hoe kan dit zo betaalbaar zijn?
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              Traditionele bureaus werken met grote teams, dure kantoren en lange trajecten. Ze rekenen €150+ per uur
              en bedienen vooral grote bedrijven. Dat maakt hun diensten onbetaalbaar voor de meeste {niche}.
            </p>
            <p>
              Wij werken anders. Door AI-technologie slim in te zetten leveren we dezelfde kwaliteit — strategie,
              consulting en uitvoering — maar zonder de overhead. Geen grote teams, geen dure kantoren, geen
              eindeloze vergaderingen. Wel: directe lijnen, snelle resultaten en persoonlijke aandacht.
            </p>
            <p>
              Het resultaat? Agency-kwaliteit voor een fractie van de prijs. Toegankelijk voor elk {nicheSingular}sbedrijf,
              ook als je net begint.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Veelgestelde Vragen</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-[var(--card-border)] rounded-xl">
                <summary className="cursor-pointer p-5 font-semibold text-lg flex justify-between items-center">
                  {faq.q}
                  <span className="text-primary group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <div className="px-5 pb-5 text-foreground-accent">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om te starten?</h2>
          <p className="text-foreground-accent mb-8">
            Begin met een gratis scan of plan een vrijblijvend gesprek. Geen verplichtingen, geen druk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/gratis-scan"
              className="bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all"
            >
              Gratis Scan
            </a>
            <a
              href="https://calendly.com/tim-studiolee"
              className="border border-foreground/20 px-8 py-3 rounded-xl font-semibold hover:bg-foreground/5 transition-all inline-flex items-center justify-center gap-2"
            >
              <BsCalendar3 /> Plan een Gesprek
            </a>
            <a
              href="https://wa.me/31611594862"
              className="border border-green-500/30 text-green-500 px-8 py-3 rounded-xl font-semibold hover:bg-green-500/10 transition-all inline-flex items-center justify-center gap-2"
            >
              <BsWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Schema.org FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
