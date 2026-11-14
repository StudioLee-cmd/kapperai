import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import { trade } from "@/data/trade";
import VoiceAIContent from "./VoiceAIContent";

const title = `Voice AI telefonist voor ${siteDetails.niche} | ${siteDetails.siteName}`;
const description = `Een telefoonagent voor ${trade.meervoud} die opneemt als jij niet kunt, afspraken in je agenda zet en je een samenvatting stuurt. Vanaf €179 per maand.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${siteDetails.siteUrl}voice-ai`, type: "website", locale: "nl_NL" },
  alternates: { canonical: `${siteDetails.siteUrl}voice-ai` },
};

export default function Page() {
  return <VoiceAIContent />;
}
