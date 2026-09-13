import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/Primitives";

const STAGES = [
  { label: "Browser", detail: "Raw page content" },
  { label: "V.A.R.M.A", detail: "Reads the DOM", accent: true },
  { label: "PII detection", detail: "Regex + field heuristics" },
  { label: "Protection", detail: "Semantic tags replace values" },
  { label: "Agent", detail: "Reasons over the tagged state" },
];

export function SolutionSection() {
  return (
    <section className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            title="Put a privacy layer between your data and the agent."
            lede="Sensitive values are swapped for semantic tags before any page content reaches a reasoning model."
          />
        </Reveal>

        <Reveal delay={140} className="mt-16">
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-border bg-surface p-6 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-0">
              {STAGES.map((s, i) => (
                <div key={s.label} className="flex flex-1 flex-col items-center sm:flex-row">
                  <div
                    className={`flex w-full flex-col items-center gap-1 rounded-xl border px-3 py-5 text-center ${
                      s.accent ? "border-accent/40 bg-accent/[0.08]" : "border-border bg-raised"
                    }`}
                  >
                    <span className={`font-display text-[13px] font-bold ${s.accent ? "text-accent-bright" : "text-ink"}`}>
                      {s.label}
                    </span>
                    <span className="text-[11px] text-ink-faint">{s.detail}</span>
                  </div>
                  {i < STAGES.length - 1 && (
                    <div className="relative h-8 w-full shrink-0 sm:h-auto sm:w-10">
                      <svg
                        className="absolute left-1/2 top-0 h-8 w-4 -translate-x-1/2 text-ink-faint sm:top-1/2 sm:h-4 sm:w-10 sm:-translate-y-1/2 sm:translate-x-0"
                        viewBox="0 0 40 16"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <line
                          x1="2"
                          y1="8"
                          x2="38"
                          y2="8"
                          stroke="url(#flow-grad)"
                          strokeWidth="2"
                          strokeDasharray="4 5"
                          className="animate-flow"
                        />
                        <defs>
                          <linearGradient id="flow-grad" x1="0" x2="1">
                            <stop offset="0%" stopColor="#4f8bff" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#4f8bff" stopOpacity="1" />
                            <stop offset="100%" stopColor="#8b7cf6" stopOpacity="0.2" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
