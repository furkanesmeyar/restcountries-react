/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        "dark" : "#25283d",
        "dark-data" : "#303030",
        "dark-second" : "#575353"
      }
    },
  },
  plugins: [],
}
