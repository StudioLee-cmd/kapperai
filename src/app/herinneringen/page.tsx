import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import HerinneringenContent from "./HerinneringenContent";

export const metadata: Metadata = {
  title: `Automatische herinneringen voor ${siteDetails.niche} — ${siteDetails.siteName}`,
  description: `Automatische WhatsApp + SMS herinneringen voor ${siteDetails.niche?.toLowerCase()} voorkomen no-shows en verzilveren elke geboekte afspraak. Klanten bevestigen of verzetten in één tik.`,
  openGraph: {
    title: `Automatische herinneringen voor ${siteDetails.niche} — ${siteDetails.siteName}`,
    description: `Automatische herinneringen voor ${siteDetails.niche?.toLowerCase()} — minder no-shows, geen telefoonrondjes.`,
    url: `${siteDetails.siteUrl}herinneringen`,
    type: "website",
    locale: "nl_NL",
  },
};

export default function HerinneringenPage() {
  return <HerinneringenContent />;
}
