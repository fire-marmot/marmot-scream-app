import React, { useState, useRef } from 'react';
import MovieCard from './MovieCard';

const MovieCarousel = ({ genre, movies, handleLike, likedMovies, handleWatch, watchList }) => {
  const hasMovies = !!(movies?.length > 0);
  
  if (!hasMovies) {
    return (
      <>
      <div className='font-sans text-primary text-left col-span-1 text-3xl font-extrabold'>{genre}</div>
      <div className='col-span-10 flex flex-nowrap overflow-x-scroll container mx-auto scrollbar-hide scrolling-touch items-start bg-primary rounded-md p-2'></div>
      <h3>no movies</h3>
      </>
    )
  }


  return (
    <div 
      className='grid grid-cols-4 h-cardCarousel drag-container cursor-grab overflow-auto'
      >
      <div className='font-sans text-primary text-left col-span-1 text-3xl font-extrabold uppercase'>{genre}</div>
      <div className='col-span-10 flex flex-nowrap overflow-x-scroll container mx-auto scrollbar-hide scrolling-touch items-start rounded-md p-2'>
        {movies.map((movie, idx) => (
          <MovieCard
            key={`${idx} - ${movie.title}`}
            movieID={movie.movieID}
            title={movie.title}
            imageUrl={movie.image_url}
            description={movie.description}
            service={movie.streaming_service}
            url={movie.streaming_url}
            handleLike={handleLike}
            handleWatch={handleWatch}
            likedMovies={likedMovies}
            watchList={watchList}
            />
            ))}
      </div>
    </div>
  )
}
export default MovieCarousel;
