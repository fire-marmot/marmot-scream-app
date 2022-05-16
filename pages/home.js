import React, { useState, useEffect } from 'react';
import MainGreeting from '../sections/homePage/mainGreeting';
import MovieCarousel from '../sections/homePage/movieCarousel';
import SearchForm from '../sections/homePage/SearchForm';
import { GENRES, STREAMING_SERVICE } from '../sharedComponents/enums';

import { useMarmotContext } from '../sharedComponents/MarmotProvider/marmotProvider';


export default function Home(props) {
  const movieData = useMarmotContext();
  const [ movieServices, setMoviesServices ] = useState({});
  
  // user data in context
  const { auth, updateLiked, updateWatched } = movieData;
  const { user, likedList, watchList } = auth;


  // Like / watch events modify context state
  const addWatched = (movieID) => {
    updateWatched.add(movieID);
  }

  const removeWatched = (movieID) => {
    updateWatched.remove(movieID)
  }

  const addLiked = (movieID) => {
    updateLiked.add(movieID)
  }
  
  const removeLiked = (movieID) => {
    updateLiked.remove(movieID)
  }

  const handleLike = ( movieID ) => {
    console.log('like')
    const prev = likedList;
    const index = prev.indexOf(movieID)
    if (likedList.includes(movieID)) {
      removeLiked(movieID);
    } else {
      addLiked(movieID);
    }
    console.log('liked', likedList)
  }

  const handleWatch = ( movieID ) => {
    const prev = watchList;
    console.log(prev)
    const index = prev.indexOf(movieID)
    if (watchList.includes(movieID)) {
      removeWatched(movieID);
    } else {
      addWatched(movieID);
    }
    console.log('watch:', watchList)
  }

//  const movies = movieSearch();

  useEffect(() => {
    if (movieData?.movieDB) {
      const prev = movieServices;

      movieData.movieDB.forEach((movie) => {
        const service = movie.streaming_service
        if (!prev[service]) {
          prev[service] = [movie];
        } else {
          prev[service].push(movie);
        }
        setMoviesServices(prev);
      })
    }
  })

  const movieArr = Object.entries(movieServices);
  const hasData = !!(movieArr?.length > 0);
  return (

      <main className="text-center m-5 pt-5" id='main-content'>
        <MainGreeting/>
        <SearchForm/>

      {hasData && (movieArr.map((i, idx) => (
        <MovieCarousel
          key={idx + 555}
          likedMovies={likedList}
          watchList={watchList}
          genre={i[0]} 
          movies={i[1]} 
          handleLike={handleLike}
          handleWatch={handleWatch}
        />
        ))
      )}

      </main>
  )
}
