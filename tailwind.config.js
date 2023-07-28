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
    },
    colors: {
      primary: {
        0: "#fff",
        50: "#12813f13f",
        100: "#11c127127",
        200: "#10d111111",
        300: "#fdfdfd",
        400: "#ebebeb",
        500: "#d9d9d9",
        600: "#cbd1d1",
        700: "#bdcaca",
        800: "#adc4c4",
        900: "#9cc0c0",
        1000: "#8abcbc",
      },
      black: {
        50: "#6e4747",
        100: "#543c3c",
        200: "#3c3030",
        300: "#262222",
        400: "#121212",
        500: "#000000",
        600: "#-a-b-b",
        700: "#-13-18-18",
        800: "#-1b-25-25",
        900: "#-21-34-34",
        1000: "#-27-44-44",
      },
      fontfamily: {},
    },
  },
  plugins: [],
};
