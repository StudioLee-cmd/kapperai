// The words of the reworked sub-pages, the same on every own niche site: the trade's own words come from
// src/data/trade.ts and the site's name from siteDetails, so another site gets its own page by filling those two.
// Every price is the ladder's (src/data/ladder.ts); no tool names, no em dashes, no guarantee paragraph.
import type { ServiceSpec } from "@/components/service/ServicePage";
import { siteDetails } from "@/data/siteDetails";
import { trade as t } from "@/data/trade";

const brand = siteDetails.siteName;
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const voiceAi: ServiceSpec = {
    slot: "voice-ai",
    kicker: "Telefoonagent",
    h1: `Voice AI telefonist voor ${t.meervoud}: geen oproep meer missen`,
    lead: `De telefoonagent van ${brand} neemt op met de naam van je ${t.bedrijf} als jij niet kunt, beantwoordt de vraag, plant de afspraak in je agenda en stuurt jou een samenvatting.`,
    voor: `Voor ${t.meervoud} die telefoontjes missen terwijl ze aan het werk zijn, 's avonds of in het weekend.`,
    plan: "systeem",
    priceWhy: "in het volledige systeem",
    flow: {
        gets: "Elke beller krijgt antwoord en een afspraak, ook als jij niet opneemt",
        steps: [
            { label: "Een klant belt", say: `Je ${t.bedrijf} wordt gebeld terwijl jij ${t.bezig}. Na een paar keer overgaan neemt de agent op.`, screen: { kind: "call", title: "Inkomende oproep", lines: [["Agent", `Goedemiddag, u spreekt met de digitale assistent van je ${t.bedrijf}. Waarmee kan ik helpen?`], ["Klant", t.vraagTelefoon]] } },
            { label: "De afspraak staat", say: "De agent kijkt in je agenda, biedt een vrije tijd aan en zet de afspraak erin.", screen: { kind: "slot", title: "Je agenda", slot: t.voorbeeldMoment, detail: `${cap(t.afspraak)}, ${t.voorbeeldKlant}`, badge: "Ingepland" } },
            { label: "Jij leest wat er was", say: "Na het gesprek krijg je een samenvatting: wie belde, wat hij wilde en wat er is afgesproken.", screen: { kind: "chat", title: "Samenvatting voor jou", lines: [["Agent", `${t.voorbeeldKlant} belde om ${t.afspraak}. Ingepland ${t.voorbeeldMoment}. Bevestiging is verstuurd.`]] } },
        ],
    },
    intro: {
        title: "Wat is een Voice AI telefonist?",
        text: [
            `Een Voice AI telefonist is een digitale assistent die je telefoon opneemt als jij dat niet kunt. Hij spreekt Nederlands, kent je diensten, prijzen en openingstijden, en plant afspraken direct in je agenda.`,
            `Voor een ${t.bedrijf} betekent dat: geen beller meer die naar de volgende ${t.enkelvoud} gaat omdat niemand opnam. Bij spoed verbindt de agent door naar jou; al het andere handelt hij af en jij leest het na.`,
        ],
    },
    what: {
        title: "Wat je krijgt",
        items: [
            { title: "Opnemen met jouw naam", text: `De agent neemt op met de naam en begroeting van je ${t.bedrijf}, zonder wachtmuziek of voicemail.` },
            { title: "Afspraken in je agenda", text: "Hij ziet wanneer je vrij bent, biedt een tijd aan en zet de afspraak vast. De klant krijgt meteen een bevestiging." },
            { title: "Een samenvatting na elk gesprek", text: "Wie er belde, wat hij wilde en wat er is afgesproken, als bericht op je telefoon en in je dashboard." },
            { title: "Doorverbinden bij spoed", text: "Jij bepaalt wat spoed is. Dan gaat de beller direct naar jou, al het andere handelt de agent af." },
            { title: "Je eigen nummer blijft", text: "Oproepen die je niet opneemt schakelen door naar de agent. Je klanten bellen hetzelfde nummer als altijd." },
            { title: "Ook buiten openingstijden", text: "'s Avonds en in het weekend wordt het meest gebeld. De agent neemt dan ook op." },
        ],
    },
    who: {
        jij: ["Je kiest wanneer de agent opneemt: altijd, buiten openingstijden of als je niet opneemt.", "Je bepaalt wat spoed is en wanneer hij doorverbindt.", "Je leest de samenvattingen en belt terug waar je dat wilt."],
        ai: ["Neemt op, beantwoordt de vraag en plant de afspraak.", "Stuurt de klant een bevestiging en jou een samenvatting.", "Leert van je antwoorden wat hij de volgende keer zegt."],
        wij: ["Richten de agent in met je diensten, prijzen en openingstijden.", "Schakelen je nummer door en testen het met je mee.", "Kijken de eerste weken mee en stellen bij waar het beter kan."],
    },
    related: [
        { href: "/chatbot", title: "AI chatbot", text: "Dezelfde kennis, maar dan voor wie liever typt dan belt." },
        { href: "/terugbellen", title: "Terugbelagent", text: "Belt een gemiste oproep vanzelf terug en zet de afspraak klaar." },
        { href: "/crm", title: `CRM voor ${t.meervoud}`, text: "Elk gesprek komt in het profiel van de klant." },
    ],
    faqs: [
        { q: "Hoe klinkt de telefoonagent?", a: `Natuurlijk en rustig, in het Nederlands. De begroeting en de toon stem je af op je ${t.bedrijf}. Vraagt een beller of hij met een mens praat, dan zegt de agent eerlijk dat hij een digitale assistent is.` },
        { q: "Kan de agent afspraken inplannen?", a: "Ja. Hij ziet je vrije tijden in je agenda, biedt er een aan en zet de afspraak vast. De klant krijgt een bevestiging." },
        { q: "Moet ik een ander telefoonnummer nemen?", a: "Nee. Oproepen die jij niet opneemt worden doorgeschakeld naar de agent. Wil je liever een apart nummer, dan kan dat ook." },
        { q: "Wat gebeurt er bij spoed?", a: "Jij stelt in wat spoed is. Bij spoed verbindt de agent de beller direct door naar jou." },
        { q: `Wat kost de telefoonagent bij ${brand}?`, a: "De telefoonagent zit in het volledige systeem, vanaf €179 per maand excl. btw. Wat je aan gesprekken verbruikt komt erbij; je ziet het in je dashboard. Wil je dat wij alles voor je doen, dan is dat vanaf €379 per maand." },
    ],
    close: { title: "Hoor zelf hoe hij opneemt", text: "Laat je e-mailadres achter, dan sturen we je de demo. Daarna kies je zelf of je een gesprek plant." },
};

export const crm: ServiceSpec = {
    slot: "crm",
    kicker: "CRM",
    h1: "Eén klantenbestand. Volledige historie. Geen klant meer vergeten.",
    lead: `Het CRM van ${brand} zet al je ${t.klanten} op één plek, met wat ze kwamen doen, wat ze vroegen en wanneer ze terug moeten komen, en stuurt de opvolging vanzelf.`,
    voor: `Voor ${t.meervoud} met klantgegevens in een agenda, een telefoon, WhatsApp en een schrift.`,
    plan: "systeem",
    priceWhy: "in het volledige systeem",
    flow: {
        gets: `Elke ${t.klant} op één plek, en de opvolging gaat vanzelf`,
        steps: [
            { label: "Alles komt binnen", say: "Een telefoontje, een chat, een afspraak of een mail: het komt in het profiel van de klant.", screen: { kind: "list", title: "Binnengekomen vandaag", items: [{ text: "Gesprek met de telefoonagent", done: true }, { text: "Vraag via de chat op je site", done: true }, { text: "Afspraak in je agenda", done: true }] } },
            { label: "Eén profiel per klant", say: "Je ziet in een paar seconden wie het is, wat hij eerder deed en wat er speelt.", screen: { kind: "card", title: "Klantprofiel", name: t.voorbeeldKlant, rows: [...t.voorbeeldGeschiedenis] } },
            { label: "De opvolging gaat vanzelf", say: "Op het juiste moment krijgt de klant een herinnering of een uitnodiging om terug te komen.", screen: { kind: "chat", title: "Bericht aan de klant", lines: [[cap(t.bedrijf), t.terugkom], ["Klant", "Ja graag, zaterdag weer?"]] } },
        ],
    },
    what: {
        title: "Wat het CRM voor je doet",
        items: [
            { title: "Alle klanten op één plek", text: "Je huidige bestand gaat erin, en elke nieuwe klant komt er vanzelf bij." },
            { title: "De hele historie", text: `Elke ${t.afspraak}, elk gesprek en elke vraag staat bij de klant, zodat je weet waar je het over hebt.` },
            { title: "Opvolging zonder eraan te denken", text: "Herinneringen, een bedankje en een uitnodiging om terug te komen gaan op het juiste moment." },
            { title: "Groepen die je zelf kiest", text: "Vaste klanten, nieuwe klanten, klanten die lang niet zijn geweest: je ziet ze apart en kunt ze apart bereiken." },
            { title: "Gekoppeld aan de rest", text: "De chatbot, de telefoonagent en je agenda schrijven in hetzelfde bestand." },
            { title: "Volgens de AVG", text: "Alleen jij en je team zien je klantgegevens, en een klant kan altijd vragen wat er van hem staat." },
        ],
    },
    who: {
        jij: ["Je kiest welke opvolging aan staat en wanneer.", "Je ziet je klanten en hun historie in je dashboard.", "Je voegt een notitie toe waar jij dat wilt."],
        ai: ["Zet elk gesprek, elke chat en elke afspraak bij de juiste klant.", "Stuurt herinneringen en uitnodigingen op het juiste moment.", "Laat zien wie lang niet is geweest."],
        wij: ["Zetten je huidige klantenbestand erin.", "Koppelen je agenda en je andere software.", "Zetten de eerste opvolging met je klaar."],
    },
    related: [
        { href: "/automatisering", title: "Workflow automatisering", text: "Herinneringen en opvolging die vanuit het CRM vanzelf gaan." },
        { href: "/chatbot", title: "AI chatbot", text: "Elke vraag op je site komt in het profiel van de klant." },
        { href: "/voice-ai", title: "Telefoonagent", text: "Elk gesprek staat met zijn samenvatting bij de klant." },
    ],
    faqs: [
        { q: "Wat is een CRM?", a: `Een CRM is één bestand met al je klanten en alles wat je met ze deed. Voor een ${t.bedrijf} betekent dat: je ziet wie er komt, wat hij de vorige keer deed en wanneer hij terug moet komen.` },
        { q: "Kan mijn huidige klantenbestand erin?", a: "Ja. We zetten je bestaande bestand erin, uit je agenda of je huidige software, en daarna komt elke nieuwe klant er vanzelf bij." },
        { q: "Werkt het met mijn agenda?", a: "Ja. Je agenda wordt gekoppeld, zodat afspraken bij de klant staan en herinneringen op tijd gaan." },
        { q: "Is het veilig?", a: "Het CRM werkt volgens de AVG: alleen jij en je team zien de gegevens, en een klant kan altijd vragen wat er van hem bewaard wordt." },
        { q: `Wat kost het CRM bij ${brand}?`, a: "Het CRM zit in het volledige systeem, vanaf €179 per maand excl. btw. Wil je dat wij de opvolging voor je doen, dan is dat vanaf €379 per maand." },
    ],
    close: { title: "Zie je klanten op één plek", text: "Laat je e-mailadres achter, dan sturen we je de demo. Daarna kies je zelf of je een gesprek plant." },
};

export const seo: ServiceSpec = {
    slot: "seo",
    kicker: "SEO",
    h1: `SEO voor ${t.meervoud}: gevonden worden in Google`,
    lead: `${brand} zorgt dat je ${t.bedrijf} gevonden wordt als iemand zoekt naar een ${t.enkelvoud} in de buurt: met artikelen die mensen zoeken, een goed bijgehouden Google-profiel en elke maand een lijst met wat er beter kan.`,
    voor: `Voor ${t.meervoud} die nu niet bovenaan staan, of te veel betalen voor advertenties.`,
    plan: "systeem",
    priceWhy: "zelf doen in het volledige systeem; wij doen het vanaf €379 per maand",
    flow: {
        gets: `Je wordt gevonden door mensen die nu een ${t.enkelvoud} zoeken`,
        steps: [
            { label: "Iemand zoekt", say: `Iemand zoekt "${t.zoekterm}" in Google of vraagt het aan een AI-assistent.`, screen: { kind: "search", query: t.zoekterm, results: [{ name: "Andere zaak", note: "3,9 ★ · 12 reviews" }, { name: `Jouw ${t.bedrijf}`, you: true, note: "4,8 ★ · open tot 18:00 · website" }] } },
            { label: "Jij staat erbij", say: "Je artikelen, je Google-profiel en je reviews laten zien dat jij de juiste bent.", screen: { kind: "list", title: "Deze maand gedaan", items: [{ text: "4 artikelen geschreven en geplaatst", done: true }, { text: "Google-profiel bijgewerkt", done: true }, { text: "Lokale pagina's nagekeken", done: true }] } },
            { label: "Er komt een afspraak", say: "De bezoeker leest, vraagt iets aan de chatbot en plant een afspraak.", screen: { kind: "slot", title: "Nieuwe afspraak via je site", slot: t.voorbeeldMoment, detail: `${cap(t.afspraak)}, via Google`, badge: "Nieuwe klant" } },
        ],
    },
    intro: {
        title: "Wat is SEO?",
        text: [
            `SEO is alles wat je doet om hoger in Google te komen zonder per klik te betalen. Voor een ${t.bedrijf} gaat het vooral om lokaal gevonden worden: in de kaart, in de zoekresultaten en in de antwoorden van AI-assistenten.`,
            "Dat vraagt drie dingen: pagina's en artikelen over wat mensen echt zoeken, een volledig en actueel Google-profiel, en een site die snel en duidelijk is. Elke maand lees je wat er beter kan en kies je wat er gebeurt.",
        ],
    },
    what: {
        title: "Wat je krijgt",
        items: [
            { title: "Artikelen die gezocht worden", text: "Over de vragen die je klanten in Google stellen, geschreven voor je site en geplaatst." },
            { title: "Lokaal gevonden worden", text: "Je Google-profiel volledig en actueel, met de juiste diensten, tijden en foto's." },
            { title: "Zichtbaar in AI-zoekmachines", text: "Duidelijke antwoorden op je pagina's, zodat ook AI-assistenten je noemen." },
            { title: "Elke maand een lijst", text: "Wat er beter kan, met de reden erbij. Jij kiest, of je laat ons kiezen." },
            { title: "Een rapport dat je leest", text: "Hoe vaak je gevonden werd, waarop en wat het opleverde, in gewone taal." },
            { title: "Pagina's die naar elkaar wijzen", text: "Artikelen en dienstpagina's verwijzen naar elkaar, zodat Google je hele site ziet." },
        ],
    },
    who: {
        jij: ["Je kiest uit de maandlijst wat er gebeurt, of laat het ons kiezen.", "Je leest een artikel na voor het online gaat, als je dat wilt.", "Je ziet in je dashboard wat het oplevert."],
        ai: ["Zoekt uit waar je klanten op zoeken.", "Schrijft de eerste versie van elk artikel.", "Houdt bij waar je staat en wat er verandert."],
        wij: ["Kijken elk artikel na op wat klopt voor je vak.", "Werken je Google-profiel en je pagina's bij.", "Doen het helemaal voor je, vanaf €379 per maand."],
    },
    related: [
        { href: "/reviews", title: "Reviews", text: "Meer en betere reviews helpen je in de kaart van Google." },
        { href: "/gratis-website", title: "Website laten maken", text: "Een snelle, duidelijke site is de basis van gevonden worden." },
        { href: "/social-media", title: "Social media", text: "Wat je laat zien op social versterkt wat mensen in Google vinden." },
    ],
    faqs: [
        { q: "Hoe lang duurt het voor ik resultaat zie?", a: "De eerste verschuivingen zie je meestal na een paar maanden. Lokaal gaat het vaak sneller dan landelijk. Elke maand lees je in je rapport waar je staat." },
        { q: "Moet ik zelf artikelen schrijven?", a: "Nee. De AI schrijft de eerste versie, wij kijken hem na en plaatsen hem. Je mag hem altijd eerst lezen." },
        { q: "Helpt dit ook in ChatGPT en andere AI-assistenten?", a: "Ja. Pagina's met duidelijke antwoorden en een volledig bedrijfsprofiel worden ook door AI-assistenten gelezen en genoemd." },
        { q: "Wat als ik al een website heb?", a: "Dan werken we op je eigen site, of je kiest een nieuw ontwerp. Het ontwerp is gratis." },
        { q: `Wat kost SEO bij ${brand}?`, a: "Zelf doen met de AI zit in het volledige systeem, vanaf €179 per maand excl. btw, met het schrijven op je tegoed. Wil je dat wij alles doen, dan is dat vanaf €379 per maand." },
    ],
    close: { title: "Gevonden worden in je eigen buurt", text: "Laat je e-mailadres achter, dan sturen we je de demo. Daarna kies je zelf of je een gesprek plant." },
};

export const socialMedia: ServiceSpec = {
    slot: "social-media",
    kicker: "Social media",
    h1: `Social media voor ${t.meervoud}: strategie en uitvoering in één`,
    lead: `${brand} maakt een plan voor je kanalen, zet elke maand de posts klaar met beelden van je ${t.bedrijf}, plaatst ze op het juiste moment en laat zien wat het opleverde.`,
    voor: `Voor ${t.meervoud} die geen tijd hebben om elke week te posten, of posten zonder te weten wat werkt.`,
    plan: "systeem",
    priceWhy: "zelf doen in het volledige systeem; wij doen het vanaf €379 per maand",
    flow: {
        gets: "Elke week posts op je kanalen zonder dat jij erachter zit",
        steps: [
            { label: "Het plan voor de maand", say: "Een kalender met onderwerpen die passen bij je vak, je seizoen en je klanten.", screen: { kind: "list", title: "Kalender deze maand", items: [{ text: t.postOnderwerp, done: true }, { text: "Een tip van het team", done: true }, { text: "Nieuw in je zaak", done: false }] } },
            { label: "De post staat klaar", say: "Tekst en beeld zijn gemaakt. Jij kijkt even, of laat hem vanzelf gaan.", screen: { kind: "post", channel: "Instagram, gepland di 19:00", caption: t.postOnderwerp, meta: "Klaar om te plaatsen" } },
            { label: "Geplaatst en gemeten", say: "De post gaat op het beste moment online en je ziet wat hij deed.", screen: { kind: "list", title: "Wat het deed", items: [{ text: "Geplaatst op Instagram en Facebook", done: true }, { text: "3 vragen in je berichten", done: true }, { text: "1 nieuwe afspraak", done: true }] } },
        ],
    },
    intro: {
        title: "Meer dan alleen automatisch posten",
        text: [
            `Posten zonder plan levert weinig op. Daarom begint het met wie je wilt bereiken en wat je ${t.bedrijf} anders maakt, en daarna komt de kalender.`,
            "Elke maand zie je wat werkte en wat niet, en de volgende maand gaat daar verder op. Jij beslist hoeveel je zelf doet.",
        ],
    },
    what: {
        title: "Wat je krijgt",
        items: [
            { title: "Een plan voor je kanalen", text: "Welke kanalen voor jou tellen en wat je daar laat zien." },
            { title: "Een kalender per maand", text: "De onderwerpen staan vooraf klaar, twee weken voor ze online gaan." },
            { title: "Posts met beeld", text: "Tekst en beeld in de stijl van je zaak, gemaakt met AI en nagekeken." },
            { title: "Op het juiste moment geplaatst", text: "Op de dagen en tijden waarop je klanten kijken." },
            { title: "Elke maand de cijfers", text: "Wat er gezien werd, wat er reacties kreeg en wat het opleverde." },
            { title: "Jouw eigen werk erin", text: "Foto's van jouw werk maken het echt. Stuur ze in, wij maken er posts van." },
        ],
    },
    who: {
        jij: ["Je kiest de kanalen en keurt de kalender goed, of laat hem vanzelf lopen.", "Je stuurt foto's van je werk als je die hebt.", "Je reageert op berichten, of laat de chatbot de eerste vraag doen."],
        ai: ["Maakt de kalender, de teksten en de beelden.", "Plaatst de posts op het beste moment.", "Leest wat werkte en past de volgende maand aan."],
        wij: ["Zetten het plan en de stijl met je op.", "Kijken de posts na voor ze gaan.", "Doen het helemaal voor je, vanaf €379 per maand."],
    },
    related: [
        { href: "/chatbot", title: "AI chatbot", text: "Vragen uit je berichten krijgen meteen antwoord." },
        { href: "/seo", title: `SEO voor ${t.meervoud}`, text: "Wat je op social laat zien versterkt wat mensen in Google vinden." },
        { href: "/reviews", title: "Reviews", text: "Een goede review is ook een goede post." },
    ],
    faqs: [
        { q: "Op welke kanalen kan ik posten?", a: "Instagram, Facebook en LinkedIn, en andere kanalen op aanvraag. We kiezen samen welke voor jouw klanten tellen." },
        { q: "Moet ik zelf foto's maken?", a: "Niet per se. Beelden worden met AI gemaakt in de stijl van je zaak. Foto's van je eigen werk maken het nog echter; die zetten we er graag in." },
        { q: "Kan ik posts eerst zien?", a: "Ja. Je ziet de kalender twee weken vooraf en kunt elke post aanpassen of tegenhouden. Of je laat ze vanzelf gaan." },
        { q: "Hoe weet ik of het werkt?", a: "Elke maand zie je wat er gezien werd, wat reacties kreeg en hoeveel vragen en afspraken eruit kwamen." },
        { q: `Wat kost social media bij ${brand}?`, a: "Zelf doen met de AI zit in het volledige systeem, vanaf €179 per maand excl. btw, met het maken op je tegoed. Wil je dat wij alles doen, dan is dat vanaf €379 per maand." },
    ],
    close: { title: "Elke week zichtbaar, zonder erachter te zitten", text: "Laat je e-mailadres achter, dan sturen we je de demo. Daarna kies je zelf of je een gesprek plant." },
};

export const reviews: ServiceSpec = {
    slot: "reviews",
    kicker: "Reviews",
    h1: `Review management voor ${t.meervoud}: vanzelf meer Google reviews`,
    lead: `${brand} vraagt elke ${t.klant} na de afspraak om een Google review, op het juiste moment en op dezelfde manier, en laat jou op elke review reageren vanuit één plek.`,
    voor: `Voor ${t.meervoud} met tevreden klanten maar te weinig sterren in Google.`,
    plan: "systeem",
    priceWhy: "in het volledige systeem",
    flow: {
        gets: "Elke tevreden klant wordt een review op Google",
        steps: [
            { label: "Na de afspraak", say: "Kort na de afspraak krijgt de klant een bericht met de vraag om een review.", screen: { kind: "chat", title: "Bericht aan de klant", lines: [[cap(t.bedrijf), "Bedankt voor je bezoek! Wil je ons laten weten hoe het was? Het kost een halve minuut."]] } },
            { label: "De klant schrijft", say: "Eén tik opent het reviewformulier van Google, zonder zoeken.", screen: { kind: "chat", title: "Google review", lines: [["Klant", t.reviewZin]] } },
            { label: "Jij reageert", say: "De review staat op Google en jij reageert vanuit je dashboard, met een voorstel klaar.", screen: { kind: "card", title: "Nieuwe review", name: t.voorbeeldKlant, rows: ["★★★★★ op Google", "Voorstel voor je reactie staat klaar"], badge: "+1 review" } },
        ],
    },
    intro: {
        title: "Waarom zijn reviews belangrijk?",
        text: [
            `Wie een ${t.enkelvoud} zoekt, kijkt eerst naar de sterren en het aantal reviews. Meer recente reviews helpen je ook hoger in de kaart van Google.`,
            "Tevreden klanten willen best een review schrijven, maar thuis zijn ze het vergeten. Een vraag op het juiste moment maakt het verschil.",
        ],
    },
    what: {
        title: "Wat je krijgt",
        items: [
            { title: "Een verzoek na elke afspraak", text: "Per bericht of mail, op het moment dat je klant nog net bij je was." },
            { title: "Eén tik naar Google", text: "De link opent het reviewformulier van je eigen bedrijfsprofiel." },
            { title: "Reageren vanuit één plek", text: "Elke review komt binnen in je dashboard, met een voorstel voor je reactie." },
            { title: "Direct een melding bij kritiek", text: "Is een klant niet tevreden, dan weet jij het meteen en kun je het goedmaken." },
            { title: "Kaartjes en displays erbij", text: "Met het reviewpakket kan je klant ook in je zaak met één tik een review geven." },
            { title: "Een maandoverzicht", text: "Hoeveel reviews erbij kwamen en hoe je gemiddelde zich ontwikkelt." },
        ],
    },
    who: {
        jij: ["Je kiest wanneer het verzoek gaat.", "Je reageert op reviews, of laat het voorstel staan.", "Je pakt kritiek zelf op, met de melding als begin."],
        ai: ["Stuurt elk verzoek op het juiste moment.", "Schrijft een voorstel voor je reactie.", "Meldt je meteen als een review kritisch is."],
        wij: ["Koppelen je Google-bedrijfsprofiel.", "Zetten de berichten in jouw toon klaar.", "Maken de kaartjes en displays als je het reviewpakket kiest."],
    },
    related: [
        { href: "/review-pakket", title: "Reviewpakket", text: "NFC-displays en kaartjes voor een review in je zaak, vanaf €179 eenmalig." },
        { href: "/seo", title: `SEO voor ${t.meervoud}`, text: "Reviews helpen je hoger in de kaart van Google." },
        { href: "/automatisering", title: "Workflow automatisering", text: "Het reviewverzoek is een van de berichten die vanzelf gaan." },
    ],
    faqs: [
        { q: "Mag ik mijn klanten om een review vragen?", a: "Ja. Vraag het iedere klant en zet er niets tegenover: Google verbiedt beloningen voor reviews en het alleen vragen aan tevreden klanten. Het verzoek gaat daarom naar iedereen op dezelfde manier." },
        { q: "Wat als iemand een slechte review geeft?", a: "Dan krijg je meteen een melding, met een voorstel voor een rustige reactie. Een goede reactie op kritiek laat nieuwe klanten zien dat je het serieus neemt." },
        { q: "Hoe krijgt mijn klant het verzoek?", a: "Per bericht of mail, kort na de afspraak, met één link naar het reviewformulier van Google." },
        { q: "Werkt het met mijn agenda?", a: "Ja. Het verzoek gaat na een afspraak in je agenda, dus je hoeft er niet aan te denken." },
        { q: `Wat kost review management bij ${brand}?`, a: "Review management zit in het volledige systeem, vanaf €179 per maand excl. btw. Het reviewpakket met displays en kaartjes is eenmalig, vanaf €179." },
    ],
    close: { title: "Meer sterren, zonder er elke keer om te vragen", text: "Laat je e-mailadres achter, dan sturen we je de demo. Daarna kies je zelf of je een gesprek plant." },
};

export const automatisering: ServiceSpec = {
    slot: "automatisering",
    kicker: "Automatisering",
    h1: `Workflow automatisering voor ${t.meervoud}: laat het systeem het werk doen`,
    lead: `${brand} stuurt de berichten rond elke afspraak vanzelf: de bevestiging, de herinnering, het bericht als je later bent en het reviewverzoek, zodat jij geen administratie meer hebt tussen je ${t.klanten} door.`,
    voor: `Voor ${t.meervoud} die 's avonds nog berichten sturen, herinneringen vergeten of last hebben van no-shows.`,
    plan: "systeem",
    priceWhy: "in het volledige systeem",
    flow: {
        gets: "Elke afspraak loopt vanzelf, van aanvraag tot review",
        steps: [
            { label: "De aanvraag komt binnen", say: "Via je site, de chat of de telefoon. De afspraak staat in je agenda en de klant krijgt een bevestiging.", screen: { kind: "slot", title: "Nieuwe afspraak", slot: t.voorbeeldMoment, detail: `${cap(t.afspraak)}, ${t.voorbeeldKlant}`, badge: "Bevestigd" } },
            { label: "De herinnering gaat", say: "De dag ervoor krijgt de klant een herinnering met één tik om te bevestigen of te verzetten.", screen: { kind: "chat", title: "Herinnering", lines: [[cap(t.bedrijf), t.herinnering], ["Klant", "Bevestigen"]] } },
            { label: "Na de afspraak", say: "Een bedankje en het reviewverzoek gaan vanzelf, en later de uitnodiging om terug te komen.", screen: { kind: "list", title: "Vanzelf verstuurd", items: [{ text: "Bevestiging", done: true }, { text: "Herinnering", done: true }, { text: "Reviewverzoek", done: true }, { text: "Uitnodiging om terug te komen", done: false }] } },
        ],
    },
    intro: {
        title: `Wat is workflow automatisering voor een ${t.bedrijf}?`,
        text: [
            "Workflow automatisering betekent dat de berichten en taken die steeds hetzelfde zijn vanzelf gaan, op het juiste moment, zonder dat jij eraan denkt.",
            `Voor een ${t.bedrijf} gaat het vooral om alles rond een afspraak: bevestigen, herinneren, opvolgen en om een review vragen. Minder no-shows en minder werk na sluitingstijd.`,
        ],
    },
    what: {
        title: "Wat er vanzelf gaat",
        items: [
            { title: "Herinneringen", text: "Per WhatsApp, sms of mail, met één tik om te bevestigen of te verzetten." },
            { title: "Opvolging van aanvragen", text: "Wie iets vroeg maar nog niet boekte, krijgt een vriendelijk bericht." },
            { title: "Berichten aan je klanten", text: "Een bedankje, een tip voor thuis of een melding als je later bent." },
            { title: "Je agenda bijgewerkt", text: "Wat er via de chat of de telefoon geboekt wordt, staat meteen in je agenda." },
            { title: "Reviewverzoeken", text: "Na elke afspraak, naar iedere klant op dezelfde manier." },
            { title: "Jouw eigen stappen", text: "Heb je een vaste werkwijze, dan zetten we die er ook in." },
        ],
    },
    who: {
        jij: ["Je kiest welke berichten aan staan en wat erin staat.", "Je ziet in je dashboard wat er is verstuurd.", "Je zet een stap uit als je die niet wilt."],
        ai: ["Stuurt elk bericht op het juiste moment.", "Verwerkt bevestigingen en verzettingen in je agenda.", "Laat zien welke berichten het meest opleveren."],
        wij: ["Brengen je werkdag in kaart en zetten de stappen klaar.", "Koppelen je agenda en je andere software.", "Passen het aan als je werkwijze verandert."],
    },
    related: [
        { href: "/crm", title: `CRM voor ${t.meervoud}`, text: "De opvolging gaat vanuit één klantenbestand." },
        { href: "/voice-ai", title: "Telefoonagent", text: "Een afspraak die telefonisch binnenkomt, loopt dezelfde route." },
        { href: "/reviews", title: "Reviews", text: "Het reviewverzoek gaat vanzelf na elke afspraak." },
    ],
    faqs: [
        { q: "Welke berichten gaan vanzelf?", a: "De bevestiging, de herinnering, een bericht als je later bent, het bedankje, het reviewverzoek en de uitnodiging om terug te komen. Jij kiest welke aan staan." },
        { q: "Helpt het tegen no-shows?", a: "Ja. Een herinnering de dag ervoor, met één tik om te bevestigen of te verzetten, maakt dat klanten minder vaak wegblijven." },
        { q: "Werkt het met mijn agenda en software?", a: "We koppelen je agenda en je andere software, zodat alles in één route loopt." },
        { q: "Kan ik de berichten zelf schrijven?", a: "Ja. We zetten ze in jouw toon klaar en je kunt ze altijd aanpassen." },
        { q: `Wat kost workflow automatisering bij ${brand}?`, a: "De automatiseringen zitten in het volledige systeem, vanaf €179 per maand excl. btw. Wil je dat wij ze voor je bijhouden, dan is dat vanaf €379 per maand." },
    ],
    close: { title: "Minder administratie, minder no-shows", text: "Laat je e-mailadres achter, dan sturen we je de demo. Daarna kies je zelf of je een gesprek plant." },
};
