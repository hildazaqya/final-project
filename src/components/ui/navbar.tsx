'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blacky w-full">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="navbar-left flex flex-col md:flex-row gap-3 items-start md:gap-8 md:items-center justify-between w-full md:w-fit">
          <div className='flex flex-row w-full justify-between'>
            <h3 className="text-white font-bold text-xl">
              <Link href="/" passHref>
                <h1 className='text-xl text-marimo font-bold'>RORONOA.NET</h1>
              </Link>
            </h3>
            <div className='md:hidden'>
              <button onClick={toggleMenu} className='text-white focus:outline-none'>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
            </div>
          </div>
          <ul className={`flex-col md:flex-row md:flex md:items-center gap-4 pb-3 md:py-0 md:gap-0 md:space-x-8 text-sm ${isOpen ? 'flex' : 'hidden'}`}>
              <li className={clsx('hover:text-marimo transition-navbar', { 'text-green-500': pathname === '/', 'text-white': pathname !== '/' })}>
              <Link href="/">
                Home
              </Link>
            </li>
            <li className={clsx('hover:text-marimo transition-navbar', { 'text-green-700': pathname === '/movies', 'text-white': pathname !== '/movies' })}>            
              <Link href="/movies">
                Movies
              </Link>
            </li>
            <li className={clsx('hover:text-marimo transition-navbar', { 'text-green-700': pathname === '/tvshows', 'text-white': pathname !== '/tvshows' })}>            
              <Link href="/tvshows">
                TVShows
              </Link>
            </li>
            <li className={clsx('hover:text-marimo transition-navbar', { 'text-green-700': pathname === '/contacts', 'text-white': pathname !== '/contacts' })}>                        
              <Link href="/contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <div className='input hidden md:block'>
          <label className="relative flex items-center w-[250px] h-[30px] my-3">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </span>
            <input className="w-full bg-transparent placeholder:font-italic border rounded-xl py-2 pl-10 pr-4 focus:outline-none text-sm text-white focus:text-white" placeholder="Search anything" type="text" />
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
