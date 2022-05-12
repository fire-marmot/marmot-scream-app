import React, { useState, useContext } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import { SessionProvider } from 'next-auth/react';


const AuthContextProvider = () => {
  const [ session, setSession ] = useState({});
  


}


export default AuthContextProvider;
