'use client'
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchMovies = useCallback(async () => {
    const API_KEY = "4f23342c64119b888d4db574dbbab573";
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}&language=en-US&page=1`);
    const data = await response.json();
    setSearchResults(data.results);
    setShowDropdown(true);
  }, [keyword]);

  useEffect(() => {
    if (keyword.length > 0) {
      fetchMovies();
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  }, [keyword, fetchMovies]);

  const handleMovieClick = () => {
    setShowDropdown(false);
  };

  return (
    <section className="md:flex md:items-center md:justify-center">
      <div className="container h-[500px] flex bg-heroColor bg-no-repeat bg-cover bg-heropattern bg-hero-overlay items-center justify-between w-full">
        <div className="mb-7 flex flex-col gap-2 w-full ms-8 ">
          <h2 className="text-5xl font-bold tracking-wide">Explore, Watch, Enjoy</h2>
          <p className="text-xl tracking-wide">Enjoy your Movies and TV Shows</p>
          <div className="bg-milky hidden relative z-40 items-center gap-2 mt-2 text-sm border-slate-300 rounded-full overflow-hidden max-w-[580px] max-h-[48px] mr-[50px]">
            <input 
              className="w-full bg-transparent placeholder:font-italic py-2 pl-3 pr-4 focus:outline-none" 
              placeholder="Enter your keyword to search" 
              type="text" 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button className="flex items-center p-3 bg-marimo font-bold" onClick={fetchMovies}>
              Search
            </button>
          </div>
          {showDropdown && searchResults.length > 0 && (
            <div className="search-popup absolute bg-milky border rounded-lg mt-2 w-full max-w-[500px] max-h-[300px] overflow-y-auto shadow-lg z-50 bottom-[-120px]" 
            >
              {searchResults.map((movie:any) => (
                <Link href={`/movie/${movie.id}`} key={movie.id}>
                  <div 
                  className="p-2 cursor-pointer bg-milky hover:bg-gray-200 flex flex-row items-center"
                  onClick={handleMovieClick}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    width={50}
                    height={75}
                    className="rounded"
                  />
                  <p className="ml-2">{movie.title}</p>
                </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
