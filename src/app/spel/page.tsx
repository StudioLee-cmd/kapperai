import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import SpelContent from "./SpelContent";

export const metadata: Metadata = {
  title: `SalonBaas - Kapper Simulatie | ${siteDetails.siteName}`,
  description:
    "Bouw je kapsalon op in deze isometrische pixelwereld! Knip haar, style lokken en verdien munten. Een retro pixel-art simulatiegame van KapperAI.",
  openGraph: {
    title: `SalonBaas - Kapper Simulatie | ${siteDetails.siteName}`,
    description:
      "Bouw je kapsalon op in deze isometrische pixelwereld! Knip haar, style lokken en verdien munten.",
    url: `${siteDetails.siteUrl}spel`,
    type: "website",
    locale: "nl_NL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SpelPage() {
  return <SpelContent />;
}
