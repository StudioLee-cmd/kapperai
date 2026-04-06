import dynamic from "next/dynamic";
import { Metadata } from "next";
import siteDetails from "@/data/siteDetails";

const SpelContent = dynamic(() => import("./SpelContent"), { ssr: false });

export const metadata: Metadata = {
  title: `SalonBaas - Kapper Simulatie | ${siteDetails.siteName}`,
  description: `Bouw je kapsalon op in deze isometrische pixelwereld! Knip haar, style lokken en verdien munten. Een retro pixel-art simulatiegame van KapperAI.`,
  openGraph: {
    title: `SalonBaas - Kapper Simulatie | ${siteDetails.siteName}`,
    description: `Bouw je kapsalon op in deze isometrische pixelwereld! Knip haar, style lokken en verdien munten.`,
  },
};

export default function SpelPage() {
  return <SpelContent />;
}
