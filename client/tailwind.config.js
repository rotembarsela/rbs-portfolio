/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B1215",
      },
      backgroundImage: {
        "brand-logo": "url('/src/assets/logo.png')",
      },
    },
  },
  plugins: [],
};
