import { useState, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import jwt from 'jsonwebtoken';

export const apiUrl = 'http://3.91.192.92:8000/api/token/';
export const defUrl = 'http://3.91.192.92:8000/api/marmot/';
export const user = 'admin1';
export const pass = 'admin1';

export const useMovieResource = () => {
  const sessionData = useSession();
  const user = sessionData?.data?.user;
  const authTokens = sessionData?.data?.accessToken;
  
  const [ tokens, setTokens ] = useState('');
  const [ userName, setUserName ] = useState('');
  const { data, error, mutate } = useSWR([MARMOT_API_URL, tokens], fetchResource);

  const config = {
      username: 'admin1',
      password: 'admin1'
  }

  const fetchResource = async () => {
    try {
      const response = await axios.post(apiUrl, {
          username: 'admin1',
          password: 'admin1'
        }
      );
      const decodedAccess = jwt.decode(response.data.access);
      const token = response.data.access;
      console.log(token);
      getMovies(token);
      return decodedAccess;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  
  return ({
    resources: data,
    error,
  })

///Gets default movies from db
  async function getMovies(token) {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    try{
      const response = await axios.get(defUrl, config);
      console.log(response.data)
      default_movies = response.data
      return default_movies
    }
    catch (err) {
      console.log(err);
      return null;
    }
  }
 
}