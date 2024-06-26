import Link from 'next/link'; 

function Navbar() {
  return (
    <nav className="bg-blacky w-full">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="navbar-left flex flex-row gap-8 items-center">
        <h3 className="text-white font-bold text-xl">
          <Link href="/">
           <h1 className='text-xl text-marimo font-bold'>RORONOA.NET</h1> 
            </Link>
        </h3>
        <ul className="flex space-x-8 text-sm">
          <li className="text-white hover:text-marimo">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white hover:text-marimo">
            <Link href="/movies">Movies</Link>
          </li>
          <li className="text-white hover:text-marimo">
            <Link href="/tvshows">TV Shows</Link>
          </li>
          <li className="text-white hover:text-marimo">
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
        </div>
        <div className='input'>
        <label className="relative flex items-center w-[250px] h-[30px] my-3">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
        </svg>
      </span>
      <input className="w-full bg-transparent placeholder:font-italitc border rounded-xl py-2 pl-10 pr-4 focus:outline-none text-sm text-white focus:text-white" placeholder="Search anything" type="text" />
    </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
