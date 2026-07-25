import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import TarievenContent from "./TarievenContent";

export const metadata: Metadata = {
  title: `Tarieven — ${siteDetails.siteName} | Prijzen & Pakketten`,
  description: `Tarieven ${siteDetails.siteName}: het website-ontwerp is gratis en het bestand is van jou. Laten draaien vanaf €79 per maand, afkopen voor €800.`,
  openGraph: {
    title: `Tarieven — ${siteDetails.siteName}`,
    description: `Het ontwerp is gratis en het bestand is van jou. Laten draaien vanaf €79 per maand, of de site afkopen voor €800.`,
    url: `${siteDetails.siteUrl}tarieven`,
    type: "website",
    locale: "nl_NL",
  },
  alternates: { canonical: `${siteDetails.siteUrl}tarieven` },
};

export default function TarievenPage() {
  return <TarievenContent />;
}
