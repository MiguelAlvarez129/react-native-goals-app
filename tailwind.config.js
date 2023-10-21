/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2F7F2",
        secondary: "#125E8A",
        accent: "#DB6C79"
      },
    },
  },
  plugins: [],
}

