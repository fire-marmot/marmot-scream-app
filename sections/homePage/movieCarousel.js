import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieCarousel = ({ genre, movies, handleLike }) => {
  const [ mouseX, setMouseX ] = useState();
  const [ mouseY, setMouseY ] = useState();
  
  const mouseDown = (e) => {
    setMouseX(e.pageX)
    setMouseY(e.pageY)
    const card = e.target.parentElement
    card.scroll(mouseX, mouseY);
  }
  
  const mouseUp = (e) => {
    const card = e.target.parentElement
    // card.scroll(mouseX, mouseY);
  }
  
  return (
    <div className='grid grid-cols-4 h-cardCarousel'>
      <div className='col-span-1 font-sans text-3xl font-extrabold text-left text-primary '>{genre}</div>
      {/* <div className='container flex items-center col-span-10 mx-auto overflow-x-scroll flex-nowrap scroll-smooth'> */}
      <div className='container flex items-start col-span-10 p-2 mx-auto overflow-x-scroll scrolling-touch rounded-md flex-nowrap scrollbar-hide bg-primary'>
        {movies.map((movie, idx) => (
          <MovieCard
            key={`${idx} - ${movie.title}`}
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
            movieID={movie.movieID}
            title={movie.title}
            imageUrl={movie.imageUrl}
            description={movie.description}
            service={movie.service}
            url={movie.url}
            handleLike={handleLike}
            />
            ))}
      </div>
    </div>
  )
}
export default MovieCarousel;
