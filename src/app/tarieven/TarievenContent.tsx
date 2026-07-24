"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsCheck2Circle, BsArrowRight, BsWhatsapp, BsCalendar3 } from "react-icons/bs";
import { siteDetails } from "@/data/siteDetails";
import { comparisonData, totalTraditionalCost, onzePrijsPerMaand } from "@/data/comparison";

// Deze pagina volgt het PROPOSITIE-CONTRACT (niche-sites-upgrade-programma.md §PROPOSITIE-CONTRACT):
//   ⛔1 geen tool-namen  ⛔2 geen tel-claims  ⛔3 geen vijfde ding
//   ② gratis = het ONTWERP + het bestand · betaald = het draaiend krijgen en houden
//   ⑤ vergelijk de REKENING (los bij elkaar vs alles inbegrepen), nooit de onderdelen
// De bedragen komen uit de bestaande bron (comparison.ts) — geen tweede waarheid op deze pagina.

const niche = siteDetails.niche?.toLowerCase() || "bedrijven";
const brand = siteDetails.siteName;

const plans = [
  {
    name: "Het ontwerp",
    price: "€0",
    period: "",
    description:
      "Kies een van onze echte websites, vul je salonnaam in en zie 'm meteen als de jouwe. Het ontwerpbestand is van jou.",
    features: [
      "Het complete ontwerp",
      "Je eigen naam en plaats erin",
      "Het bestand, om te houden",
      "Geen bedenktijd, geen voorwaarden",
      "Geen proefperiode die stiekem doorloopt",
    ],
    cta: "Kies je ontwerp",
    ctaLink: "/gratis-website",
    highlight: false,
    badge: "Gratis",
  },
  {
    name: "Laten draaien",
    price: "€79",
    period: "/maand",
    description:
      "Een website die stilstaat levert niets op. Dit is wat 'm laat wérken: live gezet, gevonden worden, en iemand die opneemt als jij je handen niet vrij hebt.",
    features: [
      "Je site live gezet en bijgehouden",
      "Elke week een nieuw artikel, zodat je gevonden wordt",
      "Chatbot die vragen opvangt buiten openingstijden",
      "Telefoon die opneemt terwijl jij knipt",
      "Herinneringen die no-shows wegnemen",
      "Maandelijks opzegbaar",
    ],
    cta: "Zo wil ik het",
    ctaLink: "/gratis-scan",
    highlight: true,
    badge: "Meest gekozen",
  },
  {
    name: "De site afkopen",
    price: "€800",
    period: "eenmalig",
    description:
      "Liever geen maandbedrag? Dan koop je de site af. Eerlijk erbij: zonder abonnement staat 'ie stil — geen nieuwe teksten, geen chatbot, geen telefoon.",
    features: [
      "De volledige website, eenmalig afgekocht",
      "Gebouwd op het ontwerp dat jij koos",
      "Je kunt later alsnog laten draaien",
      "Losse hulp op aanvraag",
    ],
    cta: "Vraag het aan",
    ctaLink: "/gratis-website",
    highlight: false,
    badge: "Eenmalig",
  },
];

const customOptions = [
  {
    name: "Helemaal op maat",
    price: "Vanaf €1.000",
    description:
      "Volledig custom gebouwd. Eenmalige investering, geen maandbedrag. Je betaalt daarnaast alleen wat je écht verbruikt.",
    cta: "Vraag offerte aan",
    ctaLink: "https://cal.com/studiolee",
  },
  {
    name: "Volledig uit handen",
    price: "Op maat",
    description:
      "Wij doen alles: de teksten, de vindbaarheid, de social, de opvolging. Jij staat in de salon. Wat het kost hangt af van wat je nodig hebt — dat rekenen we samen door.",
    cta: "Plan een gesprek",
    ctaLink: "https://cal.com/studiolee",
  },
];

const faqs = [
  {
    q: "Is het ontwerp echt gratis?",
    a: "Ja. Je kiest een van onze websites, ziet 'm meteen met je eigen salonnaam en plaats erin, en het ontwerpbestand mag je houden. Geen bedenktijd, geen voorwaarden, geen proefperiode die stiekem doorloopt.",
  },
  {
    q: "Wat krijg ik dan níét gratis?",
    a: "Het draaiend krijgen en houden. Live zetten, gevonden worden, teksten die blijven komen, iemand die opneemt. Dát is het werk, en dat zit in het abonnement. Een website die stilstaat levert niets op — daarom geven we het ontwerp weg en niet het draaien.",
  },
  {
    q: "Kan ik de website ook gewoon kopen?",
    a: "Dat kan, voor €800 eenmalig. Wees je er dan wel van bewust dat 'ie daarna stilstaat: geen nieuwe artikelen, geen chatbot, geen telefoon die opneemt. Wij zeggen dat liever vooraf dan achteraf. Je kunt altijd later alsnog laten draaien.",
  },
  {
    q: `Wat kost het als ik het los zou regelen?`,
    a: `Meer. Een boekingssysteem, hosting, een socialplanner, iemand voor je blogs en iemand voor je advertenties: los bij elkaar loopt dat op tot ongeveer €${totalTraditionalCost} per maand. Bij ons zit het in één rekening. Vergelijk dus de rekening, niet de onderdelen.`,
  },
  {
    q: "Hoe verschilt dit van een traditioneel bureau?",
    a: "Een marketingbureau rekent €1.500 tot €3.000 per maand en bedient vooral grote bedrijven. Wij leveren dezelfde kwaliteit — strategie, advies én uitvoering — voor een fractie daarvan, omdat we de uitvoering slim geautomatiseerd hebben.",
  },
  {
    q: "Is er een contract of opzegtermijn?",
    a: "Nee. Maandelijks opzegbaar. Geen contract, geen opzegtermijn, geen kleine lettertjes. Je blijft omdat het werkt, niet omdat je vastzit.",
  },
];

export default function TarievenContent() {
  const besparing = totalTraditionalCost - onzePrijsPerMaand;
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
            Eerlijk verhaal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Het ontwerp is gratis. Het draaien niet.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-accent max-w-2xl mx-auto"
          >
            Je krijgt het ontwerp én het bestand, zonder voorwaarden. Wat je daarna betaalt is voor het
            werk dat een website pas iets laat opleveren. Hieronder staat precies wat wat kost.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`relative rounded-2xl p-6 md:p-8 border ${
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
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-foreground-accent text-sm">{plan.period}</span>}
              </div>
              <p className="text-foreground-accent text-sm mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⑤ DE REKENSOM — vergelijk de rekening, niet de onderdelen (PROPOSITIE-CONTRACT §②/§⑤).
          Zelfde bron als de homepage (comparison.ts), dus de twee kunnen nooit uit elkaar lopen. */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Reken het eens los uit
          </h2>
          <p className="text-foreground-accent text-center mb-10 max-w-2xl mx-auto">
            Dit is wat een salon kwijt is als 'ie alles apart regelt. Niet om bang te maken, maar omdat
            het de eerlijkste vergelijking is: kijk naar de rekening onderaan, niet naar het lijstje.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-background)] p-6">
              <p className="text-sm font-semibold text-foreground-accent mb-4">Los bij elkaar</p>
              <ul className="space-y-2 mb-5">
                {comparisonData.map((row) => (
                  <li key={row.role} className="flex justify-between gap-4 text-sm border-b border-[var(--card-border)] pb-2">
                    <span>{row.role}</span>
                    <span className="text-foreground-accent whitespace-nowrap">€ {row.cost},-</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-baseline">
                <span className="font-semibold">Totaal per maand</span>
                <span className="text-2xl font-bold line-through decoration-red-500 decoration-2">
                  € {totalTraditionalCost},-
                </span>
              </div>
            </div>
            <div className="rounded-2xl border border-primary bg-[var(--card-background)] p-6 shadow-xl shadow-primary/10">
              <p className="text-sm font-semibold text-primary mb-4">Bij {brand}, in één rekening</p>
              <p className="text-foreground-accent text-sm mb-6">
                Alles hierboven, maar dan door ons geregeld en op elkaar aangesloten. Eén factuur, één
                aanspreekpunt, en niemand die naar de ander wijst als er iets niet werkt.
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl md:text-5xl font-black text-primary">€ {onzePrijsPerMaand},-</span>
                <span className="text-foreground-accent text-sm">per maand</span>
              </div>
              <p className="text-sm text-green-500 font-semibold mb-6">
                Dat scheelt € {besparing},- per maand.
              </p>
              <a
                href="https://cal.com/studiolee"
                className="block text-center py-3 px-6 rounded-xl font-semibold bg-primary text-black hover:bg-primary-accent transition-all"
              >
                Reken het samen door
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Options */}
      <section className="py-12 px-4 bg-[var(--card-background)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Liever iets anders?</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            Niet elke salon past in een standaardpakket. Daarom kan het ook zo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customOptions.map((opt) => (
              <div key={opt.name} className="border border-[var(--card-border)] rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-1">{opt.name}</h3>
                <p className="text-2xl font-bold text-primary mb-3">{opt.price}</p>
                <p className="text-foreground-accent text-sm mb-6">{opt.description}</p>
                <a
                  href={opt.ctaLink}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  {opt.cta} <BsArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why cheaper than agency */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Hoe kan dit zo betaalbaar zijn?
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              Traditionele bureaus werken met grote teams, dure kantoren en lange trajecten. Ze rekenen
              €150+ per uur en bedienen vooral grote bedrijven. Dat maakt hun diensten onbetaalbaar voor
              de meeste {niche}.
            </p>
            <p>
              Wij werken anders. Door de uitvoering slim te automatiseren leveren we dezelfde kwaliteit —
              strategie, advies én uitvoering — zonder de overhead. Geen grote teams, geen dure kantoren,
              geen eindeloze vergaderingen. Wel: directe lijnen, snelle resultaten en persoonlijke aandacht.
            </p>
            <p>
              Het resultaat? Bureau-kwaliteit voor een fractie van de prijs. Toegankelijk voor elke salon,
              ook als je net begint. Advies zit gewoon in het pakket, daar sturen we geen aparte rekening voor.
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
            Begin bij het ontwerp — dat kost je niets — of plan een gesprek. Geen verplichtingen, geen druk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/gratis-website"
              className="bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all"
            >
              Kies je ontwerp
            </a>
            <a
              href="https://cal.com/studiolee"
              className="border border-foreground/20 px-8 py-3 rounded-xl font-semibold hover:bg-foreground/5 transition-all inline-flex items-center justify-center gap-2"
            >
              <BsCalendar3 /> Plan een gesprek
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
