
'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

async function getData() {
  const apiUrl = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4f23342c64119b888d4db574dbbab573&language=en-US&page=1"
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
    <div className="flex flex-col justify-center z-10 mt-5 mx-[50px] sm:ps-10">
      <div className="title flex justify-start items-center w-full z-10">
        <h3 className="text-2xl font-bold text-white text-left z-10">
          Trending Now
        </h3>
      </div>
      <div className="relative flex flex-row gap-5 z-10 items-center justify-center w-[460px] sm:w-[540px] md:w-[600px] lg:!w-[900px] mt-4 !overflow-x-clip !overflow-y-visible">
      <Swiper 
        spaceBetween={50} 
         slidesPerView={3}
         breakpoints={{
             640: {
                 slidesPerView: 3,
                 spaceBetween: 20,
             },
             768: {
                 slidesPerView: 4,
                 spaceBetween: 30,
             },
             1024: {
                 slidesPerView: 5,
                 spaceBetween: 40,
             },
         }}
         className="!relative !z-0 !max-w-[400px] sm:!max-w-[600px] md:!max-w-[800px] lg:!max-w-[900px] !overflow-x-clip !overflow-y-visible">
          {movies.map((item: any) => (
            <SwiperSlide key={item.id} className="!w-[148px] !mr-[20px] md:!mr-[40px]">
              <div className="relative flex flex-col items-center justify-center p-2 rounded-md"
                onMouseEnter={() => setHoveredMovieId(item.id)}
                onMouseLeave={() => setHoveredMovieId(null)}
              >
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
                  <div className="block absolute z-50 bottom-[25px] left-0 right-[40px] p-2 w-[250px] h-[280px] transform -translate-y-6 animation-card bg-black text-white rounded-md">                   
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
                      <p className="text-[10px] text-justify">{truncateText(item.overview, 18)}</p>
                      <p className="text-xs text-marimo text-right cursor-pointer">more info {' > '}</p>
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
