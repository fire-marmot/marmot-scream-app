import React, { useState, useEffect, useContext } from 'react';
import { useMovieResource } from './useMovieResource';

const MovieContext = React.createContext();
const UpdateMovieContext = React.createContext();

const WatchedContext = React.createContext();
const UpdateWatchedContext = React.createContext();

const LikedContext = React.createContext();
const UpdateLikedContext = React.createContext();

const defaultMovieState = {
  userId: 42,
  userName: 'Frank the movie fan',
  liked: [1,2,3,4,5],
  watched: [3,33,333,3333],
  preferredGenre: [4,44,444, 'adult']
}

// USER Movie State
export const useMovieDB = () => {
  return useContext(MovieContext);
}

export const useUpdateMovieDB = () => {
  return useContext(UpdateMovieContext);
}

// Watched List
export const useWatchedContext = () => {
  return useContext(WatchedContext);
}
export const useUpdateWatchedContext = () => {
  return useContext(UpdateWatchedContext);
}

// Liked List
export const useLikedContext = () => {
  return useContext(LikedContext);
}
export const useUpdateLikedContext = () => {
  return useContext(UpdateLikedContext);
}

const MarmotProvider = ({ children }) => {
  const [ isLoggedIn, setLoggedIn ] = useState();
  const { resources } = useMovieResource();
  const [ movieDB, setMovieDB ] = useState(defaultMovieState);
  
  const [ userWatched, setUserWatched ] = useState([]);
  const [ userLiked, setUserLiked ] = useState([]);


  const updateMovieDB = (data) => {
    const update = Object.entries(data);
    const prev = movieDB;

    update.forEach((i) => {
      const key = i[0];
      const value = i[1];
      if (prev[key]) {
        prev[key] = value;
      }
    })
    setMovieDB(prev);
  }

  // Add watched
  const updateWatched = {
    add: (movieID) => {
      const prev = userWatched;
      prev.push(movieID)
      setUserLiked(prev)
      console.log('watched:', userWatched)
    },
    remove:(movieID) => {
      const prev = userWatched;
      const index = userWatched.indexOf(movieID)
      if (index > -1) {
        prev.splice(index, 1)
      }
      console.log('watched: ', userWatched)
      setUserWatched(prev)
    }
  };

  // update Liked
  const updateLiked = {
    add: (movieID) => {
      const prev = userLiked;
      prev.push(movieID)
      setUserLiked(prev)
      console.log('liked:', userLiked)
    },
    remove:(movieID) => {
      const prev = userLiked;
      const index = userLiked.indexOf(movieID)
      if (index > -1) {
        prev.splice(index, 1)
      }
      console.log('liked:', userLiked)
      setUserLiked(prev)
    }
  };

  // add liked
  // remove liked
  // add update user preferences

  // add review 
  // edit review 
  // delete review 
  

  return (
    <MovieContext.Provider value={movieDB}>
      <UpdateMovieContext.Provider value={updateMovieDB}>
        <WatchedContext.Provider value={userWatched}>
          <UpdateWatchedContext.Provider value={updateWatched}>
            <LikedContext.Provider value={userLiked}>
              <UpdateLikedContext.Provider value={updateLiked}>
                {children}
              </UpdateLikedContext.Provider>
            </LikedContext.Provider>
          </UpdateWatchedContext.Provider>
        </WatchedContext.Provider>
      </UpdateMovieContext.Provider>
    </MovieContext.Provider>
  )
}



export default MarmotProvider;
