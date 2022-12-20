/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray7b: "#7b8084",
        dark28: "#282828",
        purple8a: "#8a2be2",
        purple85: "#8556b1",
        theme: "#f97892",
        "theme-opacity-color": "rgba(249, 120, 146, 0)",
        pinkfa: "#fa869d",
        pinkfba1: "#fba1b3",
        pinkfbae: "#fbaebe",
        pinkfdd: "#fdd7de",
        whitefe: "#fef2f4",
        brownbd: "#bd7c89",
        gray52: "#525666"
      },
      backgroundImage: {
        "gradient-pink": "linear-gradient(to right, #f97892, #fbaebe, #fbaebe, #f97892)",
        "gradient-purple": "linear-gradient(to right,#8a2be2 0%,#b980ee 51%,#8a2be2 100%)"
      }
    }
  },
  plugins: [require("@tailwindcss/line-clamp")]
};
