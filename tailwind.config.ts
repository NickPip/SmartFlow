import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        // primary: "#1A202C",
      },
      animation: {
        typing: "typing 2.5s steps(13) forwards, blink 1s step-end infinite",
        "spin-slow": "spin 8s linear infinite",
        "slide-slow": "slide 20s linear infinite",
        "slide-slower": "slide 30s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "180px" },
        },
        blink: {
          "50%": { "border-color": "transparent" },
        },
        slide: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-50px, -50px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
