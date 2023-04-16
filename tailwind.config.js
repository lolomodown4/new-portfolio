/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-rgba": "rgba(255, 255, 255, 0.85)",
        "black-rgba": "rgba(0, 0, 0, 0.8)",
        /* pede burahin to */
        tealGradient: "#FFFCFF",
        greenGradient: "#D5FEFD",
      },
    },
  },
  plugins: [],
};
