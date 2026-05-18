/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            { source: '/chatbot-voor-:suffix', destination: '/chatbot', permanent: true },
            { source: '/voice-ai-voor-:suffix', destination: '/voice-ai', permanent: true },
            { source: '/reviews-voor-:suffix', destination: '/reviews', permanent: true },
            { source: '/seo-voor-:suffix', destination: '/seo', permanent: true },
            { source: '/social-media-voor-:suffix', destination: '/social-media', permanent: true },
                    { source: '/blog/salon-overname-van-loondienst-naar-eigen-salon', destination: '/', permanent: true },
            { source: '/blog/webshop-voor-kappers-aftercare-marges', destination: '/', permanent: true },
            { source: '/blog/bridal-trial-run-flow-kapper', destination: '/', permanent: true },
            { source: '/blog/btw-tarief-9-procent-kapper-low-tariff-regels-2026', destination: '/', permanent: true },
            { source: '/blog/multi-locatie-kapsalon-2-5-vestigingen-mkb-groei', destination: '/', permanent: true },
            { source: '/blog/stoel-rental-freelance-stylisten-kapsalon', destination: '/', permanent: true },
            { source: '/blog/senior-haar-oncology-haarverlies-kapper-specialisme', destination: '/', permanent: true },
            { source: '/blog/extensions-haarwerk-high-ticket-kapper', destination: '/', permanent: true },
            { source: '/blog/kinderhaar-family-salon-kapper-specialisme', destination: '/', permanent: true },
            { source: '/blog/mannenmode-kapper-barbershop-transformation', destination: '/', permanent: true },
            { source: '/blog/robot-knipt-beter-dan-jij', destination: '/', permanent: true },
            { source: '/blog/personeel-werven-kapper-stylisten', destination: '/', permanent: true },
            { source: '/blog/social-media-voor-kappers', destination: '/blog/social-media-kappers-instagram', permanent: true },
        ];
    },
};

export default nextConfig;
