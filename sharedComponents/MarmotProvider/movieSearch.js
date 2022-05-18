import axios from 'axios';
import { useMovieResource } from '../MarmotProvider/useMovieResource'


export const apiUrl = 'http://3.91.192.92:8000/api/token/';
export const defUrl = 'http://3.91.192.92:8000/api/marmot/';
export const user = 'admin1';
export const pass = 'admin1';


const postMovie = async(info) =>{
    try {
            const tokenid =  await axios.post(apiUrl, {
                username: 'admin1',
                password: 'admin1'
              }
            );
            // const decodedAccess = jwt.decode(response.data.access);
    const token = tokenid.data.access;

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    await axios.post(defUrl, info, config);
    }
    catch (err) {
    console.log(err);
    return null;
    }
} 

export const movieSearch = async (title) => {
        console.log('movieSearch', title)
/// Calls MovieDB gets movie info based off of title *** Need to pass in title from search bar
        const api_key = `4fbb40b6b07053ca3f41d2aaeb2a352b`
        
        const STREAMING_API_URL=`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${title}&page=1`
        try{
        const response = await axios.get(STREAMING_API_URL)
        const data = response.data
        const search_data = data.results
        const id = search_data[0].id
        const SERVICE_API_URL=`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${api_key}`
        const stream = await axios.get(SERVICE_API_URL)
        const streamData = stream.data
        const serviceData = streamData.results
        const stream_serv = serviceData.US.flatrate[0].provider_name
        const title_parse = search_data[0].original_title.split(' ').join('')
        console.log(title_parse)
        let streamURL = ""
        if(stream_serv = 'Netlfix'){streamURL= `https://www.netflix.com/search?q=${title_parse}`}
        else if(stream_serv ='HBO' ){streamURL = `https://www.hbomax.com/${title_parse}`}
        else if(stream_serv ='Hulu'){streamURL = `https://www.hulu.com/${title_parse}`}
        else if(stream_serv = 'Amazon Prime Video'){streamURL = `https://www.amazon.com/${title_parse}`}
        else {streamURL = `https://www.disneyplus.com`};
            // `https://www.netflix.com/search?q=${search_data[0].original_title}`
        
        const movieInfo = {
            title: search_data[0].original_title,
            movieID: search_data[0].id,
            streaming_service: stream_serv,
            average_rating: parseInt(search_data[0].vote_average),
            streaming_url: streamURL,
            image_url: `https://www.themoviedb.org/t/p/original${search_data[0].poster_path}`,
            description: search_data[0].overview,
            genre: search_data[0].genre_ids[0]
        }
        
        postMovie(movieInfo)
        return search_data
        }
        catch (err) {
            console.log(err);
            return null;
          }
}
