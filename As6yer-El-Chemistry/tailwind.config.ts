import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 24px rgba(34, 211, 238, 0.25), 0 0 64px rgba(168, 85, 247, 0.18)"
      },
      colors: {
        neonCyan: "#22d3ee",
        neonViolet: "#a855f7",
        ink: "#060813",
        glass: "rgba(255,255,255,0.06)"
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial", "Apple Color Emoji", "Segoe UI Emoji"]
      }
    }
  },
  plugins: []
} satisfies Config;
