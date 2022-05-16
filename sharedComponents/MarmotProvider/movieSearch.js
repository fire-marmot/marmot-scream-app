import axios from 'axios';

export const movieSearch = () => {
/// Calls MovieDB gets movie info based off of title *** Need to pass in title from search bar
    async function searchMovies(){
        const api_key = `4fbb40b6b07053ca3f41d2aaeb2a352b`
        const STREAMING_API_URL=`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=AXL&page=1`
        try{
        const response = await axios.get(STREAMING_API_URL)
        const data = response.data
        const search_data = data.results
        const id = search_data[0].id
        searchStream(id)
        console.log(search_data)
        return search_data
        }
        catch (err) {
            console.log(err);
            return null;
          }
        }

/// Get streaming service
        async function searchStream(id){
            const api_key = `4fbb40b6b07053ca3f41d2aaeb2a352b`
            const STREAMING_API_URL=`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${api_key}`
            try{
            const response = await axios.get(STREAMING_API_URL)
            const data = response.data
            const search_data = data.results
            console.log(search_data.US.flatrate[0].provider_name)
            const stream_serv = search_data.US.flatrate[0].provider_name
            return stream_serv
            }
            catch (err) {
                console.log(err);
                return null;
              }
            }




    searchMovies();
}