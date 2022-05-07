import Head from 'next/head'

import MainGreeting from '../sections/homePage/mainGreeting';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center m-5 pt-5" id='main-content'>
        <MainGreeting/>
      </main>

    </div>
  )
}
