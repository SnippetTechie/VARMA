"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useInstallModal } from "./InstallModalProvider";

const NODES = [
  { label: "Browser", icon: <path d="M4 5h16v14H4zM4 9h16M8 5v0" /> },
  {
    label: "V.A.R.M.A",
    accent: true,
    icon: <path d="M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7l7-4z" />,
  },
  { label: "Protected data", icon: <path d="M6 10V7a6 6 0 1112 0v3M5 10h14v10H5z" /> },
  { label: "Agent", icon: <path d="M4 4l7 17 2.4-7.1L20 11.5 4 4z" strokeLinejoin="round" /> },
];

export function Hero() {
  const { open } = useInstallModal();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from("[data-hero='line']", { opacity: 0, y: 26, duration: 0.85, stagger: 0.09 })
          .from("[data-hero='sub']", { opacity: 0, y: 16, duration: 0.7 }, "-=0.5")
          .from("[data-hero='cta']", { opacity: 0, y: 12, duration: 0.6, stagger: 0.08 }, "-=0.45")
          .from(
            "[data-hero='node']",
            { opacity: 0, y: 18, scale: 0.96, duration: 0.6, stagger: 0.12 },
            "-=0.3"
          )
          .from("[data-hero='connector']", { scaleX: 0, transformOrigin: "left center", duration: 0.5, stagger: 0.12 }, "-=0.5");
      }, root);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="top" ref={rootRef} className="relative overflow-hidden bg-fine-grid pt-20 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/3 top-40 h-[360px] w-[500px] -translate-x-1/2 rounded-full bg-violet/15 blur-[120px]" />

      <div className="relative mx-auto max-w-content px-5 sm:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h1 className="text-balance font-display text-[2.75rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl">
            <span data-hero="line" className="block">Privacy for the</span>
            <span data-hero="line" className="block">agentic web.</span>
          </h1>

          <p data-hero="sub" className="mt-6 text-balance text-[16px] leading-relaxed text-ink-dim sm:text-[17px]">
            AI agents are becoming capable of acting directly inside your browser. V.A.R.M.A. adds a
            privacy layer that detects and protects sensitive information during those agentic
            workflows.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              data-hero="cta"
              type="button"
              onClick={open}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-accent-bright to-accent px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_8px_24px_-8px_rgba(79,139,255,0.6)] transition-[filter,transform] duration-300 ease-out hover:brightness-110 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-bright"
            >
              Get V.A.R.M.A.
            </button>
            <button
              data-hero="cta"
              type="button"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong bg-white/[0.02] px-5 py-2.5 text-[13.5px] font-semibold text-ink transition-[background-color,border-color] duration-300 ease-out hover:border-ink-dim/40 hover:bg-white/[0.05] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-bright"
            >
              Watch demo
            </button>
          </div>
        </div>

        <div className="relative mx-auto mt-20 max-w-2xl pb-24">
          {/* Mobile: vertical flow, same timeline-line language as the "How it works" section */}
          <div className="relative flex flex-col gap-5 sm:hidden">
            <div className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-accent/50 via-border-strong to-transparent" />
            {NODES.map((n) => (
              <div key={n.label} className="relative flex items-center gap-4">
                <div
                  data-hero="node"
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${
                    n.accent ? "pulse-glow border-accent/50 bg-accent/[0.1]" : "border-border bg-surface"
                  }`}
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={n.accent ? "text-accent-bright" : "text-ink-dim"}>
                    {n.icon}
                  </svg>
                </div>
                <span className={`font-display text-[14px] font-bold ${n.accent ? "text-accent-bright" : "text-ink"}`}>{n.label}</span>
              </div>
            ))}
          </div>

          {/* Desktop: each column is relatively positioned so the connector line
              (absolute, top-7 = half the h-14 circle) locks to the circle's
              vertical center regardless of label length below it. */}
          <div className="hidden sm:grid sm:grid-flow-col sm:auto-cols-fr sm:items-start">
            {NODES.map((n, i) => (
              <div key={n.label} className="relative flex flex-col items-center">
                {i < NODES.length - 1 && (
                  <div data-hero="connector" className="absolute left-1/2 top-7 h-4 w-full">
                    <svg className="h-4 w-full text-ink-faint" viewBox="0 0 100 16" fill="none" preserveAspectRatio="none">
                      <path d="M0 8h100" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="animate-flow" />
                    </svg>
                  </div>
                )}
                <div
                  data-hero="node"
                  className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border ${
                    n.accent ? "pulse-glow border-accent/50 bg-accent/[0.1]" : "border-border bg-surface"
                  }`}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={n.accent ? "text-accent-bright" : "text-ink-dim"}>
                    {n.icon}
                  </svg>
                </div>
                <span className={`mt-3 font-display text-[13.5px] font-bold ${n.accent ? "text-accent-bright" : "text-ink"}`}>{n.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
