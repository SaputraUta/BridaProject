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
        signin: "url('/signinbackground.png')",
      },
      backgroundColor: {
        co: "#BF4F26",
        co2: "#F2884B",
        cr: "#59220E",
        monza: "#FEF2F3",
        krim: "#F3F1F1",
      },
      textColor: {
        to: "#DC6B33",
        tr: "#59220E",
      },
      borderColor: {
        bo: "#F2884B",
        br: "#59220E",
      },
    },
  },
  plugins: [],
};

export default config;
