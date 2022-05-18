import React from 'react';
import Image from 'next/image';

const MainGreeting = () => (
  <>
    <div className='flex justify-center m-5'>
      <Image
        src='/marmothipster.jpg'
        alt='marmothipster'
        width={200}
        height={200}
        className='rounded-full'
      />

      <h1 className="p-3 ml-10 font-bold text-center text-7xl text-primary"> Marmot Movies</h1>
      
    </div>
  </>
)

export default MainGreeting;
