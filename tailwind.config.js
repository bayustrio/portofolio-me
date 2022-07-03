/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{tsx,ts,js,jsx}",
    "./components/**/*.{tsx,ts,jsx,js}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      backgroundColor: {
        // light
        yellowLight: "#F0E6DA",
        yellowNav: "#F4ECE5",
        yellowCard: "#F5F0E8",
        // dark
        bgDark: "#202122",
        blackLight: "#313134",
      },
    },
  },
  plugins: [],
};
