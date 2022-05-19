import React from 'react';
import NavBar from './NavBar';
import Link from 'next/link';

import { useMarmotContext } from './MarmotProvider/marmotProvider';
import MainGreeting from '../sections/homePage/HeroHeader';

const Header = () => {
  const  marmotContext  = useMarmotContext();
  const { auth } = marmotContext;
  const { user, likedList, watchList, login, logout} = auth;

  const isLoggedIn = user ? true : false;

  const handleClick = isLoggedIn ? logout : null;

const SignInButton = ({ isLoggedIn }) => {
  return (
      <Link href='/auth/loginPage'>
        <a className='p-3 m-2 rounded text-light bg-primary hover:bg-light hover:text-dark'
        onClick={handleClick}
        >
        {isLoggedIn ? 'Log Out' : 'Log In'}
        </a>
      </Link>
)}

  return (
    <div className=''>
      <MainGreeting/>
   
      <div className="flex justify-between pr-5 bg-darkest">   
        <NavBar/>
          {isLoggedIn && <div className='m-2 text-2xl text-light'>Welcome {user}</div>}
            <SignInButton isLoggedIn={isLoggedIn}/>
        </div>
    </div>
  )
}


export default Header;
