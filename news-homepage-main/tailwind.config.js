/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
      },
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
      colors: {
        'Very-dark-blue': 'hsl(240, 100%, 5%)',
        'Soft-red': ' hsl(5, 85%, 63%)',
        'Soft-orange': 'hsl(35, 77%, 62%)',
        'Off-white': ' hsl(36, 100%, 99%)',
       'Grayish-blue': 'hsl(233, 8%, 79%)',
       'Dark-grayish-blue':' hsl(236, 13%, 42%)'
 
       }
    },
  },
  plugins: [],
};
