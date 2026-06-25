import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: "#070707",
        ink: "#0d0d0d",
        graphite: "#141414",
        gold: "#c9a44d",
        champagne: "#f5d67c",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(201, 164, 77, .22)",
        card: "0 24px 120px rgba(0,0,0,.62)",
        gold: "0 18px 80px rgba(201,164,77,.26)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #f5d67c 0%, #c9a44d 45%, #8a6a23 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,.12), rgba(255,255,255,.035))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(0,-18px,0) rotate(2deg)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 2.4s ease-in-out infinite",
        orbit: "orbit 16s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
