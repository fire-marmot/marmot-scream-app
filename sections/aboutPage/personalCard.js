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
  <div className='text-center p-2'>
    {cardHeader}
  </div>
)

const PersonalCard = ({ cardHeader, text, imgSrc }) => (
  <div className="bg-darkest border-width-2 text-light rounded p-5 m-3 w-1/2">
      <div className='flex'>
        <div className='p-2'>
          <PersonalCardHeader cardHeader={cardHeader} />
          <PersonalCardImage src={imgSrc}/>
        </div>
        <div className='text-light text-center rounded p-2 pl-10'>{text}</div>
      </div>
  </div>
);

export default PersonalCard;
