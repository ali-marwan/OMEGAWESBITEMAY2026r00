import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem", xl: "2.5rem" },
      screens: { "2xl": "1320px" }
    },
    extend: {
      colors: {
        omega: {
          orange: "#F36B21",
          "orange-soft": "#FCE4D4",
          black: "#161616",
          charcoal: "#222222",
          grey: "#5F5A55",
          "warm-grey": "#8A8178",
          offwhite: "#F7F4EF",
          cream: "#FBFAF7",
          sand: "#DED5C8",
          border: "#E9E1D7"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"]
      },
      letterSpacing: {
        eyebrow: "0.18em"
      },
      maxWidth: {
        "8xl": "88rem"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(22,22,22,0.04), 0 4px 24px rgba(22,22,22,0.04)",
        elevated: "0 12px 48px rgba(22,22,22,0.08)"
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(94,90,85,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(94,90,85,0.06) 1px, transparent 1px)",
        "noise":
          "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)"
      },
      backgroundSize: {
        "grid-32": "32px 32px",
        "noise-3": "3px 3px"
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.6s ease-out both",
        "marquee": "marquee 40s linear infinite"
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
