"use client";

import { useEffect, useRef, useState } from "react";

const FOCUS_RING = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-bright";

/**
 * Ambient showcase video, not a play-to-watch clip: it starts itself the
 * moment it's mostly in view (muted+loop, so autoplay is actually allowed)
 * and stops when scrolled away, the way product videos behave on Stripe/
 * Linear-style sites — no click-to-play gate. prefers-reduced-motion gets
 * the poster frame held static instead of autoplay.
 *
 * The controls themselves are always visible at low opacity, not hidden
 * until hover — a hover-only reveal is unreachable on touch devices, which
 * is exactly what most people watching this on a phone are using.
 */
export function VideoFrame({
  src,
  poster,
  label,
}: {
  src: string;
  poster?: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void el.play().catch(() => {
            /* browser blocked autoplay — the poster stays visible instead */
          });
        } else if (!el.paused) {
          el.pause();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reducedMotion]);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_40px_100px_-30px_rgba(0,0,0,0.75)]">
      <div className="pointer-events-none absolute -inset-px z-10 rounded-2xl bg-gradient-to-b from-accent/15 via-transparent to-transparent opacity-60" />
      {/* Periodic light sweep — the one bold, continuous motion on the page */}
      <div className="light-sweep pointer-events-none absolute inset-0 z-10" aria-hidden="true" />

      <div className="relative aspect-video w-full bg-black">
        <video
          ref={ref}
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          aria-label={label}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          {...(reducedMotion ? { autoPlay: false } : {})}
        />

        <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              const el = ref.current;
              if (!el) return;
              if (el.paused) void el.play().catch(() => {});
              else el.pause();
            }}
            aria-label={playing ? "Pause video" : "Play video"}
            className={`flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white/85 backdrop-blur-sm transition-colors hover:text-white ${FOCUS_RING}`}
          >
            {playing ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 5h4v14H7zm6 0h4v14h-4z" />
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute video" : "Mute video"}
            className={`flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white/85 backdrop-blur-sm transition-colors hover:text-white ${FOCUS_RING}`}
          >
            {muted ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4 9v6h4l5 5V4L8 9H4zm11.5 3a3.5 3.5 0 00-1.5-2.9v5.8a3.5 3.5 0 001.5-2.9z" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4 9v6h4l5 5V4L8 9H4zm11.5 3a3.5 3.5 0 00-1.5-2.9v5.8a3.5 3.5 0 001.5-2.9zM16 5v1.6a5.5 5.5 0 010 10.8V19a7 7 0 000-14z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
