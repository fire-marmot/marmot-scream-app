import React, { useState } from 'react';
import { GENRES, SHOW_TYPES } from '../../sharedComponents/enums';

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
    console.log(searchState)
    e.target.parentElement.reset()
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
    <form onSubmit={handleSubmit}>
      <h3>Movie Search</h3>

      <label htmlFor='type'>Type</label>
        <select onChange={handleChange} name='type'>
          {showTypes.map((i, idx) => (
            <option key={idx + i[0]} value={i[0]}>{i[1]}</option>
          ))}
        </select>

      <label>Genre</label>
        <select onChange={handleChange} name='genre'>
          {genreArr.map((i, idx) => (
            <option key={idx + i[0]} value={i[0]}>{i[1]}</option>
          ))}
        </select>
      
      <label>Movie Title</label>
        <input
          type='text'
          name='movieTitle'
          placeholder='search by title'
          onChange={handleChange}
        />

      <button type='submit' onClick={handleSubmit}>Search</button>
    </form>
  )
}

export default SearchForm;
