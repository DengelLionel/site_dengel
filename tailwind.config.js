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
        
        "whiteTransparent":"rgba(255,255,255,.9)",
        "gray1":"#8E8E8E"

      },
      fontFamily:{
        "Poppins":["sans-serif"],
        "Roboto":["sans-serif"],
      },
      
    },
  },
  plugins: [],
}
