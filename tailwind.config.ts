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
        "spin-slow": "spin 8s linear infinite",
        typing: "typing 2.5s steps(13) forwards, blink 1s step-end infinite",
        hover: "hover 3s ease-in-out infinite",
        twinkle: "twinkle 2s ease-in-out infinite",
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
        hover: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
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
