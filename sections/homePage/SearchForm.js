import React, { useState } from 'react';
import { GENRES, SHOW_TYPES } from '../../sharedComponents/enums';
import { movieSearch } from '../../sharedComponents/MarmotProvider/movieSearch';
import Modal  from '../homePage/movieModal'

const genreArr = Object.entries(GENRES);
genreArr.sort();
const showTypes = Object.entries(SHOW_TYPES);

const SearchForm = () => {
  const [ searchState, setSearchState ] = useState({});
  const [ type, setType ] = useState('');
  const [ movieTitle, setMovieTitle ] = useState('');
  const [ genre, setGenre ] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [movieData, setmovieData] = useState({});


  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchState({
      type: type,
      movieTitle: movieTitle,
      genre: genre
    })
    
    const movie = async () =>{
      const response = await movieSearch(searchState.movieTitle)
      .then(function(response) {setmovieData(response)})
      return response
    };
    movie();
    
    setTimeout(function(){setShowModal(true);},1000);
    e.target.reset()
  }
  console.log(movieData);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSearchState({
      ...searchState,
      [name] : value
    })
  }

  return (
    <div>
    <form onSubmit={handleSubmit} className='flex justify-center'>
      <div>
        <input
          className='w-96'
          type='text'
          name='movieTitle'
          placeholder='search by title...'
          onChange={handleChange}
          />
        </div>
      <div>
      <button 
        className='text-light bg-primary hover:bg-light hover:text-dark rounded  ml-4 w-24'
        type='submit'
        > 
          Search
        </button>
      </div>
    </form>
    <div>
    {movieData ? <Modal
    onClose={() => setShowModal(false)}
    show = {showModal}
    data = {movieData}>

    </Modal>:null}
    </div>
    </div>
  )
}

export default SearchForm;
