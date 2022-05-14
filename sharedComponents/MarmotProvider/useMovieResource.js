import axios from 'axios';
import useSWR from 'swr';

export const apiUrl = 'https://api.chucknorris.io/jokes/random';


const mockData = '../../data/sample-streaming-getMoviesByService.json';


export const useMovieResource = () => {
  
  const fetchResource = async (url) => {
    try {
      const response = await axios.get(url);
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