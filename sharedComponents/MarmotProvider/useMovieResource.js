// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import useSWR from 'swr';
// import jwt from 'jsonwebtoken';

// export const apiUrl = 'http://3.91.192.92:8000/api/token/';
// export const defUrl = 'http://3.91.192.92:8000/api/marmot/';
// export const user = 'admin1';
// export const pass = 'admin1';
// const MARMOT_API_URL='http://localhost:8000/api/marmot/'
// const MARMOT_API_LOGIN_URL='http://localhost:8000/api/token/'


// ///Gets default movies from db
// async function getMovies(token) {
//   const config = {
//     headers: { Authorization: `Bearer ${token}` }
//   };
//   try{
//     const response = await axios.get(defUrl, config);
//     const default_movies = response.data
//     return default_movies
//   }
//   catch (err) {
//     console.log(err);
//     return null;
//   }
// }

// export const useMovieResource = () => {
//   const fetchResource = async () => {
//     try {
//       const response = await axios.post(apiUrl, {
//         username: 'admin1',
//         password: 'admin1'
//       }
//       );
//       // const decodedAccess = jwt.decode(response.data.access);
//       const token = response.data.access;
//       const data = await getMovies(token);
//       return data;
//     } catch (err) {
//       console.log(err);
//       return null;
//     }
//   }
  
//   const { data, error, mutate } = useSWR([MARMOT_API_URL], fetchResource);
//   return ({
//     resources: data,
//     error,
//   })
// }
