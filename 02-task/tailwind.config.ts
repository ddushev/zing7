import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "2xl": "1400px",
      },
      colors: {
        primary: "#150050",
        secondary: "#787878",
        zinc: {
          100: "#F4F4F4",
        },
        yellow: {
          400: "#FFE377",
        },
      },
    },
  },
  plugins: [],
};
export default config;
