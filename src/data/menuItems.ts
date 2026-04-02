import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Kappers", url: "/chatbot-voor-kappers" },
            { text: "Voice AI voor Kappers", url: "/voice-ai-voor-kappers" },
            { text: "SEO voor Kappers", url: "/seo-voor-kappers" },
            { text: "Social Media voor Kappers", url: "/social-media-voor-kappers" },
            { text: "Reviews voor Kappers", url: "/reviews-voor-kappers" },
            { text: "Review Pakket", url: "/review-pakket" },
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
