import React, { useState, useEffect } from 'react';
import { GENRES } from '../../sharedComponents/enums';

const FilterForm = ({ setFilter }) => {
  const genreArr = Object.entries(GENRES);
  genreArr.sort();

  const [ selectedGenres, setSelectedGenres ] = useState([]);
  const isSelected = !!(selectedGenres.length > 0);

  useEffect(() => {
    if (selectedGenres.length > 0) {
      setFilter(selectedGenres)
    }
  }, [selectedGenres])

  const clearFilter = (e) => {
    e.preventDefault();
    setSelectedGenres([]);
  }

  const handleChange = (e) => {
    const genre = e.target.value;
    const prev = selectedGenres;
    setSelectedGenres([...prev, genre]);
  }

  return (
    <>
    <form className='bg-light'>
      <label className='m-2'>Genre Filter</label>
        <select onChange={handleChange} name='genre-filter' className=''>
          {genreArr.map((i, idx) => (
            <option key={idx + i[0]} value={i[1]}>{i[1]}</option>
            ))}
        </select>
            {isSelected && <div className='text-primary'>Showing Selections For...</div>}
            {isSelected && (selectedGenres.map((selection, idx) => (
              <>
                <div 
                  key={idx}
                  className='block'
                  >{selection}</div>
                  </>
            )))}
        <button onClick={clearFilter}>Clear Genre Filters</button>
    </form>
    </>
  )
}
;

export default FilterForm;
