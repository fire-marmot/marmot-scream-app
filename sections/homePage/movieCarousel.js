import React from 'react';
import MovieCard from './MovieCard';


const MovieCarousel = ({ genre, movies }) => {
  return (
    <div className='grid grid-cols-4 h-cardCarousel'>
      <div className='font-sans text-primary text-left col-span-1 text-3xl font-extrabold '>{genre}</div>
      {/* <div className='col-span-10 flex flex-nowrap overflow-x-scroll scroll-smooth container mx-auto flex items-center'> */}
      <div className='col-span-10 flex flex-nowrap overflow-x-scroll scroll-smooth container mx-auto'>
        {movies.map((movie, idx) => (
          <MovieCard
          key={`${idx} - ${movie.title}`}
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



// const MovieList2 = ({ number }) => {
//   const movies = [];
//   for (let i = 0; i<number; i++) {
//     movies.push(<MovieCard
//       title={'Sample Movie Card2'}
//       imageUrl={'https://www.badmovies.org/capsules/1/2headshark/2headshark2.jpg'}
//       description={'While the young adults are exploring the atoll, and sometimes each other, the shark takes every opportunity to eat them.'}
//       service={'Netflix'}
//       url={'https://www.badmovies.org/capsules/1/2headshark/'}
//       />)
//   }
//   return movies;
// }

// const MovieCarouselSample = ({ genre, data }) => {
//   return (
//     <div className='grid grid-cols-10'>
//       <div className='col-span-1'>{genre}</div>
//       <div className='col-span-10 flex flex-nowrap overflow-x-auto scroll-smooth'>
//         <MovieList2 number={20} />
//       </div>
//     </div>
//   )
// }