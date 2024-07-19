'use client'

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

function InputNavbar() {
    const [keyword, setKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const fetchMovies = useCallback(async () => {
        const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
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
        <div className='input hidden lg:block'>
            <label className="relative flex items-center w-[250px] h-[30px] my-3">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                    </svg>
                </span>
                <input className="w-full bg-transparent placeholder:font-italic border rounded-xl py-2 pl-10 pr-4 focus:outline-none text-sm text-milky focus:text-milky" placeholder="Search anything" type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onClick={fetchMovies} />
                {
                    showDropdown && searchResults.length > 0 && (
                        <div className="search-popup absolute bg-blacky border-milky rounded-lg mt-3 w-full max-w-[300px] h-[300px] top-[30px] overflow-y-auto shadow-lg z-50">
                            {searchResults.map((movie: any) => (
                                <Link href={`./movie/${movie.id}`} key={movie.id}>
                                    <div
                                        className="p-4 cursor-pointer hover:bg-gray-500 flex flex-row items-center "
                                        onClick={handleMovieClick}
                                    >
                                        <Image
                                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                            alt={movie.title}
                                            width={50}
                                            height={75}
                                            className="rounded"
                                        />
                                        <p className="ml-2 text-[8px] text-milky">{movie.title}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )
                }
            </label>
        </div>
    )
}

export default InputNavbar;
