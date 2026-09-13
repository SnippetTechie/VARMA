import { Reveal } from "./ui/Reveal";

const FEATURES = [
  {
    icon: (
      <path d="M9 12l2 2 4-4M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7l7-4z" />
    ),
    title: "PII detection",
    desc: "Regex + a multilingual NER model catch IDs, cards, tokens, coordinates.",
  },
  {
    icon: <path d="M4 7h16M4 12h10M4 17h6" />,
    title: "Privacy protection",
    desc: "Values become semantic tags — the model sees a field exists, never its contents.",
  },
  {
    icon: <path d="M3 12h4l2-7 4 14 2-7h6" />,
    title: "Agentic browsing",
    desc: "Real clicks, typing, and navigation — gated behind human approval.",
  },
  {
    icon: <path d="M4 4h16v6H4zM4 14h10v6H4zM17 14h3v6h-3z" />,
    title: "Self-hosted intelligence",
    desc: "Self-hosted vLLM, with a cloud fallback that's always reported, never silent.",
  },
];

export function FeatureGrid() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="glow-border group h-full rounded-lg border border-border bg-surface p-5 transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_16px_40px_-24px_rgba(79,139,255,0.5)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-raised text-accent-bright">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {f.icon}
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-[14.5px] font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-[12.8px] leading-relaxed text-ink-dim">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
