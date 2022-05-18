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
        primary:'#6876b9', 
        secondary:'#c5db53', 
        dark:'#283b9b', 
        darkest:'#16130f',
        background: '#55515f'
      },
      height: {
        cardCarousel: '500px',
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
