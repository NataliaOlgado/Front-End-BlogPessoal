/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
      colors: {
        rosanuvem:"#ba737e",
        rosapink:"#c47b87",
        rosaescuro:"#bfb1c8",
        Azulmarinho:"c47b87",
        Azulmarinhoclaro:"c47b87",
        purpur:"#a1a1d1",
        purpleescuro:"#5d436e",
        purpleazul: "#9499e8",
        borgonha:"#4c0519",
        rosalaranja:"#eb6579",
        laranja:"#f6ad56",
        marromavermelhado:"#944648",
        vermelhorosa:"#9c335c",
        ocre:"#9c335c",
        borgonhaescuro:"#732e3e",
        vinho:"#5c2c32",
        marromclaro:"#744434",
     },

  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
}