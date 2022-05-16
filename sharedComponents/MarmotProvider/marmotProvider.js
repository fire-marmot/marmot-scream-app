import React, { useState, useEffect, useContext, createContext} from 'react';
import axios from 'axios';

const AuthContext = createContext();

const MARMOT_API_URL='http://localhost:8000/api/marmot/'
const MARMOT_API_LOGIN_URL='http://localhost:8000/api/token/'

const MarmotContext = React.createContext();

// Auth user/login/tokens
export const useAuthContext = () => {
  return useContext(AuthContext);
}

// User Movie State
export const useMarmotContext = () => {
  return useContext(MarmotContext);
}

const MarmotProvider = ({ children }) => {
  const [ isLoggedIn, setLoggedIn ] = useState();
  const [ movieDB, setMovieDB ] = useState();
  const [ userWatched, setUserWatched ] = useState([]);
  const [ userLiked, setUserLiked ] = useState([]);
  const [ user, setUser ] = useState('');
  const [ tokens, setTokens ] = useState();
  
  async function fetchMovies() {
    try {
      const response = await axios.get(MARMOT_API_URL, {
        headers: {
          'Authorization': 'Bearer ' + tokens 
        }
      });
      if (response.status === 200) {
        console.log(response.data);
        setMovieDB(response.data);
        return response.data;
      }
    } catch (err) {
      console.warn(err);
      return null;
    }
  }

  useEffect(() => {
    if (tokens) {
      fetchMovies()
    }
  },[tokens]);

  // Add watched
  const updateWatched = {
    add: (movieID) => {
      const prev = userWatched;
      prev.push(movieID)
      setUserLiked(prev)
    },
    remove:(movieID) => {
      const prev = userWatched;
      const index = userWatched.indexOf(movieID)
      if (index > -1) {
        prev.splice(index, 1)
      }
      setUserWatched(prev)
    }
  };

  // update Liked
  const updateLiked = {
    add: (movieID) => {
      const prev = userLiked;
      prev.push(movieID)
      setUserLiked(prev)
    },
    remove:(movieID) => {
      const prev = userLiked;
      const index = userLiked.indexOf(movieID)
      if (index > -1) {
        prev.splice(index, 1)
      }
      setUserLiked(prev)
    }
  };

  // AUTH
  const authUser = {
    user: user,
    likedList: userLiked,
    watchList: userWatched,
    login: async (inputName, password) => {
      console.log('logging in...')
      try {
        const response = await axios.post(MARMOT_API_LOGIN_URL, {
          username: 'admin1',
          password: 'admin1'
        })
        if (response.status === 200) {
          setUser(inputName);
          setTokens(response.data.access);
        }
      } catch(e) {
        console.log('axios error in auth')
        console.warn(e)
      }
    },
    logout: () => setUser('')
  }

  const movieProvider = {
    auth:authUser,
    movieDB: movieDB,
    updateLiked: updateLiked,
    updateWatched: updateWatched,
    update: (data) => {
      const update = Object.entries(data);
      const prev = movieDB;
  
      update.forEach((i) => {
        const key = i[0];
        const value = i[1];
        if (prev[key]) {
          prev[key] = value;
        }
      })
      setMovieDB(data);
   },
  
  }

  return (
    <AuthContext.Provider value={authUser}>
      <MarmotContext.Provider value={movieProvider}>
        {children}
      </MarmotContext.Provider>
    </AuthContext.Provider>
  )
}

export default MarmotProvider;
