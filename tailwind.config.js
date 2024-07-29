/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryText: "#FFF",
      secondaryText: "#C1BBBB",
      primaryBackground: "#010B13",
      secondaryBackground: "#1E2121",
      accent: "#FCE179",
    },
    extend: {},
  },
  plugins: [],
};
