import axios from 'axios';
import useSWR from 'swr';

export const apiUrl = 'http://localhost:8000/api/token/';
export const user = 'admin1';
export const pass = 'admin1';


export const useMovieResource = () => {
  
  const fetchResource = async () => {
    try {
      const response = await axios.post(apiUrl, {
          username: 'admin1',
          password: 'admin1'
        }
      );
  
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  
  const { data, error, mutate } = useSWR([apiUrl], fetchResource);
  return {
    resources: data,
    error,
  }
}