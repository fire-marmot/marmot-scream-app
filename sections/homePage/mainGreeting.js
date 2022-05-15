import React from 'react';
import Image from 'next/image';

const MainGreeting = () => (
  <>
    <Image
      src='/public/marmothipster.jpg'
      alt='marmothipster'
      width={100}
      height={100}
    />

    <h1 className="p-3 font-bold text-center text-7xl text-primary"> Marmot Movies</h1>
  </>
)

export default MainGreeting;
