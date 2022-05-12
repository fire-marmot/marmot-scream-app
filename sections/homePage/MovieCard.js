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
        height={250}
        width={250}
        />
      </a>
  </Link>
)

const MovieCardTitle = ({ title }) => (
  <div className='text-light text-lg max-w-xs'>
    {title}
  </div>
)

const MovieCardDescription = ({ description }) => (
  <div className='bg-light max-h-24'>
    <p className='m-2 p-2'>
      {description}
    </p>
  </div>
)


const MovieCard = ({ title, description, service, url, imageUrl }) => (
  <div className='bg-primary w-movieCard rounded-md m-1'>
    <MovieCardImage imageUrl={imageUrl} url={url} />
    <MovieCardTitle title={title} />
    <MovieCardDescription description={description} />
    <div className='text-light'>Streaming on {service}</div>
  </div>
)

export default MovieCard;
