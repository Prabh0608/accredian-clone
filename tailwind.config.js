/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        universal: "#1A73E8",
        paleBlack: "#374151",
      },
      fontFamily: {
        circular: ["Circular Std", "Circular", "Poppins", "sans-serif"],
      },
      screens: {
        xs: "480px",
        laptop: { min: "1024px", max: "1279px" },
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
