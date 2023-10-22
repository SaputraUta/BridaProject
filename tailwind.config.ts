import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        co: "#F2884B",
        cr: "#59220E",
      },
      textColor: {
        to: "#F2884B",
        tr: "#59220E",
      },
      borderColor: {
        bo: "#F2884B",
        br: "#59220E",
      }
    },
  },
  plugins: [],
};

export default config;
