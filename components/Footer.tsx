import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-12">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <Image src="/img/logo.png" alt="" width={20} height={20} className="h-5 w-auto" />
            <span className="font-display text-[14px] font-bold text-ink">V.A.R.M.A</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink-dim">
            <a href="#product" className="rounded hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-bright">Product</a>
            <a href="#how-it-works" className="rounded hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-bright">How it works</a>
            <a href="#demo" className="rounded hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-bright">Demo</a>
            <a href="#security" className="rounded hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-bright">Security</a>
            <a
              href="https://github.com/SnippetTechie/Agent"
              target="_blank"
              rel="noreferrer"
              className="rounded hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-bright"
            >
              GitHub
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-border/70 pt-6 text-[12px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} V.A.R.M.A. Privacy layer for the agentic web.</span>
          <span>Built for Smart India Hackathon 2026, problem statement SIH26171</span>
        </div>
      </div>
    </footer>
  );
}
