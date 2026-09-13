import Link from "next/link";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent-bright/80">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-balance font-display text-3xl font-bold leading-[1.15] text-ink sm:text-[2.5rem]">
        {title}
      </h2>
      {lede && <p className="text-balance text-[15px] leading-relaxed text-ink-dim">{lede}</p>}
    </div>
  );
}

export function PrimaryButton({
  href,
  onClick,
  children,
  className = "",
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-accent-bright to-accent px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_8px_24px_-8px_rgba(79,139,255,0.6)] transition-all hover:brightness-110 hover:shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_10px_28px_-6px_rgba(79,139,255,0.75)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-bright ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function SecondaryButton({
  href,
  onClick,
  children,
  className = "",
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong bg-white/[0.02] px-5 py-2.5 text-[13.5px] font-semibold text-ink transition-all hover:border-ink-dim/40 hover:bg-white/[0.05] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-bright ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function StatusChip({
  tone,
  children,
}: {
  tone: "live" | "progress" | "gap";
  children: React.ReactNode;
}) {
  const map = {
    live: "text-ok bg-ok/10 before:bg-ok",
    progress: "text-warn bg-warn/10 before:bg-warn",
    gap: "text-bad bg-bad/10 before:bg-bad",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider before:h-1.5 before:w-1.5 before:rounded-full ${map[tone]}`}
    >
      {children}
    </span>
  );
}
