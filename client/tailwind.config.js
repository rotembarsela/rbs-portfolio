/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
      },
      colors: {
        obsidian: "#0B1215",
      },
    },
  },
  plugins: [],
};
