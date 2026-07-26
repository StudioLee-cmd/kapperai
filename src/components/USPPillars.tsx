"use client";
import React from 'react';
import { FiTrendingUp, FiStar, FiClock } from 'react-icons/fi';
import Container from './Container';
import { motion } from 'framer-motion';

// ⛔ DE DRIE UITKOMSTEN — dit blok staat vlák boven de vier dingen en zet ze op (Tim 25-07, keur 78:
// "it's productized, it's what it GETS them"). Wat hier tot 26-07 stond faalde op vier punten tegelijk
// en het was allemaal ONGEWIJZIGDE fleet-template-tekst, niet voor kappers geschreven:
//   · "(Capture)" / "(Authority)" / "(Admin)" — Engels jargon tegen een Nederlandse vakman (keur 25)
//   · "een klus van €500+" — een loodgietersbedrag; gemeten 26-07 stond exact deze zin op 5 van de
//     5 gecontroleerde niche-sites, dus 't is een niche-lek en geen kapper-copy (een knipbeurt is €25-45)
//   · "onze Content AI" — een tool-naam, en het contract verkoopt de uitkomst (⛔1)
//   · "Bespaar 10 uur per week" — een verzonnen cijfer (RULE 9: onbekend = niet claimen)
// Schrijf hier dus: wat de kapper eraan overhoudt, in zijn taal, zonder gereedschap en zonder getal
// dat we niet kunnen aantonen.
const pillars = [
    {
        title: "Je stoel blijft vol",
        subtitle: "Meer afspraken",
        description: "Elke beller wordt te woord gestaan en elke aanvraag komt in je agenda — ook als jij je handen in iemands haar hebt.",
        icon: <FiTrendingUp size={32} />,
    },
    {
        title: "Nieuwe klanten vinden je",
        subtitle: "Beter gevonden",
        description: "Je komt boven in Google én in de AI-assistenten waar mensen tegenwoordig zoeken, met teksten en reviews die vanzelf blijven komen.",
        icon: <FiStar size={32} />,
    },
    {
        title: "Je avond is weer van jou",
        subtitle: "Minder gedoe",
        description: "Vragen, herinneringen, facturen en nieuwe beelden van je werk lopen door zonder dat jij er 's avonds voor gaat zitten.",
        icon: <FiClock size={32} />,
    }
];

const USPPillars: React.FC = () => {
    return (
        <section className="py-12 md:py-20 border-b border-gray-100 dark:border-[var(--card-border)]">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col items-start p-6 rounded-2xl border border-green-100 dark:border-green-700/30 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-300 h-full"
                        >
                            <div className="p-3 rounded-xl bg-white dark:bg-[var(--card-background)] shadow-sm mb-4 text-green-600 dark:text-green-500">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-[var(--foreground)] mb-1">
                                {pillar.title}
                            </h3>
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-[var(--foreground-accent)] mb-3">
                                {pillar.subtitle}
                            </span>
                            <p className="text-gray-700 dark:text-[var(--foreground-accent)] leading-relaxed font-medium">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default USPPillars;


