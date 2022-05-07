import '../styles/globals.css'


import NavBar from '../sharedComponents/NavBar';

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar/>
    <Component {...pageProps} />
  </div>
  )


export default MyApp
