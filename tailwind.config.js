// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      screens: {
        "5xl": "2000px"
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};