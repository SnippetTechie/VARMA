import { Reveal } from "./ui/Reveal";
import { VideoFrame } from "./ui/VideoFrame";

const DETECTED = ["PERSON_NAME", "AADHAAR", "DOB"];

export function PrivacyDemo() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold leading-[1.15] text-ink sm:text-[2.5rem]">
            Intelligence doesn&apos;t require unrestricted access.
          </h2>
          <p className="mt-4 text-balance text-[15px] leading-relaxed text-ink-dim">
            Watch it detect and mask sensitive fields live, mid-task.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
          <VideoFrame
            src="/video/privacy-demo.mp4"
            poster="/img/privacy-poster.jpg"
            label="V.A.R.M.A detecting and masking PII live on a form"
          />

          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-border bg-surface p-4">
              <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                Sensitive information detected
              </span>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {DETECTED.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-bad/30 bg-bad/10 px-2 py-1 font-mono text-[10.5px] font-medium text-bad"
                  >
                    [{tag}]
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center py-1 text-ink-faint">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4v16m0 0l-5-5m5 5l5-5" />
              </svg>
            </div>
            <div className="rounded-xl border border-ok/25 bg-ok/[0.06] p-4">
              <span className="font-mono text-[10px] uppercase tracking-wide text-ok/80">
                Protected context
              </span>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-dim">
                Tagged placeholders replace every value the model doesn&apos;t need to see.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={220}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[12.5px] text-ink-faint">
            Also recognized: PAN, card numbers, tokens, GPS coordinates.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
