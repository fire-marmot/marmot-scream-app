import React, { useState } from 'react';
import { GENRES, SHOW_TYPES } from '../../sharedComponents/enums';

const genreArr = Object.entries(GENRES);
genreArr.sort();
const showTypes = Object.entries(SHOW_TYPES);

const SearchForm = () => {
  const [searchState, setSearchState] = useState({});
  const [type, setType] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [genre, setGenre] = useState('');

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
      [name]: value
    })
  }

  return (
    <>
    <h3 className='py-5 pl-20 text-2xl tracking-wide bg-rose-900'>Movie Search</h3>
    
    <form onSubmit={handleSubmit} className='flex justify-center p-3 bg-rose-900'>

      <div className='m-4'>
        <label htmlFor='type' className='pr-2 font-bold'>Type</label>
        <select className='border-black border-solid' onChange={handleChange} name='type'>
          {showTypes.map((i, idx) => (
            <option key={idx + i[0]} value={i[0]}>{i[1]}</option>
          ))}
        </select>
      </div>


      <div className='m-4'>
        <label className='pr-2 font-bold'>Genre</label>
        <select onChange={handleChange} name='genre'>
          {genreArr.map((i, idx) => (
            <option key={idx + i[0]} value={i[0]}>{i[1]}</option>
          ))}
        </select>
      </div>


      <div className='m-4'>
        <label className='pr-2 font-bold'>Movie Title</label>
        <input
          type='text'
          name='movieTitle'
          placeholder='search by title'
          onChange={handleChange}
          className='pl-2 w-80'
        />

        <button type='submit' onClick={handleSubmit} className='ml-3'>Search</button>
      </div>

    </form>
    </>
  )
}

export default SearchForm;
