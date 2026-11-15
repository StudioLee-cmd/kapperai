// Where a request came from, sent with every lead form (free scan, callback) so the page, article, ranking or
// experiment that brought it can be credited. Northstar reads these fields back on the lead ledger
// (python3 tools/lead_attribution.py measure: free_scan_source). Installed by clusters/seo/own_sites.py apply.
export function leadSource(form: string): Record<string, string> {
    const source: Record<string, string> = { bron_formulier: form };
    if (typeof window === "undefined") return source;
    const here = window.location;
    source.bron_domein = here.hostname;
    source.bron_pagina = here.pathname;
    try {
        const before = new URL(document.referrer);
        source.bron_verwijzer = before.host === here.host ? before.pathname : before.host;
    } catch {
        source.bron_verwijzer = "";
    }
    const params = new URLSearchParams(here.search);
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid"]) {
        const value = params.get(key);
        if (value) source[key] = value.slice(0, 200);
    }
    return source;
}
