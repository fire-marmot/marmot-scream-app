import axios from 'axios';
import useSWR from 'swr';

export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL;
export const user = process.env.NEXT_PUBLIC_USERNAME;
export const pass = process.env.NEXT_PUBLIC_PASSWORD;


export const useMovieResource = () => {
  
  const fetchResource = async () => {
    try {
      const response = await axios.get(apiUrl, {},{
        auth:{
          username: 'admin1',
          password: 'admin1',
        }
      });
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