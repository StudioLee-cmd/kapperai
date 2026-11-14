import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import TarievenContent from "./TarievenContent";

// The plan frame (EzidaPlanFrame) is not shown here: its record still puts a weekly article and posts in the start,
// which the owner's answer of 13-11 took out; the ladder on this page is src/data/ladder.ts.
const title = `Tarieven ${siteDetails.siteName}: prijzen en pakketten`;
const description = `Tarieven ${siteDetails.siteName}: het website-ontwerp is gratis en het bestand is van jou. Je website met chatbot €79 per maand, het volledige systeem vanaf €179, alles uit handen vanaf €379.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${siteDetails.siteUrl}tarieven`, type: "website", locale: "nl_NL" },
  alternates: { canonical: `${siteDetails.siteUrl}tarieven` },
};

export default function TarievenPage() {
  return <TarievenContent />;
}
