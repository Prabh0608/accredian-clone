/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        universal: "#2563EB",
        paleBlack: "#374151",
      },
      fontFamily: {
        circular: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "480px",
        xxl: "1400px",
        "3xl": "1700px",
      },
      maxWidth: {
        "85rem": "85rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite",
      },
    },
  },
  plugins: [],
};
