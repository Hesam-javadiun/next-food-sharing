import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "var(--background-color)",
        "purple-light-color": "var(--purple-color-light)",
        "purple-color":'var(--purple-color)',
        "purple-deep-color":'var(--purple-color-deep)',
        "purple-deeper-color":'var--purple-color-deeper)',
        "purple-light-and-dark":'var(--purple-color-light-and-dark)',
        "inputs-background-colors":'var(--input-background-color)',
        "error-text-color":'var(--error-text-color)',
        "white-text-color":'var(--white-text-color)',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
};
export default config;
