import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieCarousel = ({ genre, movies }) => {
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
      <div className='font-sans text-primary text-left col-span-1 text-3xl font-extrabold '>{genre}</div>
      {/* <div className='col-span-10 flex flex-nowrap overflow-x-scroll scroll-smooth container mx-auto flex items-center'> */}
      <div className='col-span-10 flex flex-nowrap overflow-x-scroll container mx-auto scrollbar-hide scrolling-touch items-start bg-primary rounded-md p-2'>
        {movies.map((movie, idx) => (
          <MovieCard
            key={`${idx} - ${movie.title}`}
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
            title={movie.title}
            imageUrl={movie.imageUrl}
            description={movie.description}
            service={movie.service}
            url={movie.url}
            />
            ))}
      </div>
    </div>
  )
}
export default MovieCarousel;
