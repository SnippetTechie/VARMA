const STACK = [
  "Chrome Manifest V3",
  "React + TypeScript",
  "FastAPI",
  "WebSocket",
  "vLLM",
  "Self-hosted GPU",
  "Gemini API (fallback)",
  "Supabase",
];

export function TechStack() {
  return (
    <section className="border-y border-border/70 py-10">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {STACK.map((s) => (
            <span key={s} className="font-mono text-[11.5px] text-ink-faint">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
