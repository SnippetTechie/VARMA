import { Reveal } from "./ui/Reveal";
import { SectionHeading, StatusChip } from "./ui/Primitives";
import { VideoFrame } from "./ui/VideoFrame";

const STEPS = [
  { title: "Browser tab", detail: "Your own tab, never a hidden one." },
  { title: "V.A.R.M.A. extension", detail: "Reads the DOM, applies PII detection." },
  { title: "Backend API", detail: "FastAPI over WebSocket, step by step." },
  { title: "Self-hosted inference", detail: "vLLM on self-hosted GPU, with a cloud fallback." },
  { title: "Approval gate", detail: "Manual, Automatic, or Skip." },
  { title: "Action executes", detail: "Click, type, and scroll as real events." },
];

export function Architecture() {
  return (
    <section id="how-it-works" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          title="From browser action to protected intelligence."
          lede="Same architecture, two ways to read it."
        />

        <Reveal delay={100} className="mt-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <VideoFrame
                src="/video/architecture.mp4"
                poster="/img/architecture-poster.jpg"
                label="Animated walkthrough of the V.A.R.M.A. data pipeline"
              />
              <p className="mt-3 text-[11.5px] text-ink-faint">A motion graphic; the wording beside it is the precise version.</p>
            </div>

            <div className="relative">
              <div className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-accent/50 via-border-strong to-transparent" />
              <ol className="flex flex-col gap-7">
                {STEPS.map((s, i) => (
                  <li key={s.title} className="relative flex gap-5">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-strong bg-raised font-mono text-[13px] font-semibold text-accent-bright">
                      {i + 1}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="font-display text-[14.5px] font-bold text-ink">{s.title}</h3>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-ink-dim">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-14 max-w-2xl">
          <div className="rounded-xl border border-warn/25 bg-warn/[0.05] p-5">
            <StatusChip tone="progress">Engineering status</StatusChip>
            <p className="mt-3 text-[13px] leading-relaxed text-ink-dim">
              Detection is verified against the reference path. Uniform coverage across every
              action-execution path is still in progress.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
