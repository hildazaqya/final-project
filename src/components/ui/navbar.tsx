import Link from 'next/link'; 

function Navbar() {
  return (
    <nav className="bg-gray-800 w-full">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h3 className="text-white font-bold text-xl">
          <Link href="/">Roronoa.net</Link>
        </h3>
        <ul className="flex space-x-4">
          <li className="text-white hover:text-gray-400">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white hover:text-gray-400">
            <Link href="/about">Movie</Link>
          </li>
          <li className="text-white hover:text-gray-400">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="text-white hover:text-gray-400">
            <Link href="/cat">Cat</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
