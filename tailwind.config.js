/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      gray: {
        100: "#eeeeee",
        200: "#333333",
        300: "#dddddd",
        400: "#222222",
      },
      red: {
        100: "#ff4444",
      },
    },
    fontFamily: {
      lobster: ["Lobster"],
    },
    extend: {},
    plugins: [],
  },
};
