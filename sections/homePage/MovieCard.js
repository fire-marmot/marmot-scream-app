import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon, EyeImage } from '../../sharedComponents/Icons';
import { useMarmotContext } from '../../sharedComponents/MarmotProvider/marmotProvider';
import { STREAMING_SERVICE } from '../../sharedComponents/enums';


const MovieCardImage = ({ imageUrl, url }) => (
    <a href={url} rel='noReferrer' target='_blank'>
      <Image
        className="border rounded"
        alt='movie pic'
        src={imageUrl}
        height={200}
        width={200}
        />
      </a>
)

const MovieCardTitle = ({ title }) => (
  <div className='text-white text-m max-w-lg mx-auto h-12'>
    {title}
  </div>
)

const MovieCardDescription = ({ description }) => (
  <div className='bg-light h-[90px] text-sm overflow-hidden overflow-y-scroll scrollbar-hide m-1' >
    <p className='m-1 p-1'>
      {description}
    </p>
  </div>
)

const MovieCard = ({ movieID, title, description, service, url, imageUrl, onMouseDown, onMouseUp, handleLike, handleWatch }) => {
  
  
  const [ heart, setHeart ] = useState(false);
  const [ eye, setEye ] = useState(false);

  const { auth, updateLiked, updateWatched } = useMarmotContext();
  const { likedList, watchList } = auth;

  
  useEffect(() => {
    const isLiked = !!(likedList.includes(movieID) ? true : false);
    const onWatchList = !!(watchList.includes(movieID) ? true : false);
    if (isLiked) {
      setHeart(true)
    }
    if (!isLiked) {
      setHeart(false)
    }
    if (onWatchList) {
      setEye(true)
    }
    if (!onWatchList) {
      setEye(false)
    }
  },[])

  return (
    <div 
      className='bg-black rounded-md w-movieCard text-sm min-w-[200px] m-2 p-1 hover:scale-105' 
    >
      <MovieCardImage imageUrl={imageUrl} url={url} />
      <MovieCardTitle title={title} />
      <MovieCardDescription description={description} />
      <div className='text-secondary'>Streaming On: {service}</div>
      <div className='flex justify-between m-1'>
      <HeartIcon handleLike={handleLike} heart={heart} setHeart={setHeart} movieID={movieID}/>
      <EyeImage handleWatch={handleWatch}  eye={eye} setEye={setEye} movieID={movieID}/>
      </div>
    </div>
  )
}

export default MovieCard;
