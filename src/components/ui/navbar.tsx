import Link from 'next/link'; 

function Navbar() {
  return (
    <nav className="bg-blacky w-full">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h3 className="text-white font-bold text-xl">
          <Link href="/">
           <h1 className='text-xl text-marimo font-bold'>Roronoa.net</h1> 
            </Link>
        </h3>
        <ul className="flex space-x-8">
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
    </nav>
  );
}

export default Navbar;
