import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#13233B",
        gold: "#C99A42",
        cream: "#FBF8F1",
        teal: "#0C8C83",
        slate: "#586579"
      },
      boxShadow: {
        luxe: "0 24px 70px rgba(19,35,59,.12)"
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Manrope", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
