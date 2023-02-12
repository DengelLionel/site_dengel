/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        "buttoncolor":"#F5BB19",
        "primary":"#300F9A",
        "secundary":"#3918A4",
        "textPrimary":"#BDC3FE",
        "textPrimary2":"#BDC3FD",
        "textHover":"#fafafa",
        "whiteTransparent":"rgba(255,255,255,.9)",
        "whiteTransparent2":"rgba(155, 164, 231, 0.5)",
        "gray1":"#8E8E8E",
        "whiteTransparent3":"rgba(15, 14, 71, 0.3)",
        "yellow1":"#F5BB19",
        "blue1":"#000814",
        "blue2":"#0F0E47",
        "border1":"#5B59D3",
        "secundary2":"#1F1E44",
        "secundary3":"#212048",
        "white2":"#E6E6E6"
      },
      boxShadow:{
        "shadow1":" 0px 4px 4px rgba(1, 1, 55, 0.2) ",
      },
      fontFamily:{
        "Rowdies":["Rowdies","sans-serif"],
        "SegoeUI":["sans-serif"],
      },
      
    },
  },
  plugins: [],
}
