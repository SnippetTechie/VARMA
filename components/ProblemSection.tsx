import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/Primitives";

const FIELDS = [
  { label: "Full name", value: "Aarav Sharma" },
  { label: "Email", value: "aarav.sharma@mail.com" },
  { label: "Phone", value: "+91 98xxx xx210" },
  { label: "Address", value: "MG Road, Bengaluru" },
  { label: "Aadhaar / PAN", value: "XXXX XXXX 3021" },
  { label: "Bank account", value: "0091 xxxx xxxx 55" },
];

export function ProblemSection() {
  return (
    <section id="product" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            title={
              <>
                Your browser was built for you.
                <br />
                Now AI agents can act inside it.
              </>
            }
            lede="An agent doing your task can encounter far more than it needs to."
          />
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="ml-3 font-mono text-[11px] text-ink-faint">your-portal.gov.in/profile</span>
            </div>
            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
              {FIELDS.map((f) => (
                <div key={f.label} className="bg-surface px-5 py-4">
                  <div className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">{f.label}</div>
                  <div className="mt-1 text-[13.5px] text-ink-dim">{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={220} className="mx-auto mt-14 max-w-xl text-center">
          <p className="text-balance text-lg font-semibold text-ink">
            What should an AI agent be allowed to see?
          </p>
        </Reveal>
      </div>
    </section>
  );
}
