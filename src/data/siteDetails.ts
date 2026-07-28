// ⛔ BOUWSTEEN 0 VAN HET BOODSCHAP-FRAME — `metadata.description` is de EERSTE zin die iemand van dit
// merk leest, en meestal de enige: 'ie is de SERP-snippet in Google, de preview in WhatsApp/LinkedIn
// én de `description` in de JSON-LD. Volle wet: niche-sites-upgrade-programma.md §HET BOODSCHAP-FRAME.
//
// ⚑ WAAROM DIT BLOK ER STAAT, want dit was 28-07 de duurste vondst van de hele pas: de hero-copy die
// Tim op 25-07 AFKEURDE stond hier nog integraal. De rework van 26-07 verving de zichtbare koppen op
// de homepage, en niemand keek naar de metadata — dus draaide de afgekeurde zin gewoon door als de
// tekst die Google toont, op ÉLKE pagina van het domein (gemeten: 10 treffers in de HTML van de
// homepage alleen, over meta/og/twitter/JSON-LD, plus dezelfde zin op /tarieven, /gratis-website,
// /free-trial en /aanmelding-gelukt). Een copy-pas die de metadata overslaat repareert de pagina en
// laat de ADVERTENTIE ervoor staan. Zie [[goede-edge-wet]] — de copy bereikte z'n grootste lezer niet.
//
// Wijzig je de boodschap van dit merk, wijzig 'm hier MEE. De gate meet deze routes sinds 28-07 ook
// op toon (`check_propositie_contract.py` §TOON), dus een vergeten metadata-regel gaat vanzelf rood.
export const siteDetails = {
    siteName: 'KapperAI',
    niche: 'Kappers',
    siteUrl: 'https://www.kapperai.nl/',
    metadata: {
        title: 'KapperAI - AI assistent voor jouw kapsalon',
        description: 'Website, telefoon, afspraken en vindbaarheid voor je kapsalon, draaiend opgeleverd. Je zaak loopt door terwijl jij knipt.',
    },
    language: 'nl-NL',
    locale: 'nl-NL',
    siteLogo: '/images/logo-transparent.png', // Transparent logo for dark mode support
    googleAnalyticsId: '', // e.g. G-XXXXXXX,
}