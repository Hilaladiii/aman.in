import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "72": [
          "72px",
          {
            lineHeight: "90px",
            letterSpacing: "-1.44px",
          },
        ],
        "60": [
          "60px",
          {
            lineHeight: "72px",
            letterSpacing: "-1.2px",
          },
        ],
        "48": [
          "48px",
          {
            lineHeight: "60px",
            letterSpacing: "-0.96px",
          },
        ],
        "36": [
          "36px",
          {
            lineHeight: "44px",
            letterSpacing: "-0.72px",
          },
        ],
        "30": [
          "30px",
          {
            lineHeight: "38px",
          },
        ],
        "24": [
          "24px",
          {
            lineHeight: "32px",
          },
        ],
        "20": [
          "20px",
          {
            lineHeight: "30px",
          },
        ],
        "18": [
          "18px",
          {
            lineHeight: "28px",
          },
        ],
        "16": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "14": [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
        "12": [
          "12px",
          {
            lineHeight: "18px",
          },
        ],
      },
      colors: {
        primary50: "#E8F0FF",
        primary100: "#B8D2FF",
        primary200: "#96BCFF",
        primary300: "#669DFF",
        primary400: "#498AFF",
        primary500: "#1B6DFF",
        primary600: "#1963E8",
        primary700: "#134DB5",
        primary800: "#0F3C8C",
        primary900: "#0B2E6B",

        secondary500: "#FF3B1B",

        neutral100: "#D0D3D9",
        neutral200: "#B9BDC7",
        neutral300: "#989FAD",
        neutral500: "#667085",
        neutral600: "#5D6679",
        neutral700: "#48505E",
        neutral800: "#383E49",
        neutral900: "#2B2F38",

        tertiary100: "#FFE6B8",
        tertiary500: "#FFAD1B",

        error100: "#FFC0B8",
        error500: "#FF341A",

        info100: "#C2B8FF",
        info500: "#3B1BFF",

        success100: "#B8FFC2",
        success500: "#1BFF3B",

        baseblack: "#272727",
        basebackground: "#FAFAFA",
      },
      boxShadow: {
        header: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        footer: "0px -1px 2px 0px rgba(16, 24, 40, 0.05)",
        card: "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "5rem",
        },
        center: true,
      },
      borderSpacing: {
        wide: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
