import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import { trade } from "@/data/trade";
import SEOContent from "./SEOContent";

const title = `SEO voor ${trade.meervoud}: beter gevonden in Google | ${siteDetails.siteName}`;
const description = `SEO voor ${trade.meervoud}: artikelen die gezocht worden, een bijgewerkt Google-profiel en elke maand een lijst met wat beter kan. Vanaf €179 per maand, of wij doen het vanaf €379.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${siteDetails.siteUrl}seo`, type: "website", locale: "nl_NL" },
  alternates: { canonical: `${siteDetails.siteUrl}seo` },
};

export default function Page() {
  return <SEOContent />;
}
