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

const SignInButton = ({ session }) => {
  const handler = session ? handleLogOut : handleLogin;
  return (
    <Link href='/home'>
      <a className='p-3 text-light bg-primary hover:bg-light hover:text-dark rounded m-2'
         onClick={handler}
      >
      {session ? 'sign out' : 'sign in'}
      </a>
    </Link>
)}

const Header = () => {
  const { data : session }  = useSession();

  console.log(session);
  return (
    <div className="flex justify-between bg-dark">
      <NavBar/>
      <div className='justify-end'>
        <SignInButton session={session}/>
      </div>
    </div>
  )
}

export default Header;