/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#fbfbfb",
        "purple": "#3b46f1",
        "bg-grays": "#f7f7f7",
        "blacks": "#010101",
        "gray-text": "#6d6d6d",
        "gray-card": "#edecec"
      }
    },
  },
  plugins: [],
};
