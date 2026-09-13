import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05060b",
        surface: "#0b0e17",
        raised: "#10141f",
        "raised-2": "#151a28",
        border: {
          DEFAULT: "rgba(158,170,204,0.12)",
          strong: "rgba(158,170,204,0.22)",
        },
        ink: {
          DEFAULT: "#eef1f8",
          dim: "#98a2bc",
          faint: "#5b6480",
        },
        accent: {
          DEFAULT: "#4f8bff",
          dim: "#2c5cc9",
          bright: "#7db0ff",
        },
        violet: {
          DEFAULT: "#8b7cf6",
          dim: "#6455c4",
        },
        ok: "#34d399",
        warn: "#f2b035",
        bad: "#f0645e",
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "1180px",
        prose: "660px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(5,6,11,1)), radial-gradient(ellipse 80% 50% at 50% -10%, rgba(79,139,255,0.18), transparent)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-dot": {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        "dash-flow": {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        flow: "dash-flow 1.1s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
