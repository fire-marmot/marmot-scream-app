import React, { useState, useEffect } from 'react';
import MainGreeting from '../sections/homePage/mainGreeting';
import MovieCarousel from '../sections/homePage/movieCarousel';
import SearchForm from '../sections/homePage/SearchForm';
import FilterForm from '../sections/homePage/FilterForm';
import { GENRES, GENRES_MAP, STREAMING_SERVICE } from '../sharedComponents/enums';

import { useMarmotContext } from '../sharedComponents/MarmotProvider/marmotProvider';


export default function Home(props) {
  const movieData = useMarmotContext();
  const [ movieServices, setMoviesServices ] = useState({});
  const [ filter, setFilter ] = useState([]);
  console.log(movieData)
  
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


  useEffect(() => {
    if (movieData?.movieDB) {
      const prev = movieServices;
      let filteredMovies = movieData.movieDB;
      console.log(movieData.movieDB.length);
      if (filter.length > 0) {
        filteredMovies = movieData.movieDB.filter((movie) => filter.includes(GENRES_MAP[movie.genre]));
      }
      console.log(filteredMovies.length)

      filteredMovies.forEach((movie) => {
        console.log(movie.genre)
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

  const movieArr = Object.entries(movieServices);
  const hasData = !!(movieArr?.length > 0);
  const hasUser = !!(user)

  return (

      <main className="text-center m-5 pt-5" id='main-content'>
        <MainGreeting/>
      
      <div>
        {hasUser && <FilterForm setFilter={setFilter}/>}
        <SearchForm/>
      </div>

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
