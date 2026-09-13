"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Content is real DOM from the first paint — the animation only ever
 * subtracts from a resting, fully-visible state, it never risks leaving
 * something stuck invisible.
 *
 * gsap.from() + ScrollTrigger alone has a sharp edge: if the element is
 * already past its trigger line the moment ScrollTrigger measures it (a
 * direct hash-link landing straight on a section, or anything already
 * above the fold on load), ScrollTrigger's initial refresh treats that as
 * "already left" rather than "entering," toggleActions' onLeave is "none",
 * and gsap.from()'s immediately-applied opacity:0 start state then never
 * gets animated back — the section stays invisible forever. So visibility
 * is decided ourselves first (already in view vs. genuinely below the
 * fold), and ScrollTrigger is only ever used for the second case.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        // Deliberately subtler than the Hero's own entrance — that's the
        // one bold, orchestrated moment on the page; every other section
        // just needs to settle into place without repeating the same
        // effect loudly enough to read as copy-pasted.
        const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight * 1.05;
        const tween = { opacity: 0, y: 12 };
        const to = { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: delay / 1000 };

        if (alreadyVisible) {
          gsap.fromTo(el, tween, to);
        } else {
          gsap.fromTo(el, tween, {
            ...to,
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          });
        }
      }, el);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
