import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import GratisWebsiteContent from "./GratisWebsiteContent";

const niche = siteDetails.niche?.toLowerCase() || "bedrijven";
const nicheSingular = niche.endsWith("s") ? niche.slice(0, -1) : niche;

export const metadata: Metadata = {
  title: `Gratis Website voor ${siteDetails.niche} — of laten maken vanaf €800`,
  description: `Gratis website design voor ${niche} of een complete website laten maken vanaf €800. Live preview binnen 48 uur, SEO-geoptimaliseerd en mobielvriendelijk.`,
  keywords: [
    `gratis website ${nicheSingular}`,
    `website laten maken ${nicheSingular}`,
    `website ${niche}`,
    `website design ${nicheSingular}`,
    `webdesign ${nicheSingular}`,
  ].join(", "),
  openGraph: {
    title: `Gratis Website voor ${siteDetails.niche} — of laten maken vanaf €800 | ${siteDetails.siteName}`,
    description: `Gratis website design op maat. Live preview binnen 48 uur. Website laten maken voor ${niche} vanaf €800 of het complete AI platform vanaf €79/maand.`,
    url: `${siteDetails.siteUrl}gratis-website`,
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: `${siteDetails.siteUrl}images/services/gratis-website-hero.jpg`,
        width: 1672,
        height: 941,
        alt: `Website laten maken voor ${niche} — voorbeeld op laptop`,
      },
    ],
  },
  alternates: { canonical: `${siteDetails.siteUrl}gratis-website` },
};

export default function GratisWebsitePage() {
  return <GratisWebsiteContent />;
}
