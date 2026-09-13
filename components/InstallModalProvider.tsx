"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

const Ctx = createContext<{ open: () => void } | null>(null);

export function useInstallModal() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useInstallModal must be used within InstallModalProvider");
  return ctx;
}

const STEPS = [
  "Download the extension package",
  "Extract the ZIP file",
  "Open chrome://extensions",
  "Enable Developer Mode (top right)",
  "Click “Load unpacked”",
  "Select the extracted V.A.R.M.A. folder",
];

export function InstallModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="install-modal-title"
          onClick={close}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border-strong bg-surface p-5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)] sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink-dim transition hover:bg-white/5 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-bright sm:right-4 sm:top-4"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <span className="mr-8 inline-flex items-center gap-1.5 rounded-full border border-warn/30 bg-warn/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-warn">
              Developer Preview
            </span>

            <h3 id="install-modal-title" className="mt-4 font-display text-xl font-bold text-ink sm:text-2xl">
              Get V.A.R.M.A.
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-dim sm:text-[13.5px]">
              Not yet on the Chrome Web Store. Load the built extension directly from a downloaded
              package — it takes about a minute.
            </p>

            <ol className="mt-5 flex flex-col gap-2.5">
              {STEPS.map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-[12.5px] text-ink-dim sm:text-[13px]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-raised font-mono text-[10.5px] font-semibold text-accent-bright">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <a
                href="/download/varma-extension.zip"
                download
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-accent-bright to-accent px-4 py-2.5 text-[13.5px] font-semibold text-white transition hover:brightness-110 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v13m0 0l-5-5m5 5l5-5M4 21h16" />
                </svg>
                Download extension.zip
              </a>
              <a
                href="https://github.com/SnippetTechie/Agent"
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border-strong px-4 py-2.5 text-[13.5px] font-semibold text-ink transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-bright"
              >
                View source on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
