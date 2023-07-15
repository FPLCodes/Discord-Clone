/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        deepblue: "#0000EE",
        brand: "#5865F2",
        background: "#404EED",
        notQuiteBlack: "#23272A",
      },
      maxWidth: {
        "7xl": "1260px",
      },
      padding: {
        32: "120px",
      },
    },
    fontFamily: {
      headline: ["var(--font-ginto)", "Noto Sans", "Helvetica Neue"],
      primary: ["var(--font-ggSans)", "Noto Sans", "Helvetica Neue"],
    },
  },
  plugins: [],
};
