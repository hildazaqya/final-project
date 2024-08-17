'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import InputNavbar from './InputNavbar';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary w-full shadow-xl px-[50px]">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="navbar-left flex flex-col lg:flex-row gap-3 items-start lg:gap-8 lg:items-center justify-between w-full lg:w-fit">
          <div className='flex flex-row w-full justify-between'>
            <h3 className="text-milky font-bold text-xl">
              <Link href="/" passHref>
                <h1 className='text-xl text-accent font-bold'>RORONOA.NET</h1>
              </Link>
            </h3>
            <div className='lg:hidden'>
              <button onClick={toggleMenu} className='text-milky focus:outline-none'>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
       <InputNavbar />
      </div>
    </nav>
  );
}
// buat file baru, search navbar jadi button inputnya dipisah jadi komponen sendiri

export default Navbar;
