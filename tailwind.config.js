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
        redff4: "#ff4545",
        dark4d: "#4d5168",
        dark33: "#333333",
        gray88: "#888888"
      },
      backgroundImage: {
        "gradient-pink": "linear-gradient(to right, #f97892, #fbaebe, #fbaebe, #f97892)",
        "gradient-purple": "linear-gradient(to right,#8a2be2 0%,#b980ee 51%,#8a2be2 100%)"
      }
    }
  },
  plugins: [require("@tailwindcss/line-clamp")]
};
