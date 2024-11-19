/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bordo: "#5A002C",
      },
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInTop: {
          "0%": { opacity: 0, transform: "translateY(-50%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        leFlyOutLeft:{
          '50%':{transform:"translate(40px 0px)"},
          '100%':{transform:"translate(-100px,0px)",opacity:"0"},
        },
      },
      animation: {
        fadeInLeftBack: "fadeInLeft 3s ease-out forwards",
        fadeInTop: "fadeInTop 1s ease-out forwards",
        fadeInRight: "fadeInRight 1s ease-out forwards",
        fadeInLeft: "fadeInLeft 1s ease-out forwards",
        leFlyOutLeft:"leFlyOutLeft 1s ease-in-out"
      },
    },
  },
  plugins: [],
};
