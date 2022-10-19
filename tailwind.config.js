/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // burtons: "Burtons",
        vcr: "vcr",
      },
    },
    minWidth: {
      "1/2": "50%",
      "1/4": "25%",
      "3/4": "75%",
    },
  },
  plugins: [],
};
