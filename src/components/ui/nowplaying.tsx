'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

async function getData() {
  const apiUrl = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=4f23342c64119b888d4db574dbbab573&language=en-US&page=1"
  );
  return apiUrl.json();
}

function truncateText(text: string, wordLimit: number): string {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
}

export default function TrendingNow() {
  const linkImages = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const moviesData = await getData();
      setMovies(moviesData.results);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center z-10 mt-10 mx-[50px] ps-10">
      <div className="title flex justify-start items-center w-full z-10">
        <h3 className="text-2xl font-bold text-white text-left ">
          Now Playing
        </h3>
      </div>
      <div className="relative flex flex-row gap-5 z-10 items-center justify-center !w-[900px] mt-4">
        <Swiper spaceBetween={50} slidesPerView={5}>
          {movies.map((item: any) => (
            <SwiperSlide key={item.id}>
              <div className="relative flex flex-col items-center justify-center p-2 rounded-md"
                onMouseEnter={() => setHoveredMovieId(item.id)}
                onMouseLeave={() => setHoveredMovieId(null)}>
                <Link href={`/movie/${item.id}`}>
                  <div className="overflow-hidden w-[170px] h-[220px]">
                    <Image
                      src={`${linkImages}${item.poster_path}`}
                      alt={item.original_title}
                      width={170}
                      height={220}
                      className="object-cover rounded-md"
                    />
                  </div>
                </Link>
                <h2 className="text-white text-sm mt-2 text-left">{item.title}</h2>
                {hoveredMovieId === item.id && (
                <Link href={`/movie/${item.id}`}>
                  <div className="absolute overflow-hidden z-50 bottom-0 left-0 right-0 p-2 w-[250px] h-[auto] transform -translate-y-6 animation-card bg-black text-white rounded-md">
                    <div className="h-[100px]">
                      <Image
                        src={`${linkImages}${item.backdrop_path}`}
                        alt={item.original_title}
                        objectFit="cover"
                        width={280}
                        height={150}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-2">
                      <h4 className="text-base font-bold">{item.title}</h4>
                      <p className="text-xs">⭐ {item.vote_average.toFixed(1)}</p>
                      <p className="text-xs text-justify">{truncateText(item.overview, 25)}</p>
                      <p className="text-xs text-marimo text-right cursor-pointer">more info {' > '} </p>
                    </div>
                  </div>
                  </Link>
                )}
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
