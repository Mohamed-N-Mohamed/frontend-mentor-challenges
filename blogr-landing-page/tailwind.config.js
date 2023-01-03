/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background-gradient" : 'linear-gradient(120deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))'
      },
   
    },
  },
  plugins: [],
};
