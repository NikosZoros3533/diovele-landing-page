/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bordo':'#5e2824'
      },
      keyframes:{
        fadeInLeft:{
          '0%': { opacity: 0, transform: 'translateX(-100%)'},
          '100%': { opacity: 1, transform: 'translateX(0)'},
        },
        fadeInTop:{
          '0%': { opacity: 0, transform: 'translateY(-50%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation:{
        fadeInLeft: 'fadeInLeft 2s ease-out forwards',
        fadeInTop : 'fadeInTop 2s ease-out forwards', 
      },
    },
  },
  plugins: [],
}