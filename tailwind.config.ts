import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── TOKENIZED FONT FAMILIES ───────────────────────────────────────
      // Switch display font here: 'Instrument Serif', 'DM Serif Display', 'Cormorant Garamond'
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
      },

      // ─── FONT SIZES ────────────────────────────────────────────────────
      fontSize: {
        "display-xl": ["clamp(56px, 7vw, 96px)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-l":  ["clamp(40px, 5.5vw, 72px)", { lineHeight: "1.0",  letterSpacing: "-0.02em" }],
        "display-m":  ["clamp(32px, 4vw, 56px)",   { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-s":  ["clamp(28px, 3vw, 40px)",   { lineHeight: "1.1",  letterSpacing: "-0.01em" }],
        "body-xl":    ["22px", { lineHeight: "1.7" }],
        "body-l":     ["19px", { lineHeight: "1.7" }],
        "body-m":     ["17px", { lineHeight: "1.65" }],
        "body-s":     ["15px", { lineHeight: "1.55" }],
        "label":      ["12px", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        "caption":    ["14px", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        "mono-l":     ["16px", { lineHeight: "1.6" }],
        "mono-m":     ["14px", { lineHeight: "1.5" }],
        "mono-s":     ["12px", { lineHeight: "1.4" }],
      },

      // ─── COLOR TOKENS ──────────────────────────────────────────────────
      colors: {
        // Base system
        background:  "var(--color-background)",
        surface:     "var(--color-surface)",
        "surface-raised": "var(--color-surface-raised)",
        border:      "var(--color-border)",

        // Text hierarchy
        "text-primary":   "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-tertiary":  "var(--color-text-tertiary)",

        // Accent
        accent:       "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        focus:        "var(--color-focus)",

        // Between Feelings project palette
        bf: {
          bg:      "#0D0B14",
          glow:    "#6B4E8A",
          accent:  "#9B7FBF",
          surface: "#1A1525",
          text:    "#E8E0F0",
          border:  "#2D2540",
        },

        // Pulse of Motion project palette
        pm: {
          bg:      "#F0F5FA",
          accent:  "#3D7AB5",
          surface: "#E8F0F8",
        },

        // Accident Insight Beam project palette
        ai: {
          bg:      "#0A0A0A",
          accent:  "#C8382A",
          secondary: "#D4862A",
          safe:    "#2D7A4A",
        },

        // Moonpath Keeper project palette
        mk: {
          bg:      "#0A1628",
          accent:  "#C4A84A",
          secondary: "#4A7FA0",
        },

        // Semantic
        success: "#2D7A4A",
        warning: "#B07820",
        error:   "#8A2020",
        info:    "#2B5FA0",
      },

      // ─── SPACING SCALE ─────────────────────────────────────────────────
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "section-mobile": "3rem",
        "section-tablet": "5rem",
        "section-desktop": "6rem",
      },

      // ─── MAX WIDTHS ────────────────────────────────────────────────────
      maxWidth: {
        "content": "1280px",
        "prose":   "680px",
        "narrow":  "520px",
      },

      // ─── BORDER RADIUS ─────────────────────────────────────────────────
      borderRadius: {
        "tag":  "4px",
        "card": "12px",
        "code": "8px",
      },

      // ─── BOX SHADOWS ───────────────────────────────────────────────────
      boxShadow: {
        "card":       "0 8px 32px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.08)",
        "code":       "0 4px 16px rgba(0, 0, 0, 0.12)",
        "focus":      "0 0 0 2px var(--color-focus)",
      },

      // ─── ANIMATIONS ────────────────────────────────────────────────────
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "out":    "cubic-bezier(0.0, 0.0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0.0, 0.6, 1)",
      },

      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
        "500": "500ms",
        "600": "600ms",
      },

      // ─── KEYFRAMES ─────────────────────────────────────────────────────
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "nav-line": {
          "0%":   { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },

      animation: {
        "marquee":  "marquee 40s linear infinite",
        "fade-up":  "fade-up 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "fade-in":  "fade-in 0.5s ease forwards",
        "nav-line": "nav-line 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
