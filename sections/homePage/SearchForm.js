import React, { useState } from 'react';
import { GENRES, SHOW_TYPES } from '../../sharedComponents/enums';
import { movieSearch } from '../../sharedComponents/MarmotProvider/movieSearch';

const genreArr = Object.entries(GENRES);
genreArr.sort();
const showTypes = Object.entries(SHOW_TYPES);

const SearchForm = () => {
  const [ searchState, setSearchState ] = useState({});
  const [ type, setType ] = useState('');
  const [ movieTitle, setMovieTitle ] = useState('');
  const [ genre, setGenre ] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchState({
      type: type,
      movieTitle: movieTitle,
      genre: genre
    })
    movieSearch(searchState.movieTitle)
    e.target.reset()
  }
  
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSearchState({
      ...searchState,
      [name] : value
    })
  }

  return (
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
  )
}

export default SearchForm;
