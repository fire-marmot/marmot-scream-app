import React, { useState, useEffect } from 'react';
import { useMarmotContext } from '../sharedComponents/MarmotProvider/marmotProvider';
import MovieCarouselUserPage from '../sections/userPage/MovieCarouselUserPage';

const UserPage = () => {
  const movieData = useMarmotContext();
  const [ movieServices, setMoviesServices ] = useState({});
  const [ filter, setFilter ] = useState([]);
  
  // user data in context
  const { auth, movieDB, updateLiked, updateWatched, update } = movieData;
  const { user, likedList, watchList } = auth;

  // Like / watch events modify context state
  const addWatched = (movieID) => {
    updateWatched.add(movieID);
  }

  const removeWatched = (movieID) => {
    updateWatched.remove(movieID)
  }

  const addLiked = (movieID) => {
    updateLiked.add(movieID);
  }
  
  const removeLiked = (movieID) => {
    updateLiked.remove(movieID);
  }

  const handleLike = ( movieID ) => {
    const prev = likedList;
    const index = prev.indexOf(movieID)
    if (likedList.includes(movieID)) {
      removeLiked(movieID);
    } else {
      addLiked(movieID);
    }
    update();
  }

  const handleWatch = ( movieID ) => {
    const prev = watchList;
    const index = prev.indexOf(movieID)
    if (watchList.includes(movieID)) {
      removeWatched(movieID);
    } else {
      addWatched(movieID);
    }
    update();
  }
  useEffect(() => {
    if (movieData?.movieDB) {
      const prev = movieServices;
      let filteredMovies = movieData.movieDB;
      if (filter.length > 0) {
        filteredMovies = movieData.movieDB.filter((movie) => filter.includes(GENRES_MAP[movie.genre]));
      }

      filteredMovies.forEach((movie) => {
          const service = movie.streaming_service.toLowerCase();
          if (!prev[service]) {
            prev[service] = [movie];
          } else {
            prev[service].push(movie);
          }
          setMoviesServices(prev);
      })
    }
  });
  
  const filteredLikes = movieDB?.filter((i) => likedList.includes(i.movieID));
  const filteredWatch = movieDB?.filter((i) => watchList.includes(i.movieID));

  const hasLikes = !!(likedList?.length > 0);
  const hasWatched =!!(watchList?.length > 0);

  return (
    <>
    {/* {hasWatched
      ? <MovieCarouselUserPage
          genre={`Your Watch List`}
          movies={filteredWatch}
          watchList={watchList}
          likedMovies={likedList}
          handleLike={handleLike}
          handleWatch={handleWatch}
          />
      : (
          <>
          <div className='font-sans text-primary text-left col-span-1 text-3xl font-extrabold uppercase'>{'Your Watch List'}</div>
          <p className='text-light text-left h-96'>Poke some hearts to save for later</p>
          </>
        )
      } */}

      {hasLikes
        ? <MovieCarouselUserPage
            genre={`${user}'s Saved Movies`}
            movies={filteredLikes}
            watchList={watchList}
            likedMovies={likedList}
            handleWatch={handleWatch}
            handleLike={handleLike}
          />
        : (
        <>
          <div className='font-sans text-primary text-left col-span-1 text-3xl font-extrabold uppercase'>{'Liked Movies'}</div>
          <p className='text-light text-left h-96'>Go heart some movies to like the crap out of them</p>
        </>
        )
      }
    </>
  )
}

export default UserPage;
