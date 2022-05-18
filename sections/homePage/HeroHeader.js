import React from 'react';
import Image from 'next/image';

const HeroHeader = () => (
  <div className='flex m-2 pl-5'>
    <Image 
      className='rounded-full'
      height={200}
      width={200}
      alt='hip marmot'
      src={'/marmothipster.jpg'}
    />
    <div className='block'>
      <div className="font-bold text-7xl text-primary pl-10"> Marmot Movies</div>
      <div className='text-light pl-10'>{"See what's streaming now"}</div>
    </div>
  </div>
)

export default HeroHeader;


