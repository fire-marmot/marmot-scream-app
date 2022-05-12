module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./sharedComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light:'#fffedd', 
        primary:'#76262b', 
        secondary:'#e9af61', 
        dark:'#523642', 
        darkest:'#37252d'
      },
      height: {
        cardCarousel: '350px'
      },
      width: {
        movieCard: '250px'
      }
    },
  },
  plugins: [],
}
