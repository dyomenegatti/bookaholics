export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#63A6A4",
        text: "#11171B",
        background: "#EDEDED",

        accent: {
          1: "#E1ADBC",
          2: "#E5CC94",
        },

        support: "#85CCCF",
      },
    },
  },
  plugins: [],
};