/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#eeeeee",
          bgSoft: "white",
          text: "rgb(24, 24, 24)",
          textSoft: "rgb(147, 90, 227)",
          bgSecondary: "rgb(192, 159, 237)",
          inputBoxColor: "rgb(245, 240, 250)",
        },
        dark: {
          bg: "#151c2c",
          bgSoft: "#182237",
          text: "white",
          textSoft: "#b7bac1",
          bgSecondary: "#2e374a",
          inputBoxColor: "#404b5b",
        },
      },
    },
  },
  plugins: [],
};
