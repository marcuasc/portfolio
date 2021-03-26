module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        middleGrey: "#8B8982",
        charcoal: "#373F47",
        blueGray:"#6C91C2",
        whiteB:"#FFFFFA",
        midnightG: "#084C61",
        seaweed: "#177e89",
        whiteC:"#D6FFF6",
      },
      fontFamily:{
        title: ['Montserrat', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}
