import React from 'react';
import Image from 'next/image';

const HeroHeader = () => (
  <div className='flex pl-5 mb-8 ml-10'>
    <Image 
      className='rounded-full'
      height={200}
      width={200}
      alt='hip marmot'
      src={'/marmothipster.jpg'}
    />
    <div className='justify-center block pl-20'>
      <div className="pt-4 pl-20 mt-10 font-bold text-7xl text-primary"> Marmot Movies</div>
      <div className='pl-10 text-light'>{"See what's streaming now"}</div>
    </div>
  </div>
)

export default HeroHeader;


