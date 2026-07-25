"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BsCheck2Circle,
  BsArrowRight,
  BsWhatsapp,
  BsCalendar3,
  BsChatDots,
  BsLightning,
  BsPeople,
  BsClockHistory,
  BsQuestionCircle,
  BsXCircle,
  BsPhone,
  BsBell,
  BsArrowRepeat,
  BsCalendarCheck,
} from "react-icons/bs";
import { siteDetails } from "@/data/siteDetails";

const niche = siteDetails.niche?.toLowerCase() || "kappers";
const nicheSingular = niche.endsWith("s") ? niche.slice(0, -1) : niche;
const brand = siteDetails.siteName;

const features = [
  {
    icon: BsWhatsapp,
    title: "WhatsApp + SMS + e-mail",
    desc: `De herinnering komt binnen waar jouw klant 'm leest — WhatsApp eerst, SMS als backup, e-mail als bevestiging. Jij kiest niets, het systeem matcht per klant.`,
  },
  {
    icon: BsClockHistory,
    title: "Slimme timing",
    desc: `Een knipafspraak krijgt een herinnering op andere momenten dan een kleurbehandeling. Het systeem leert wat voor jouw kapsalon werkt en stuurt op de juiste tijd.`,
  },
  {
    icon: BsCalendarCheck,
    title: "Eén tik bevestigen of verzetten",
    desc: `Klanten bevestigen met "JA" of verzetten met één link. Geen telefoonrondjes, geen heen-en-weer-mailen, geen "hoorde je nog van...".`,
  },
  {
    icon: BsBell,
    title: "Twijfelaars opvangen",
    desc: `Reageert een klant niet binnen 4 uur op de herinnering? Het systeem stuurt automatisch een vriendelijke nudge. Veel no-shows worden zo alsnog bezoeken.`,
  },
  {
    icon: BsArrowRepeat,
    title: "Aanpasbare templates",
    desc: `De toon is jouw toon. Je krijgt een set kapsalon-templates die je in 2 minuten aanpast aan jouw stijl — formeel, vriendelijk, of pure salonfeel.`,
  },
  {
    icon: BsPeople,
    title: "Repeat-klant herkenning",
    desc: `Vaste klanten krijgen een andere toon dan eerstkomers. Het systeem onthoudt wie je vaste klanten zijn en past de herinnering aan.`,
  },
];

const steps = [
  {
    number: "01",
    title: "We koppelen jouw agenda",
    desc: `In één gesprek koppelen we het herinneringen-systeem aan de agenda die je nu al gebruikt. Geen migratie, geen dubbele administratie.`,
  },
  {
    number: "02",
    title: "Templates instellen op jouw stijl",
    desc: `We zetten 4-5 herinnering-templates op die passen bij jouw salonstijl — knip, kleur, behandeling, nieuwe klant, vaste klant. Je leest ze door en past aan waar nodig.`,
  },
  {
    number: "03",
    title: "Vanaf dag 1 lopen de herinneringen",
    desc: `Bij elke nieuwe afspraak loopt het systeem automatisch. Je ziet in één dashboard wie bevestigd heeft, wie verzet, en wie nog niets gedaan heeft.`,
  },
];

const painPoints = [
  {
    icon: BsXCircle,
    title: "No-shows kosten je elke maand omzet",
    desc: `Een gemiddelde no-show kost een kapsalon €40-€80 aan gemiste omzet. Twee per week = €4.000 per jaar weg. En je hebt er niets voor terug.`,
  },
  {
    icon: BsPhone,
    title: "Telefonisch herinneren vreet je dag op",
    desc: `Elke ochtend 20 minuten bellen om afspraken van vandaag te bevestigen. Tijd die je ook in je salon kunt steken — als je het al consequent volhoudt.`,
  },
  {
    icon: BsClockHistory,
    title: "Last-minute afzeggingen zonder vervanger",
    desc: `Een klant zegt 's ochtends af, jouw stoel staat 2 uur leeg. Met een goede herinneringen-flow weet je dit twee dagen vooraf — genoeg tijd om de plek te vullen.`,
  },
];

const faqs = [
  {
    q: "Werkt dit met de agenda die ik nu al heb?",
    a: "Ja. We koppelen het systeem aan de meeste salonagenda's — Treatwell, Salonized, Salonkee, Booksy, Mijn Salon en losse Google Calendar setups. In één intake-gesprek weten we welke koppeling jij nodig hebt.",
  },
  {
    q: "Wat als een klant niet reageert op de herinnering?",
    a: "Het systeem stuurt automatisch een tweede, vriendelijkere nudge na 4 uur stilte. Reageert de klant alsnog niet, krijg jij een melding zodat je zelf kunt beslissen of je belt of de plek vrijgeeft.",
  },
  {
    q: "Kan ik de templates zelf aanpassen?",
    a: "Ja, je krijgt 4-5 kant-en-klare templates voor jouw kapsalon-stijl en je past ze aan binnen 2 minuten. Wijzigingen zijn ook later altijd mogelijk via één klik in je dashboard.",
  },
  {
    q: "Krijgen vaste klanten dezelfde herinneringen als nieuwe?",
    a: "Nee. Het systeem herkent je vaste klanten en past de toon aan — informeler, korter, vaak alleen WhatsApp. Nieuwe klanten krijgen een uitgebreidere bevestiging zodat ze zeker weten dat ze goed zitten.",
  },
  {
    q: `Wat kost de herinneringen-service bij ${brand}?`,
    a: `Automatische herinneringen zitten inbegrepen in ons maandelijkse pakket vanaf €79/maand. Geen losse kosten per SMS of WhatsApp, geen opstartkosten, geen verborgen kosten. Bekijk onze tarieven voor alle details.`,
  },
  {
    q: "Kan ik dit combineren met de Voice AI en chatbot?",
    a: "Ja, en het is sterk aanbevolen. De herinneringen pakken de bestaande afspraken op, de chatbot en Voice AI vangen nieuwe klanten op. Samen vormen ze één gesloten lus van afspraak tot bezoek.",
  },
];

export default function HerinneringenContent() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 sl-reveal"
          >
            Automatische Herinneringen
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 sl-reveal sl-reveal-1"
          >
            Automatische herinneringen voor {siteDetails.niche}: minder no-shows, meer omzet
          </motion.h1>
          <motion.p
            className="text-lg text-foreground-accent max-w-2xl mx-auto mb-8 sl-reveal sl-reveal-1"
          >
            WhatsApp en SMS herinneringen die je no-show-percentage met 60-80%
            verlagen. Klanten bevestigen of verzetten in één tik — geen
            telefoonrondjes, geen vergeten afspraken.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center sl-reveal sl-reveal-2"
          >
            <a
              href="https://cal.com/studiolee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all"
            >
              <BsCalendar3 /> Plan een Gratis Gesprek
            </a>
            <a
              href="https://wa.me/31611594862"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-green-500/30 text-green-500 px-8 py-3 rounded-xl font-semibold hover:bg-green-500/10 transition-all"
            >
              <BsWhatsapp /> WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Wat zijn automatische herinneringen? */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Wat zijn automatische herinneringen?
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              Automatische herinneringen zijn slimme WhatsApp- en SMS-berichten
              die jouw klanten op het juiste moment vóór hun afspraak ontvangen
              — zonder dat jij iets hoeft te doen. Anders dan losse SMS-jes
              vanuit je telefoon, denkt het systeem mee: het kent jouw
              behandeltype, herkent vaste klanten en stuurt op het moment dat
              de kans op een respons het hoogst is.
            </p>
            <p>
              Voor {niche} betekent dit dat no-shows niet langer "iets wat nu
              eenmaal hoort bij het vak" zijn. Klanten bevestigen met één tik,
              verzetten met één link, of laten weten dat ze niet meer kunnen
              — twee dagen vooraf, dus genoeg tijd om de plek opnieuw te
              boeken. Geen telefoonrondjes 's ochtends, geen "hoorde je
              nog van...", geen lege stoelen die je had kunnen vullen.
            </p>
          </div>
        </div>
      </section>

      {/* Herken je dit? */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Herken je dit?</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            De meeste {niche} lopen tegen dezelfde problemen aan. Herkenbaar?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]"
              >
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                  <point.icon className="text-red-600 dark:text-red-400" size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-foreground-accent text-sm">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Hoe het werkt</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            In 3 stappen naar een herinneringen-flow die jouw no-shows aanpakt.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 dark:bg-neutral-700" />
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 border-4 border-white dark:border-neutral-900 relative z-10">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-foreground-accent text-sm max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat krijg je? */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Wat krijg je?</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            Alles wat je nodig hebt om no-shows te halveren — inbegrepen in je pakket.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground-accent text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom kiezen voor automatische herinneringen? */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Waarom {niche} kiezen voor automatische herinneringen?
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              In de {nicheSingular}sbranche is een lege stoel niet alleen een gemiste
              afspraak — het is gemiste omzet die je nooit meer terugverdient.
              Een no-show van 30 minuten is €40 weg; een no-show van 90 minuten
              (kleur, knippen, drogen) tikt door tot €120. Wie twee no-shows per
              week heeft, draait een gat van €4.000-€6.000 per jaar.
            </p>
            <p>
              De truc is niet om "betere klanten" te hebben — die bestaan niet
              voor iedereen. De truc is om aan elke afspraak een vriendelijke,
              automatische voorbereiding te koppelen. Een klant die 24 uur
              vooraf een WhatsApp krijgt, met de mogelijkheid om met één tik
              te bevestigen of te verzetten, komt veel vaker daadwerkelijk
              opdagen. Onderzoek in de salonbranche laat zien dat een goed
              opgezette herinneringen-flow no-shows met 60-80% terugdringt.
            </p>
            <p>
              Combineer dit met onze{" "}
              <Link href="/voice-ai" className="text-primary hover:underline">
                ai telefonist voor kappers
              </Link>{" "}
              die telefoon opneemt buiten openingstijden, en de{" "}
              <Link href="/chatbot" className="text-primary hover:underline">
                ai chatbot voor kappers
              </Link>{" "}
              die nieuwe klanten via je website opvangt, en je hebt één
              gesloten lus: van eerste contact tot bevestigde afspraak tot
              bezoek tot review. Niets valt meer tussen wal en schip.
            </p>
          </div>
        </div>
      </section>

      {/* Combinatie met andere services */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Sluit perfect aan op je hele {brand}-systeem
          </h2>
          <p className="text-foreground-accent mb-10 max-w-2xl mx-auto">
            Herinneringen werken het beste als onderdeel van een gesloten lus —
            van eerste contact tot bevestigde afspraak.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <Link
              href="/voice-ai"
              className="block border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)] hover:border-primary/40 transition-colors"
            >
              <BsPhone className="text-primary mb-3" size={22} />
              <h3 className="text-lg font-bold mb-1">Voice AI Telefonist</h3>
              <p className="text-foreground-accent text-sm">
                Vangt nieuwe klanten op buiten openingstijden — geboekte
                afspraken gaan direct door naar de herinneringen-flow.
              </p>
            </Link>
            <Link
              href="/chatbot"
              className="block border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)] hover:border-primary/40 transition-colors"
            >
              <BsChatDots className="text-primary mb-3" size={22} />
              <h3 className="text-lg font-bold mb-1">AI Chatbot</h3>
              <p className="text-foreground-accent text-sm">
                Vangt websitebezoekers 24/7 op en plant direct in je agenda.
                Vanaf dat moment loopt het herinneringen-systeem.
              </p>
            </Link>
            <Link
              href="/crm"
              className="block border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)] hover:border-primary/40 transition-colors"
            >
              <BsPeople className="text-primary mb-3" size={22} />
              <h3 className="text-lg font-bold mb-1">CRM voor Kappers</h3>
              <p className="text-foreground-accent text-sm">
                Vaste klanten herkennen, herhaalafspraken triggeren, vergeten
                klanten reactiveren — alles vanuit één klantenbestand.
              </p>
            </Link>
            <Link
              href="/reviews"
              className="block border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)] hover:border-primary/40 transition-colors"
            >
              <BsCheck2Circle className="text-primary mb-3" size={22} />
              <h3 className="text-lg font-bold mb-1">Review Management</h3>
              <p className="text-foreground-accent text-sm">
                Na elk bezoek automatisch een Google review-verzoek. Sluit de
                lus van afspraak tot reputatie.
              </p>
            </Link>
            <Link
              href="/tarieven"
              className="block border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)] hover:border-primary/40 transition-colors"
            >
              <BsLightning className="text-primary mb-3" size={22} />
              <h3 className="text-lg font-bold mb-1">Tarieven</h3>
              <p className="text-foreground-accent text-sm">
                Alles inbegrepen vanaf €79/maand. Geen opstartkosten, geen
                losse SMS-fees, geen verborgen kosten.
              </p>
            </Link>
            <Link
              href="/gratis-scan"
              className="block border border-primary/40 rounded-2xl p-6 bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <BsCalendar3 className="text-primary mb-3" size={22} />
              <h3 className="text-lg font-bold mb-1">Gratis Scan</h3>
              <p className="text-foreground-accent text-sm">
                Krijg een gratis analyse: hoeveel no-shows kost je nu per jaar
                en wat zou je terugverdienen?
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Veelgestelde vragen
          </h2>
          <p className="text-foreground-accent text-center mb-10">
            Alles wat je wilt weten over automatische herinneringen voor jouw kapsalon.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group border border-[var(--card-border)] rounded-2xl bg-[var(--card-background)] overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 list-none">
                  <span className="font-semibold text-base pr-4">{faq.q}</span>
                  <BsArrowRight className="text-primary group-open:rotate-90 transition-transform flex-shrink-0" size={18} />
                </summary>
                <div className="px-5 pb-5 text-foreground-accent text-sm leading-relaxed">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar om no-shows uit jouw {nicheSingular}salon te krijgen?
          </h2>
          <p className="text-foreground-accent text-lg mb-8 max-w-xl mx-auto">
            Plan een gratis gesprek van 15 minuten. We laten zien hoeveel
            no-shows je nu kosten en hoe de herinneringen-flow voor jouw
            kapsalon eruit zou zien. Geen verkooppraat — alleen cijfers en
            een eerlijke take.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com/studiolee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all"
            >
              <BsCalendar3 /> Plan Gratis Gesprek
            </a>
            <Link
              href="/gratis-scan"
              className="inline-flex items-center justify-center gap-2 border border-primary/30 text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary/10 transition-all"
            >
              <BsLightning /> Vraag Gratis Scan aan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
