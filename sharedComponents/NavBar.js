import React from 'react';
import Link from 'next/link';


// Add route here: match <page.js> on right
const routeMap = {
  'home': 'home',
  'about': 'aboutPage',
  // 'user' : 'userPage'
}

const routing = Object.entries(routeMap);

const NavBar = () => (
  <div className='flex bg-darkest pl-5'>
    {routing.map((i, idx) => (
      <Link key={idx + i[0]} href={i[1]}>
        <a className='p-3 m-2 rounded text-light bg-primary hover:bg-light hover:text-dark'>{i[0]}</a>
      </Link>
    ))}
  </div>
)

export default NavBar;
