import { createContext, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';

// MARMOT_API_LOGIN_URL=http://localhost:8000/api/token/
// const MARMOT_API_LOGIN_URL = process.env.MARMOT_API_LOGIN_URL;

const MARMOT_API_URL='http://localhost:8000/api/marmot/'
const MARMOT_API_LOGIN_URL='http://localhost:8000/api/token/'

const AuthContext = createContext();

// export function useAuth() {
//   const auth = useContext(AuthContext);
//   if (!auth) {
//     throw new Error('You forgot AuthProvider!')
//   };
//   return auth;
// }

export function AuthProvider(props) {
  
  const [state, setState] = useState({
      tokens: null,
      user: null,
      login,
      logout,
  });

  async function login(username, password) {
      console.log('Running Login auth')
      try {
        const response = await axios.post(MARMOT_API_LOGIN_URL, {
            username: 'admin1',
            password: 'admin1'
        })
        console.log(response)
          // const decodedAccess = jwt.decode(response.data);
          const newState = {
              tokens: response.data,
              user: {
                  username: username,
                  // email: decodedAccess.email,
                //   id: decodedAccess.user_id
              },
          }
          setState(prevState => ({ ...prevState, ...newState }));
      } catch(e) {
          console.log('axios error in auth')
          console.warn(e)
      }
  }

  function logout() {
      const newState = {
          tokens: null,
          user: null,
      }
      setState(prevState => ({ ...prevState, ...newState }));
  }
  return (
      <AuthContext.Provider value={state}>
          {props.children}
      </AuthContext.Provider>
  );
}