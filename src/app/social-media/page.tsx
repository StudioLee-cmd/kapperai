import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import { trade } from "@/data/trade";
import SocialMediaContent from "./SocialMediaContent";

const title = `Social media voor ${trade.meervoud} | ${siteDetails.siteName}`;
const description = `Social media voor ${trade.meervoud}: een plan, een kalender per maand, posts met beeld en de cijfers erbij. Vanaf €179 per maand, of wij doen het vanaf €379.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${siteDetails.siteUrl}social-media`, type: "website", locale: "nl_NL" },
  alternates: { canonical: `${siteDetails.siteUrl}social-media` },
};

export default function Page() {
  return <SocialMediaContent />;
}
