// The trade's own words, the only part of the sub-pages that differs per niche site. The pages themselves
// (src/components/service/ and the page files that use them) are the same on every own niche site; another site
// fills this file from clusters/seo/own-sites/trades/<trade>.json and its own live pages.
export const trade = {
    enkelvoud: "kapper",
    meervoud: "kappers",
    bedrijf: "kapsalon",
    klant: "klant",
    klanten: "klanten",
    // what keeps the owner from the phone, said as "terwijl jij ..."
    bezig: "knipt",
    // one ordinary appointment and one service, as a customer asks for it
    afspraak: "knipbeurt",
    dienst: "knippen en kleuren",
    diensten: ["knippen", "kleuren", "föhnen", "baard trimmen"],
    // the first thing a customer asks on the phone (trades/kapper.json opening) and in a chat
    vraagTelefoon: "Kan ik zaterdag terecht om te knippen?",
    vraagChat: "Hebben jullie morgen nog plek voor knippen en kleuren?",
    antwoordChat: "Ja, morgen om 10:30 of 14:00. Welke tijd past je?",
    // an invented example customer and moment (never a real client)
    voorbeeldKlant: "Sanne de Vries",
    voorbeeldMoment: "za 10:30",
    voorbeeldGeschiedenis: ["Knippen en kleuren, 6 weken geleden", "Vaste kleur: koper 7.4", "Komt meestal op zaterdag"],
    // what Google and social show for this trade
    zoekterm: "kapper in de buurt",
    postOnderwerp: "Voor en na: van lang naar een frisse bob",
    reviewZin: "Super geknipt en goed advies over mijn kleur. Ik kom zeker terug!",
    // the moment a reminder or follow-up matters most
    herinnering: "Morgen 10:30 knippen bij je kapsalon. Tik op Bevestigen of Verzetten.",
    terugkom: "Het is 6 weken geleden. Zal ik je volgende knipbeurt inplannen?",
    // the site's own article on asking for reviews, linked from /review-pakket (null when the site has none)
    reviewBlog: { href: "/blog/meer-google-reviews-als-kapper", title: "Meer Google reviews als kapper" } as { href: string; title: string } | null,
} as const;

export type Trade = typeof trade;
