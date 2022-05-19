import React, { useState, useRef } from 'react';
import MovieCard from './MovieCard';

const MovieCarousel = ({ genre, movies, handleLike, likedMovies, handleWatch, watchList}) => {
  const hasMovies = !!(movies?.length > 0);
  
  if (!hasMovies) {
    return (
      <>
      <div className='col-span-1 font-sans text-3xl font-extrabold text-left text-primary'>{genre}</div>
      <div className='container flex items-start col-span-10 p-2 mx-auto overflow-x-scroll scrolling-touch rounded-md flex-nowrap scrollbar-hide bg-primary'></div>
      <h3>no movies</h3>
      </>
    )
  }

  return (

    <div 
      className='grid grid-cols-4 overflow-auto h-cardCarousel drag-container cursor-grab'
      >
      <div className='col-span-1 font-sans text-3xl font-extrabold text-left uppercase text-primary'>{genre}</div>
      <div className='container flex items-start col-span-10 p-2 mx-auto overflow-x-scroll scrolling-touch rounded-md flex-nowrap scrollbar-hide'>

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
