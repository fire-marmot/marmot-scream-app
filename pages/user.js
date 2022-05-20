import React from 'react';
import UserPage from '../sections/userPage/userPage';


const user = () => {

    return (
      <div className='container m-auto'>
        <h1 className='text-primary text-5xl p-3'>Team Fire Marmot</h1>
        <div className=''>
          <UserPage/>
        </div>
      </div>
    )
  }
  
  export default user;