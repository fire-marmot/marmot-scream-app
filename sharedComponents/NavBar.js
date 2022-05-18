import React from 'react';
import Link from 'next/link';


// Add route here: match <page.js> on right
const routeMap = {
  'home': 'home',
  'about': 'aboutPage',
}

const routing = Object.entries(routeMap);

const NavBar = () => (
  <div className='flex bg-darkest pl-5'>
    {routing.map((i, idx) => (
      <Link key={idx + i[0]} href={i[1]}>
        <a className='p-3 text-light bg-primary hover:bg-light hover:text-dark rounded m-2'>{i[0]}</a>
      </Link>
    ))}
  </div>
)

export default NavBar;
