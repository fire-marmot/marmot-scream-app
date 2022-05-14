import React from 'react';
import NavBar from './NavBar';
import { useSession, getSession } from 'next-auth/react';
import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

const handleLogin = (e) => {
  e.preventDefault();
    signIn();
}

const handleLogOut = (e) => {
  e.preventDefault();
  signOut();
}

const SignInButton = ({ isLoggedIn }) => {
  const handler = isLoggedIn ? handleLogOut : handleLogin;
  return (
    <Link href='/home'>
      <a className='p-3 text-light bg-primary hover:bg-light hover:text-dark rounded m-2'
         onClick={handler}
      >
      {isLoggedIn ? 'sign out' : 'sign in'}
      </a>
    </Link>
)}

const Header = () => {
  const { data, authenticated } = useSession();
  const isLoggedIn = !!(data?.user?.name);

  return (
    <div className="flex justify-between bg-dark">
      <NavBar/>
      <div className='flex'>
        {isLoggedIn && <div className='text-light'>Welcome {data.user.name}</div>}
        <div className='justify-end'>
          <SignInButton isLoggedIn={isLoggedIn}/>
        </div>
      </div>
    </div>
  )
}


export default Header;
