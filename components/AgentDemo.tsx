import { Reveal } from "./ui/Reveal";
import { VideoFrame } from "./ui/VideoFrame";

export function AgentDemo() {
  return (
    <section id="demo" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold leading-[1.15] text-ink sm:text-[2.5rem]">
            Agents that can actually act.
          </h2>
          <p className="mt-4 text-balance text-[15px] leading-relaxed text-ink-dim">
            A real recording — V.A.R.M.A. driving a live government portal, not a mockup.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12">
          <VideoFrame
            src="/video/agentic-demo.mp4"
            poster="/img/agentic-poster.jpg"
            label="V.A.R.M.A operating the ISRO website end to end"
          />
          <p className="mt-3 text-center font-mono text-[11px] text-ink-faint">
            Recorded live on isro.gov.in, approval gate visible before each action
          </p>
        </Reveal>
      </div>
    </section>
  );
}
