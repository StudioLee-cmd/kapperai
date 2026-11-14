"use client";

import React, { useEffect, useRef } from "react";
import routes from "@/data/routes.json";
import "./route/route.css";

// How a service works, as the route it takes, built in the page: real text (readable on a phone, read by Google and
// AI search) that walks step by step and reacts to the pointer. Made from clusters/content/motion/route/scenes.json
// in StudioLee Northstar (build.py json niche --trade <trade>); route.js and route.css are copied from there.
type Slot = keyof typeof routes;
type Step = { id: string; n: number; kind?: string; icon?: string; path?: string; warn?: boolean; tight?: boolean; when?: string; label: string; sub?: string; show?: string[]; say?: string; at: string[]; m: string[] };
type Scene = { kicker: string; title: string; sum: string; shape: string; cols: string; mcols: string; gap?: string; mgap?: string; mrows?: string; max?: number; steps: Step[]; edges: unknown[]; lanes?: { label: string; at: string[]; m: string[]; mhide?: boolean }[] };

const RouteExplainer: React.FC<{ slot: Slot }> = ({ slot }) => {
  const ref = useRef<HTMLElement>(null);
  const s = routes[slot] as unknown as Scene;
  const titleId = `zo-werkt-${slot}`;
  useEffect(() => {
    let gone = false;
    // @ts-expect-error route.js is a plain script: importing it sets window.NorthstarRoute
    import("./route/route.js").then(() => {
      const w = window as unknown as { NorthstarRoute?: { start: (el: HTMLElement) => void } };
      if (!gone && ref.current && w.NorthstarRoute) w.NorthstarRoute.start(ref.current);
    });
    return () => { gone = true; };
  }, []);
  const map: Record<string, string> = { "--rt-cols": s.cols, "--rt-mcols": s.mcols };
  if (s.gap) map["--rt-gap"] = s.gap;
  if (s.mgap) map["--rt-mgap"] = s.mgap;
  if (s.mrows) map["--rt-mrows"] = s.mrows;
  const place = (at: string[], m: string[]) => ({ "--c": at[0], "--r": at[1], "--mc": m[0], "--mr": m[1] }) as React.CSSProperties;
  return (
    <section className="py-16 px-4" data-route-slot={slot}>
      <div className="max-w-5xl mx-auto">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 text-center">Zo werkt het</p>
        <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-center mb-8">{s.title}</h2>
        <figure
          ref={ref}
          className={`rt rt--niche rt--${s.shape}`}
          data-route=""
          aria-labelledby={titleId}
          data-edges={JSON.stringify(s.edges)}
          data-sum={s.sum}
          style={s.max ? { maxWidth: s.max, marginLeft: "auto", marginRight: "auto" } : undefined}
        >
          <ol className="rt-map" style={map as React.CSSProperties}>
            {(s.lanes || []).map((lane) => (
              <li key={lane.label} className="rt-lane" aria-hidden="true" data-m={lane.mhide ? "none" : undefined} style={place(lane.at, lane.m)}>{lane.label}</li>
            ))}
            {s.steps.map((st) => {
              const kind = st.kind || "card";
              const cls = ["rt-step", kind !== "card" && `rt-${kind}`, st.warn && "rt-warn", kind === "card" && st.m[0] === "1/-1" && "rt-wm", st.tight && "rt-tight"].filter(Boolean).join(" ");
              const words = (
                <>
                  {st.when && <span className="rt-when">{st.when}</span>}
                  <span className="rt-label">{st.label}</span>
                  {st.sub && <span className="rt-sub">{st.sub}</span>}
                  {st.show && <span className="rt-show">{st.show.map((c) => <span key={c} className="rt-chip">{c}</span>)}</span>}
                  {st.say && <span className="rt-say">{st.say}</span>}
                </>
              );
              return (
                <li key={st.id} className={cls} data-id={st.id} data-step={st.n} style={place(st.at, st.m)}>
                  {st.path && kind !== "them" && kind !== "us" && (
                    <span className="rt-ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d={st.path} /></svg></span>
                  )}
                  {kind === "small" ? <span className="rt-txt">{words}</span> : words}
                </li>
              );
            })}
          </ol>
        </figure>
      </div>
    </section>
  );
};

export default RouteExplainer;
