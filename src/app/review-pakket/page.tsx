import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import ReviewPakketContent from "./ReviewPakketContent";

export const metadata: Metadata = {
  title: `Reviews verzamelen als kapper met NFC: het reviewpakket | ${siteDetails.siteName}`,
  description: `NFC-displays, deurstickers en kaartjes in de huisstijl van je kapsalon: je klant houdt de telefoon ertegen en schrijft meteen een Google review. Vanaf €179 eenmalig.`,
  openGraph: {
    title: `Reviews verzamelen als kapper, met één tik | ${siteDetails.siteName}`,
    description: `NFC-displays, deurstickers en kaartjes in de huisstijl van je kapsalon: je klant houdt de telefoon ertegen en schrijft meteen een Google review. Vanaf €179 eenmalig.`,
    url: `${siteDetails.siteUrl}review-pakket`,
    type: "website",
  },
  alternates: {
    canonical: `${siteDetails.siteUrl}review-pakket`,
  },
};

export default function ReviewPakketPage() {
  return <ReviewPakketContent />;
}
