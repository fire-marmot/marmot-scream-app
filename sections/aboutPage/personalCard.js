import React from 'react';
import Image from 'next/image';

const PersonalCardImage = ({ src }) => (
  <div>
    <Image
      className='rounded-full'
      src={src}
      alt='Developer Face'
      height={100}
      width={100}
      />
  </div>
)

const PersonalCardHeader = ({ cardHeader }) => (
  <div className='p-2 text-center'>
    {cardHeader}
  </div>
)

const PersonalCard = ({ cardHeader, text, imgSrc }) => (
  <div className="w-1/2 p-5 m-3 rounded bg-darkest border-width-2 text-light">
      <div className='flex'>
        <div className='p-2'>
          <PersonalCardHeader cardHeader={cardHeader} />
          <PersonalCardImage src={imgSrc}/>
        </div>
        <div className='p-2 pl-10 text-center rounded text-light'>{text}</div>
      </div>
  </div>
);

export default PersonalCard;
