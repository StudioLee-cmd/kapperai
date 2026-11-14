export const CONSENT_VERSION = "callback-2026-11-09";
export const CONSENT_TEXT = "Ja, Tim van StudioLee mag me over deze aanvraag mailen. Ik krijg de demo per e-mail.";
export const PROMOTION_TEXT = "Stuur me ook af en toe tips en aanbiedingen per e-mail. Niet verplicht.";

export const callbackPage: { heading: string; intro: string; plans: string; opening: [string, string][] } = {
  "heading": "De terugbelagent voor kappers",
  "intro": "Een gemiste oproep hoeft geen gemiste klant te zijn. De terugbelagent belt terug, vraagt uit wat er speelt en zet de afspraak klaar.",
  "plans": "De website is de basis. De terugbelagent, de chatbot en de marketing koppel je erbij via je pakket.",
  "opening": [
    [
      "Agent",
      "Goedemiddag, u spreekt met de digitale assistent van [bedrijfsnaam]. U belde net, maar we stonden met een klant in de stoel. Waarmee kan ik u helpen?"
    ],
    [
      "Klant",
      "Kan ik zaterdag terecht om te knippen?"
    ],
    [
      "Agent",
      "Dat kijk ik na. Heeft u een voorkeur voor een medewerker en wilt u ook kleuren?"
    ],
    [
      "Agent",
      "Ik zet de afspraak vast en u krijgt een bevestiging per WhatsApp."
    ]
  ]
};
