import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      // screens: {
      //   sm: "576px",
      //   md: "768px",
      //   lg: "992px",
      //   xl: "1200px",
      //   "2xl": "1400px",
      // },
    },
    extend: {
      screens: {
        laptop: {
          raw: "(max-height: 800px)",
        },
      },
      fontFamily: {
        arial: ["var(--font-arial)"],
      },
    },
  },
  plugins: [],
};
export default config;
