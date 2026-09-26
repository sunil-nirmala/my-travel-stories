/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        earth: {
          DEFAULT: "#14120f",
          soft: "#1c1a15",
          raised: "#26221b",
        },
        sand: {
          DEFAULT: "#f2ece1",
          dim: "#d9d0bf",
        },
        clay: "#a89a83",
        amber: {
          DEFAULT: "#c9a35a",
          soft: "#dcbd85",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Work Sans'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
