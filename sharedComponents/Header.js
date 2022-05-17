import React, { useState } from 'react';
import NavBar from './NavBar';
import Link from 'next/link';

import { useMarmotContext } from './MarmotProvider/marmotProvider';

const Header = () => {
  const  marmotContext  = useMarmotContext();
  const { auth } = marmotContext;
  const { user, likedList, watchList} = auth;

  const isLoggedIn = user ? true : false;


  const handleLogin = (e) => {
    e.preventDefault();
  }
  
  const handleLogOut = (e) => {
    e.preventDefault();
}

const SignInButton = ({ isLoggedIn }) => {
  return (
    <Link href='/auth/loginPage'>
      <a className='p-3 text-light bg-primary hover:bg-light hover:text-dark rounded m-2'
      >
      {isLoggedIn ? 'sign out' : 'sign in'}
      </a>
    </Link>
)}

  return (
    <div className="flex justify-between bg-dark">
      <NavBar/>
      <div className='flex'>
        {isLoggedIn && <div className='text-light'>Welcome {user.name}</div>}
        <div className='justify-end'>
          <SignInButton isLoggedIn={isLoggedIn}/>
        </div>
      </div>
    </div>
  )
}


export default Header;
