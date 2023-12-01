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
      green: {
        50: "#30AF5B",
        90: "#292C27",
      },
      gray: {
        10: "#EEEEEE",
        20: "#A2A2A2",
        30: "#7B7B7B",
        50: "#585858",
        90: "#141414",
      },
      orange: {
        50: "#FF814C",
      },
      blue: {
        50: "#1c04f8",
        100: "#1d09cf",
        200: "#1c0da7",
        300: "#1a0e82",
        400: "#160d5e",
        500: "#0e093f",
        600: "#0b082a",
        700: "#070517",
        800: "#020106",
      },
      gradient: {
        100: "#4E54EA",
        200: "#0B0F60",
      },
      green: {
        50: "#68edf4",
        100: "#49e3eb",
        200: "#2dd7e0",
        300: "#25b8c0",
        400: "#1e999f",
        500: "#1f8186",
        600: "#1f6b6e",
        700: "#1e5659",
        800: "#1a4244",
        900: "#163031",
      },
      yellow: {
        50: "#FEC601",
      },
      fontfamily: {},
    },
  },
  plugins: [],
};
