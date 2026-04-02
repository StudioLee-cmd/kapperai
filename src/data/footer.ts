import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
    kvk: string;
    btw: string;
    address: string;
    legalName: string;
} = {
    subheading: "Focus op knippen, wij op de rest. Wij regelen je telefoontjes, planning en marketing, zodat jij kunt doen waar je goed in bent.",
    quickLinks: [
        { text: "Functies", url: "/#features" },
        { text: "Tarieven", url: "/tarieven" },
        { text: "Gratis Scan", url: "/gratis-scan" },
        { text: "Blog", url: "/blog" },
        { text: "Chatbot voor Kappers", url: "/chatbot-voor-kappers" },
        { text: "Voice AI voor Kappers", url: "/voice-ai-voor-kappers" },
        { text: "SEO voor Kappers", url: "/seo-voor-kappers" },
        { text: "Social Media", url: "/social-media-voor-kappers" },
        { text: "Reviews", url: "/reviews-voor-kappers" },
        { text: "Review Pakket", url: "/review-pakket" }
    ],
    email: 'Tim@KapperAI.nl',
    telephone: '+31612345678',
    socials: {
        instagram: 'https://www.instagram.com',
        linkedin: 'https://www.linkedin.com',
    },
    kvk: '98933353',
    btw: 'NL005362803B09',
    address: 'De Donge 9, 3448CJ, Woerden',
    legalName: 'DigitalStudioLee'
}