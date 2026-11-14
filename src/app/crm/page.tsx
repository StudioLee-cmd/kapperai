import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import { trade } from "@/data/trade";
import CrmContent from "./CrmContent";

const title = `CRM voor ${siteDetails.niche} | ${siteDetails.siteName}`;
const description = `Een CRM voor ${trade.meervoud}: al je klanten op één plek met hun historie, en de opvolging gaat vanzelf. Vanaf €179 per maand.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${siteDetails.siteUrl}crm`, type: "website", locale: "nl_NL" },
  alternates: { canonical: `${siteDetails.siteUrl}crm` },
};

export default function Page() {
  return <CrmContent />;
}
