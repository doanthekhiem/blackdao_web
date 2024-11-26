import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        glitch:
          "glitch 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite",
        "image-glitch":
          "image-glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glitch: {
          "0%": {
            transform: "translate(0)",
            textShadow: "-2px -2px #ff0000, 2px 2px #00ff00",
          },
          "25%": {
            transform: "translate(-2px, 2px)",
            textShadow: "2px -2px #ff0000, -2px 2px #00ff00",
          },
          "50%": {
            transform: "translate(2px, -2px)",
            textShadow: "-2px 2px #ff0000, 2px -2px #00ff00",
          },
          "75%": {
            transform: "translate(-2px, -2px)",
            textShadow: "2px 2px #ff0000, -2px -2px #00ff00",
          },
          "100%": {
            transform: "translate(0)",
            textShadow: "-2px -2px #ff0000, 2px 2px #00ff00",
          },
        },
        "image-glitch": {
          "0%": {
            transform: "translate(0)",
            filter: "hue-rotate(0deg)",
          },
          "25%": {
            transform: "translate(-5px, 5px)",
            filter: "hue-rotate(90deg) saturate(150%)",
          },
          "50%": {
            transform: "translate(5px, -5px)",
            filter: "hue-rotate(180deg) contrast(200%)",
          },
          "75%": {
            transform: "translate(-5px, -5px)",
            filter: "hue-rotate(270deg) saturate(150%)",
          },
          "100%": {
            transform: "translate(0)",
            filter: "hue-rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
