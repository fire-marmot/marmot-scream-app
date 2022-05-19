import axios from 'axios';

export const apiUrl = 'http://3.91.192.92:8000/api/token/';
export const defUrl = 'http://3.91.192.92:8000/api/marmot/';
export const user = 'admin1';
export const pass = 'admin1';

const api_key = `4fbb40b6b07053ca3f41d2aaeb2a352b`

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

const getProviderNames = (arr) => {
    const flatRates = arr.filter((i) => i.flatrate?.length > 0)
    const flatRatesArr = flatRates.map((i) => i.flatrate[0].provider_name)
    // const providerSet = new Set(flatRatesArr);
    return flatRatesArr[0];
}

const getProvider = async(id) => {
    const SERVICE_API_URL=`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${api_key}`
    const stream = await axios.get(SERVICE_API_URL)
    const streamData = stream?.data?.results;
    const streamArr = Object.values(streamData);
    const providers = getProviderNames(streamArr);
    return providers;
}

/// Calls MovieDB gets movie info based off of title *** Need to pass in title from search bar
export const movieSearch = async (title) => {
    const STREAMING_API_URL=`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${title}&page=1`
    
    try {
        const response = await axios.get(STREAMING_API_URL)
        const rawMovieData = response?.data?.results[0];
        
        const { id, title, vote_average, poster_path, overview, original_title, genre_ids} = rawMovieData;

        const averageRating = parseInt(vote_average)
        const imageUrl = poster_path;
        const description = overview;
        const streamingService = await getProvider(id);

        const servicesMap = {
            'Amazon Prime Video' : 'prime',
            'Disney Plus' : 'disney',
            'HBO' : 'hbo',
            'Hulu' : 'hulu',
            'Netflix' : 'netflix',
        }

        const urlMapper = {
            netflix : `https://www.netflix.com/search?q=${title_parse}`,
            hbo : `https://www.hbomax.com/${title_parse}`,
            hulu: `https://www.hulu.com/${title_parse}`,
            prime: `https://www.amazon.com/${title_parse}`,
            disney: 'https://www.disneyplus.com',
        }

        const service = servicesMap[streamingService];
        const serviceUrl = urlMapper[service];

        const title_parse = original_title.split(' ').join('')

        const movieInfo = {
            title: title,
            movieID: id,
            streaming_service: service,
            average_rating: averageRating,
            streaming_url: serviceUrl,
            image_url: `https://www.themoviedb.org/t/p/original${imageUrl}`,
            description: description,
            genre: genre_ids[0]
        }
        console.log(movieInfo)
        
        postMovie(movieInfo)
        return movieInfo
        }
        catch (err) {
            console.log(err);
            return null;
          }
}
