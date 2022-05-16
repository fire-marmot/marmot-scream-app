
import { useState } from 'react';
import { useMovieResource } from '../../sharedComponents/MarmotProvider/useMovieResource';
import { useMarmotContext } from '../../sharedComponents/MarmotProvider/marmotProvider';
import Link from 'next/link';

const LogInForm = () => {
  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const { auth } = useMarmotContext();
  const { user, login } = auth;

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name){
      case 'userName':
        setUserName(value)
        break;
      case 'password':
        setPassword(value)
        break;
    }
  }

  const handelLoginSubmit = async (e) => {
    login(userName, password);
  }

  return (
    <div className="flex justify-center text-center">
      <form onChange={handleChange}>
        <div className="bg-emerald-300 border-2 border-emerald-500 m-4 rounded-md p-3 flex-col basis-1/2 justify-center">
          <div className="m-3 w-96 p-2">
            <label 
              htmlFor="userName"
              className="font-bold block"
              >USER NAME</label>
            <input 
              type="text" 
              name="userName" 
              placeholder=" User Name"
              className="w-full h-8 mt-3"
              ></input>
            </div>
          <div className="m-3 p-2 pb-6">  
            <label
              htmlFor="password"
              className="font-bold block"
              >PASSWORD</label>
            <input 
              type="password" 
              name="password" 
              placeholder=" password"
              className="w-full h-8 mt-3"
              ></input>
          </div>
          <div className="bg-emerald-500 rounded m-3 active:bg-pink-50 hover:cursor-pointer">
            <Link
              href='/home'>
              <a onClick={handelLoginSubmit}
                className="p-3"
                value="Submit"
              >SIGN IN</a></Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LogInForm;