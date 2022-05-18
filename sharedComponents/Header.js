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
        <a className='p-3 text-light bg-primary hover:bg-light hover:text-dark rounded m-2'
        onClick={handleClick}
        >
        {isLoggedIn ? 'Log Out' : 'Log In'}
        </a>
      </Link>
)}

  return (
    <>
      <MainGreeting/>
   
      <div className="flex justify-between bg-darkest pr-5">   
        <NavBar/>
          {isLoggedIn && <div className='m-2 text-light text-2xl'>Welcome {user}</div>}
            <SignInButton isLoggedIn={isLoggedIn}/>
        </div>
    </>
  )
}


export default Header;
