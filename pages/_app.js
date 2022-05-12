import '../styles/globals.css'
import Head from 'next/head';


import NavBar from '../sharedComponents/NavBar';

const MyApp = ({ Component, pageProps }) => (
  <div>
      <Head>
        <title>Marmot Movies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <NavBar/>
    <Component {...pageProps} />
  </div>
  )


export default MyApp
