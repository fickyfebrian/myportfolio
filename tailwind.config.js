/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      navy: "#111F4D",
      white: "#F2F4F7",
      orange: "#E43A19",
      black: "#020205",
      green: "#347928",
      blue: "#006BFF",
      blue2: "#08C2FF",
      yellow: "#F3C623",
      indigo: "#7E60BF",
      mora: {
        pink: "#F875AA",
        lightPink: "#FFDFDF",
        veryLightPink: "#FFF6F6",
        lightBlue: "#AEDEFC",
      },
    },

    extend: {},
  },
  plugins: [],
};
