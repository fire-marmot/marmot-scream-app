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
        light:'#ada593', 
        primary:'#283b9b', 
        secondary:'#c5db53', 
        dark:'#283b9b', 
        darkest:'#16130f'
      },
      height: {
        cardCarousel: '350px'
      },
      width: {
        movieCard: '250px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

// black     green     blue     red      yellow  gray
// #16130f, #c5db53, #283b9b, #e64936, #fde566, #ada593 
// colors: {
//   light:'#fffedd', 
//   primary:'#76262b', 
//   secondary:'#e9af61', 
//   dark:'#523642', 
//   darkest:'#37252d'
// },