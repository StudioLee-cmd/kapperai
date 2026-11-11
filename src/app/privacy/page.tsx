import { publicContacts } from "@/data/publicContacts";
import React from "react";
import Container from "@/components/Container";
import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `Privacyverklaring | ${siteDetails.siteName}`,
    description: `Hoe ${siteDetails.siteName} omgaat met de gegevens van ${siteDetails.niche.toLowerCase()}: wat we bewaren, waarvoor we het gebruiken en welke rechten je hebt volgens de AVG.`,
    alternates: { canonical: `${siteDetails.siteUrl}privacy` },
};

const h2 = "text-2xl font-semibold text-foreground mt-8 mb-4";

const PrivacyPage: React.FC = () => {
    const mail = publicContacts.primary.email;
    const mailLink = <a href={"mailto:" + mail} className="text-primary hover:underline">{mail}</a>;
    return (
        <Container>
            <div className="py-20 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Privacyverklaring</h1>
                <div className="prose prose-lg text-foreground-accent">
                    <p className="mb-4">
                        <em>Laatst bijgewerkt: november 2026</em>
                    </p>

                    <p>
                        Hier lees je welke gegevens {siteDetails.siteName} van je verwerkt, waarom, hoe lang we ze bewaren, met wie we ze delen en welke rechten je hebt. We houden ons aan de Algemene Verordening Gegevensbescherming (AVG).
                    </p>

                    <h2 className={h2}>1. Wie is verantwoordelijk</h2>
                    <p>
                        {siteDetails.siteName} is een handelsnaam van {footerDetails.legalName}, {footerDetails.address}, KvK {footerDetails.kvk}. Wij zijn verwerkingsverantwoordelijke voor de gegevens op deze pagina. Vragen over privacy stel je via {mailLink}.
                    </p>

                    <h2 className={h2}>2. Welke gegevens en waarvoor</h2>
                    <ul>
                        <li><strong>Aanvraag- en proefformulieren</strong>: je naam, e-mailadres, bedrijfsnaam, branche en wat je zelf invult. Doel: je aanvraag of proefperiode afhandelen en contact met je opnemen. Grondslag: de uitvoering van een overeenkomst of stappen op jouw verzoek daarvoor.</li>
                        <li><strong>Afspraken</strong> die je via de agenda inplant: naam, e-mailadres, tijdstip en je toelichting. Doel: de afspraak houden. Grondslag: stappen op jouw verzoek.</li>
                        <li><strong>Betalingen</strong>: je betaalgegevens gaan rechtstreeks naar onze betaalprovider; wij zien alleen of en wat er betaald is. Grondslag: overeenkomst en wettelijke administratieplicht.</li>
                        <li><strong>Klantgegevens tijdens een abonnement</strong>: contact- en factuurgegevens en, als je onze AI-telefonie of chatbot gebruikt, de gesprekken die daarvoor nodig zijn. Doel: de dienst leveren. Grondslag: overeenkomst.</li>
                        <li><strong>Nieuws van ons</strong>: alleen als je dat vinkje zelf aanzet, hoogstens vier keer per jaar. Grondslag: jouw toestemming, die je altijd kunt intrekken via de afmeldlink of per mail.</li>
                        <li><strong>Websitebezoek</strong>: we tellen bezoeken zonder cookies en zonder je te volgen over andere sites. Grondslag: ons gerechtvaardigd belang om te weten welke pagina&apos;s werken.</li>
                    </ul>

                    <h2 className={h2}>3. AI en gesprekken</h2>
                    <p>
                        Onze AI-systemen verwerken gesprekken alleen om de juiste antwoorden te geven en afspraken in te plannen. We zetten het trainen van modellen op jouw gegevens uit waar de leverancier dat toelaat, en gevoelige informatie zoals wachtwoorden hoort niet in een gesprek met de AI.
                    </p>

                    <h2 className={h2}>4. Met wie we gegevens delen</h2>
                    <p>
                        We verkopen je gegevens nooit. We schakelen alleen verwerkers in die we nodig hebben om de dienst te leveren, met een verwerkersovereenkomst:
                    </p>
                    <ul>
                        <li>hosting en bezoektelling van deze site (Vercel);</li>
                        <li>opslag van aanvragen (Supabase) en de koppelingen die ze verwerken (n8n, door ons zelf beheerd);</li>
                        <li>klantbeheer en de chat op de site, alleen als je cookies accepteert (HighLevel);</li>
                        <li>e-mail over je aanvraag of account (Brevo);</li>
                        <li>afspraken inplannen (Cal.com) en betalingen (Stripe);</li>
                        <li>de AI-modellen achter onze telefonie en chatbot.</li>
                    </ul>
                    <p>
                        Sommige van deze partijen zitten in de Verenigde Staten. Doorgifte daarheen gebeurt alleen op basis van het EU-VS-gegevensprivacykader of de standaardcontractbepalingen van de Europese Commissie. Daarnaast delen we gegevens alleen als de wet ons daartoe verplicht.
                    </p>

                    <h2 className={h2}>5. Hoe lang we gegevens bewaren</h2>
                    <ul>
                        <li>Aanvragen die geen klant worden: tot twee jaar na het laatste contact.</li>
                        <li>Klantgegevens: zolang je abonnement loopt en daarna twee jaar.</li>
                        <li>Facturen en betalingen: zeven jaar, omdat de belastingwet dat vraagt.</li>
                        <li>Toestemming voor nieuws: tot je je afmeldt.</li>
                    </ul>

                    <h2 className={h2}>6. Beveiliging</h2>
                    <p>
                        Gegevens gaan versleuteld over het internet (HTTPS) en staan bij leveranciers die ze versleuteld opslaan. Alleen wie ze voor het werk nodig heeft, kan erbij.
                    </p>

                    <h2 className={h2}>7. Cookies</h2>
                    <p>
                        Deze site gebruikt alleen cookies en lokale opslag die nodig zijn om de site te laten werken en om je cookiekeuze te onthouden. De chat van HighLevel laden we pas als je cookies accepteert. De bezoektelling werkt zonder cookies.
                    </p>

                    <h2 className={h2}>8. Je rechten</h2>
                    <p>
                        Je mag je gegevens inzien, laten verbeteren of laten verwijderen, de verwerking laten beperken, bezwaar maken tegen verwerking op grond van ons gerechtvaardigd belang, en je gegevens in een gangbaar formaat ontvangen. Gegeven toestemming kun je altijd intrekken. Stuur je verzoek naar {mailLink}; we antwoorden binnen een maand.
                    </p>
                    <p>
                        Ben je het niet eens met hoe we met je gegevens omgaan, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default PrivacyPage;
