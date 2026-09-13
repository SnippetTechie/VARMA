"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useInstallModal } from "./InstallModalProvider";

const LINKS = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#demo", label: "Demo" },
  { href: "#security", label: "Security" },
];

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-bright";

const GITHUB_PATH =
  "M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 016 0c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.9 1.3 2 1.3 3.2 0 4.6-2.7 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z";

export function Navbar() {
  const { open } = useInstallModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the mobile menu on Escape, and if the viewport grows past the
  // breakpoint where the inline nav takes over (resize, orientation change).
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onResize = () => {
      if (mq.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Slides down from behind the header and fades in — an explicit downward
  // entrance/upward exit, not an instant pop, and it's an absolutely
  // positioned overlay so it never pushes page content around.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (menuOpen) {
      gsap.fromTo(
        panel,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" }
      );
    }
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8">
        <a href="#top" className={`flex items-center gap-2.5 rounded-md ${FOCUS_RING}`}>
          <Image src="/img/logo.png" alt="" width={22} height={22} className="h-[22px] w-auto" />
          <span className="font-display text-[15px] font-bold tracking-tight text-ink">V.A.R.M.A</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-white/[0.02] px-1.5 py-1.5 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium text-ink-dim transition-colors hover:bg-white/5 hover:text-ink ${FOCUS_RING}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/SnippetTechie/Agent"
            target="_blank"
            rel="noreferrer"
            className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium text-ink-dim transition-colors hover:bg-white/5 hover:text-ink ${FOCUS_RING}`}
          >
            Source
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop CTA — on mobile this makes way for the GitHub icon;
              "Get V.A.R.M.A." moves into the menu panel instead. */}
          <button
            type="button"
            onClick={open}
            className={`hidden items-center gap-2 rounded-lg bg-gradient-to-b from-accent-bright to-accent px-4 py-2 text-[13px] font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset] transition hover:brightness-110 active:scale-[0.98] sm:inline-flex ${FOCUS_RING}`}
          >
            Get V.A.R.M.A.
          </button>

          <a
            href="https://github.com/SnippetTechie/Agent"
            target="_blank"
            rel="noreferrer"
            aria-label="V.A.R.M.A on GitHub"
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-ink-dim transition hover:border-border-strong hover:text-ink sm:hidden ${FOCUS_RING}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d={GITHUB_PATH} />
            </svg>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-ink transition hover:border-border-strong md:hidden ${FOCUS_RING}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          ref={panelRef}
          className="absolute left-0 right-0 top-full border-t border-border/70 bg-bg px-5 py-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] md:hidden"
        >
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              open();
            }}
            className={`mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-accent-bright to-accent px-4 py-3 text-[14px] font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset] transition hover:brightness-110 active:scale-[0.98] ${FOCUS_RING}`}
          >
            Get V.A.R.M.A.
          </button>
          <nav className="flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-[14px] font-medium text-ink-dim transition-colors hover:bg-white/5 hover:text-ink ${FOCUS_RING}`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
