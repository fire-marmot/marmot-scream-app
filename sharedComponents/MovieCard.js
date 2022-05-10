import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MovieCardImage = ({ imageUrl, url }) => (
  <Link href={url}>
    <a>
      <Image
        className="border rounded m-5"
        alt='movie pic' 
        src={imageUrl} 
        height={200} 
        width={200}
        />
      </a>
  </Link>
)

const MovieCardDescription = ({ description }) => (
  <div className='bg-light border rounded p-2 m-3'>
    {description}
  </div>
)

const MovieCardTitle = ({ title }) => (
  <div className='text-light'>
    {title}
  </div>
)

const MovieCard = ({ title, description, service, url, imageUrl }) => (
  <div className='bg-primary w-96 rounded-md m-3'>
    <MovieCardTitle title={title} />
    <MovieCardImage imageUrl={imageUrl} url={url} />
    <MovieCardDescription description={description} />
    <div className='text-light'>Streaming on {service}</div>
  </div>
)

export default MovieCard;
