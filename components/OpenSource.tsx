import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/Primitives";

export function OpenSource() {
  return (
    <section className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading title="Every mechanism on this page is real code." />

        <Reveal delay={140} className="mx-auto mt-12 max-w-md">
          <div className="glow-border rounded-2xl border border-border bg-surface p-6 transition-transform duration-300 ease-out hover:-translate-y-1">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-raised text-ink">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 016 0c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.9 1.3 2 1.3 3.2 0 4.6-2.7 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z" />
                </svg>
              </span>
              <div>
                <div className="font-display text-[14px] font-bold text-ink">SnippetTechie/Agent</div>
                <div className="font-mono text-[11px] text-ink-faint">github.com/SnippetTechie/Agent</div>
              </div>
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-ink-dim">
              Extension, reasoning server, and detection engine — SIH26171.
            </p>
            <a
              href="https://github.com/SnippetTechie/Agent"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border-strong px-4 py-2.5 text-[13px] font-semibold text-ink transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-bright"
            >
              View on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
