import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/Primitives";

const FLOW = [
  { step: "Extension sees", detail: "Active tab's DOM, on demand" },
  { step: "Backend receives", detail: "Tagged state, over WebSocket" },
  { step: "Sent to inference", detail: "One prompt per step" },
  { step: "Comes back", detail: "One action, approval-gated" },
  { step: "Stored", detail: "Task logs, per account" },
  { step: "Secured", detail: "Google OAuth, over HTTPS/WSS" },
];

const NOT_CLAIMED = [
  "100% private",
  "zero data leaves your device",
  "military-grade security",
  "zero logging",
  "fully anonymous",
];

export function SecuritySection() {
  return (
    <section id="security" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading title="Privacy isn't an afterthought." />

        <Reveal delay={120} className="mt-14">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
            {FLOW.map((item, i) => (
              <div key={item.step} className="relative flex flex-col gap-1.5 bg-surface p-4">
                <span className="font-mono text-[10px] text-accent-dim">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-[12.5px] font-bold leading-tight text-ink">{item.step}</h3>
                <p className="text-[11px] leading-snug text-ink-faint">{item.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={220} className="mx-auto mt-8 max-w-5xl">
          <div className="rounded-2xl border border-border bg-raised/60 p-5">
            <div className="flex flex-wrap gap-2">
              {NOT_CLAIMED.map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-border bg-surface px-2.5 py-1 text-[12px] text-ink-dim line-through decoration-bad/60"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-ink-faint">
              We describe the mechanism instead of reaching for these.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
