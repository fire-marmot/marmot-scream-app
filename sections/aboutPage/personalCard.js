import React from 'react';
import Image from 'next/image';

const PersonalCardImage = ({ src }) => (
  <div>
    <Image 
      src={src}
      alt='Developer Face'
      height={200}
      width={200}
      />
  </div>
)

const PersonalCardHeader = ({ cardHeader }) => (
  <div className='text-center'>
    {cardHeader}
  </div>
)

const PersonalCard = ({ cardHeader, text, imgSrc }) => (
  <div className="bg-dark border-width-2 text-light rounded w-96 p-5 m-3">
    <PersonalCardHeader cardHeader={cardHeader} />
    <PersonalCardImage src={imgSrc}/>
    <div>{text}</div>
  </div>
);

export default PersonalCard;
