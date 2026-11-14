// The monthly price ladder as the owner set it, the same on every own niche site. Amounts: StudioLee Northstar
// settings/pricing.json (79 fixed, 179 and 379 "vanaf"); what sits in each: the owner's answer of 13-11 on
// "pick what sits in the 79 and 179 packages" (A: the start is only the website with the chatbot; from 179 the
// calling agent, the basis of the dashboard and the connections; from 379 the work done for you). Excluding VAT.
export type Plan = { id: "start" | "systeem" | "uithanden"; naam: string; bedrag: number; vanaf: boolean; kort: string; inbegrepen: string[] };

export const ladder: Plan[] = [
    {
        id: "start",
        naam: "Website en chatbot",
        bedrag: 79,
        vanaf: false,
        kort: "Je website, gebouwd en online, met een chatbot die vragen opvangt. Normaal gebruik zit erin.",
        inbegrepen: ["Je website, gebouwd, online en bijgehouden", "Een chatbot op je website, dag en nacht", "Je eigen werkplek"],
    },
    {
        id: "systeem",
        naam: "Het volledige systeem",
        bedrag: 179,
        vanaf: true,
        kort: "Alles van de start, plus de telefoonagent, je dashboard en de koppelingen. Je gebruikt het zelf; wat je verbruikt komt erbij.",
        inbegrepen: ["Alles van Website en chatbot", "De telefoonagent die opneemt en afspraken plant", "Je dashboard met klanten, agenda en berichten", "De koppelingen met je agenda en je andere software"],
    },
    {
        id: "uithanden",
        naam: "Wij doen het voor je",
        bedrag: 379,
        vanaf: true,
        kort: "Het volledige systeem, en wij doen het werk: de teksten, de vindbaarheid, de social en de opvolging.",
        inbegrepen: ["Alles van het volledige systeem", "Wij schrijven, plannen en plaatsen voor je", "Elke maand de keuzes voor je gemaakt", "Wat het kost hangt af van wat je ons laat doen"],
    },
];

export const plan = (id: Plan["id"]) => ladder.find((p) => p.id === id) as Plan;
export const prijs = (p: Plan) => `${p.vanaf ? "Vanaf " : ""}€${p.bedrag} per maand`;
