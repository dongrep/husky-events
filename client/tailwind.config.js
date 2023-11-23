/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#3818D9",
        primaryLight: "#F7F5FF",
        secondaryRed: "#BA1717",
        secondaryYellow: "#E9C400",
        secondaryGreen: "#03781D",
        secondaryBlue: "#006FD5",
        secondaryRedLight: "#F9F2F2",
        secondaryYellowLight: "#FCFAF1",
        secondaryGreenLight: "#F0F9F2",
        secondaryBlueLight: "#F0F8FF",
      },
    },
  },
  plugins: [],
};
