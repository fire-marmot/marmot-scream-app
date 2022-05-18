// import React, { useState, useEffect } from 'react';
// import { useMarmotContext } from '../sharedComponents/MarmotProvider/marmotProvider';
// import MovieCarouselUserPage from '../sections/userPage/MovieCarouselUserPage';

// const UserPage = () => {
//   const marmotProvider = useMarmotContext();
//   const { auth, movieDB, updateLiked, updateWatched} = marmotProvider;
//   const { user, likedList, watchList } = auth;

//   const [ watchMoviesState, setWatchMovieState ] = useState([]);
//   const [ likedMoviesState, setLikeMovieState ] = useState([]);

//   const handleLike = (movieID) => {
//     const prev = likedMoviesState;
//     if (likedMoviesState.includes(movieID)) {
//       const index = prev.indexOf(movieID)
//       prev.splice(index, 1)
//       setLikeMovieState(prev)
//     } else {
//       setLikeMovieState([...prev, movieID]);
//     }
//   }
  
//   const handleWatch = (movieID) => {
//     const prev = watchMoviesState;
//     if (watchMoviesState.includes(movieID)) {
//       const index = prev.indexOf(movieID)
//       prev.splice(index, 1);
//       setWatchMovieState(prev);
//     } else {
//       setWatchMovieState([...prev, movieID]);
//     }
//   }

//   useEffect(() => {
//     const watchMovies = movieDB?.filter((i) => watchList.includes(i.movieID));
//     setWatchMovieState(watchMovies);
    
//     const likedMovies = movieDB?.filter((i) => likedList.includes(i.movieID));
//     setLikeMovieState(likedMovies);
//   },[])


//   const hasLikes = !!(likedList?.length > 0);
//   const hasWatched = !!(watchList?.length > 0);

//   return (
//     <>
//     {hasWatched
//       ? <MovieCarouselUserPage
//           genre={`Your Watch List`}
//           movies={watchMoviesState}
//           handleLike={handleLike}
//           handleWatch={handleWatch}
//           likedMovies={likedMoviesState}
//           />
//       : (
//           <>
//           <div className='font-sans text-primary text-left col-span-1 text-3xl font-extrabold uppercase'>{'Your Watch List'}</div>
//           <p className='text-light text-left h-96'>Poke some eyes to save for later</p>
//           </>
//         )
//       }

//       {hasLikes
//         ? <MovieCarouselUserPage
//             genre={`${user}'s Liked Movies`}
//             movies={likedMoviesState}
//             watchList={watchMoviesState}
//             handleWatch={handleWatch}
//             handleLike={handleLike}
//           />
//         : (
//         <>
//           <div className='font-sans text-primary text-left col-span-1 text-3xl font-extrabold uppercase'>{'Liked Movies'}</div>
//           <p className='text-light text-left h-96'>Go heart some movies to like the crap out of them</p>
//         </>
//         )
//       }

//     </>
//   )
// }

// export default UserPage;
