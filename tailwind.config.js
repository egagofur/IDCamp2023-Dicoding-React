/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C2121",
        secondary: "#3C3C43",
        yellowCustom: "#F7CE45",
        grayCustom: "#8E8E92",
        background: "#F2F2F6",
        blueLight: "#4E94F8",
      },
      fontFamily: {
        nuito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
