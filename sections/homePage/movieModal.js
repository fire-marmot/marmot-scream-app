import React, { useState } from 'react';
import Image from 'next/image';
// import { HeartIcon, EyeImage } from '../../sharedComponents/Icons';

const MovieCardImage = ({ imageUrl, url }) => (
    <a href={url} rel='noReferrer' target='_blank'>
      <Image
        className="border rounded"
        alt='movie pic'
        src={imageUrl}
        height={250}
        width={220}
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


const Modal = ({ show, onClose, data }) => {

  
    const handleCloseClick = (e) => {
      e.preventDefault();
      onClose();
    };


  
 
  
    
    // useEffect(() => {
    //   const isLiked = !!(likedList.includes(data.movieID) ? true : false);
    //   const onWatchList = !!(watchList.includes(data.movieID) ? true : false);
    //   if (isLiked) {
    //     setHeart(true)
    //   }
    //   if (!isLiked) {
    //     setHeart(false)
    //   }
    //   if (onWatchList) {
    //     setEye(true)
    //   }
    //   if (!onWatchList) {
    //     setEye(false)
    //   }
    // },[])

  
    if (show){
    return (
        
        <div       className='bg-black rounded-md w-movieCard text-sm min-w-[200px] mx-auto my-4 hover:scale-105 ' >
            <a className=' text-white absolute top-0 right-0.5 'href="#" onClick={handleCloseClick}>
              x
            </a>
            

    
      <MovieCardImage imageUrl={data.image_url} url={data.streaming_url} /> 
      <MovieCardTitle title={data.title} />
      <MovieCardDescription description={data.description} />
      <div className='text-secondary'>Streaming On: {data.streaming_service}</div>
      <div className='flex justify-between m-1'>
      {/* <HeartIcon handleLike={handleLike} heart={heart} setHeart={setHeart} movieID={movieID}/> */}
      {/* <EyeImage handleWatch={handleWatch}  eye={eye} setEye={setEye} movieID={movieID}/> */}
      </div>
        </div>
    )}
  
  };
  
  
  export default Modal;