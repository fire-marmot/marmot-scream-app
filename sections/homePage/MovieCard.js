import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MovieCardImage = ({ imageUrl, url }) => (
  <Link href={url}>
    <a>
      <Image
        className="border rounded"
        alt='movie pic'
        src={imageUrl}
        height={125}
        width={125}
        />
      </a>
  </Link>
)

const MovieCardTitle = ({ title }) => (
  <div className='text-white text-xl max-w-lg mx-auto '>
    {title}
  </div>
)

const MovieCardDescription = ({ description }) => (
  <div className='bg-light h-[90px] text-sm overflow-hidden overflow-y-scroll '>
    <p className='m-1 p-1'>
      {description}
    </p>
  </div>
)

const MovieCard = ({ title, description, service, url, imageUrl }) => (
  // w-movieCard removed
  <div className='bg-black rounded-md w-movieCard text-sm max-h-[700px] min-w-[300px] m-2 p-2  '>
    <MovieCardImage imageUrl={imageUrl} url={url} />
    <MovieCardTitle title={title} />
    <MovieCardDescription description={description} />
    <div className='text-secondary'>Streaming On: {service}</div>
  </div>
)

export default MovieCard;

