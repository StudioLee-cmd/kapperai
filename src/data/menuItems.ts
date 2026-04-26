import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Kappers", url: "/chatbot" },
            { text: "Voice AI voor Kappers", url: "/voice-ai" },
            { text: "SEO voor Kappers", url: "/seo" },
            { text: "Social Media voor Kappers", url: "/social-media" },
            { text: "Reviews voor Kappers", url: "/reviews" },
            { text: "Review Pakket", url: "/review-pakket" },
            { text: "CRM voor Kappers", url: "/crm" },
        ]
    },
    {
        text: "Tarieven",
        url: "/tarieven"
    },
    {
        text: "Gratis Scan",
        url: "/gratis-scan"
    },
    {
        text: "Gratis Website",
        url: "/gratis-website"
    },
    {
        text: "Blog",
        url: "/blog"
    }
];
