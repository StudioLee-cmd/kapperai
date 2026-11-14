"use client";
import ServicePage from "@/components/service/ServicePage";
import { crm } from "@/data/servicePages";

// The reworked page, the same on every own niche site (src/components/service/ServicePage.tsx); its words are
// src/data/servicePages.ts with the trade's own words from src/data/trade.ts.
export default function CrmContent() {
    return <ServicePage spec={crm} />;
}
