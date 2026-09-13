"use client";

import { useInstallModal } from "./InstallModalProvider";
import { PrimaryButton } from "./ui/Primitives";
import { Reveal } from "./ui/Reveal";

const STEPS = [
  {
    label: "Download",
    icon: <path d="M12 3v13m0 0l-5-5m5 5l5-5M4 21h16" />,
  },
  {
    label: "Extract",
    icon: <path d="M4 7l2-4h12l2 4M4 7h16M4 7v13h16V7M9 11h6" />,
  },
  {
    label: "chrome://extensions",
    icon: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h8M12 2v8m3.5 1.5L21 8m-8.5 5.5L21 16m-8.5-2.5L7 21" />,
  },
  {
    label: "Developer Mode",
    icon: <path d="M5 12h14M15 8a4 4 0 010 8" />,
  },
  {
    label: "Load unpacked",
    icon: <path d="M3 7h5l2 2h11v10H3zM12 12v5m-2.5-2.5L12 17l2.5-2.5" />,
  },
  {
    label: "Ready",
    icon: <path d="M20 6L9 17l-5-5" />,
    accent: true,
  },
];

export function InstallSection() {
  const { open } = useInstallModal();
  return (
    <section className="relative overflow-hidden py-28 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="relative mx-auto max-w-content px-5 text-center sm:px-8">
        <Reveal className="mx-auto flex max-w-xl flex-col items-center">
          <h2 className="text-balance font-display text-3xl font-bold leading-[1.15] text-ink sm:text-[2.5rem]">
            Try the actual thing.
          </h2>
          <p className="mt-4 text-balance text-[15px] leading-relaxed text-ink-dim">
            A working extension today — developer preview, real backend behind it.
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-14 max-w-4xl">
          <div className="grid grid-cols-3 gap-x-2 gap-y-8 sm:grid-cols-6 sm:gap-x-1">
            {STEPS.map((s, i) => (
              <div key={s.label} className="relative flex flex-col items-center gap-2.5">
                {i < STEPS.length - 1 && (
                  <div className="pointer-events-none absolute left-[calc(50%+28px)] top-6 hidden h-px w-[calc(100%-56px)] sm:block">
                    <svg className="h-px w-full text-ink-faint" viewBox="0 0 100 2" preserveAspectRatio="none">
                      <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="animate-flow" />
                    </svg>
                  </div>
                )}
                <div
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${
                    s.accent ? "border-ok/50 bg-ok/[0.12]" : "border-border bg-surface"
                  }`}
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={s.accent ? "text-ok" : "text-accent-bright"}>
                    {s.icon}
                  </svg>
                </div>
                <span className={`font-mono text-[10.5px] font-medium leading-tight ${s.accent ? "text-ok" : "text-ink-dim"}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={220} className="mt-12">
          <PrimaryButton onClick={open}>Get V.A.R.M.A.</PrimaryButton>
        </Reveal>
      </div>
    </section>
  );
}
