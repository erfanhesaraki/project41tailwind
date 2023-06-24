/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/img/1.jpg')",
      },
      colors: {
        oneColor: "#4c4c4c",
        twoColor: "#e29c89",
        threeColor: "#222222",
        fourColor: "#f9f8f8",
        fiveColor: "#a3a3a3",
      },
      width: {
        w1: "400px",
      },
      height: {
        h1: "400px",
      },
    },
  },
  plugins: [],
};
