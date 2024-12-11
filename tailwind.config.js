/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#F1F4F5",
      },
      fontFamily: {
        clash: ["'Clash Display'"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
