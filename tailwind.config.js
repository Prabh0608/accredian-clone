/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: "#2563EB",
        sky: "#38BDF8",
        navy: "#0B1221",
        mint: "#10B981",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      backgroundOpacity: {
        4: "0.04",
        6: "0.06",
        8: "0.08",
        15: "0.15",
      },
    },
  },
  plugins: [],
};
