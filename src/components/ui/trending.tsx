
'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { MOVIE_POSTER_SIZE, BASE_TMDB_IMAGE_URL } from '@/configs';
import 'swiper/css';

async function getData() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const apiUrl = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
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
  const linkImages = `${BASE_TMDB_IMAGE_URL}/${MOVIE_POSTER_SIZE}`;
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
    <div className="mx-auto flex flex-col justify-center z-10 mt-5 px-[50px]">
      <div className="title flex justify-start items-center w-full z-10">
        <h3 className="text-2xl font-bold text-milky text-left z-10">
          Discover Movies
        </h3>
      </div>
      <div className="relative grid grid-cols-5 mt-6 gap-x-8 gap-y-14">
        {movies.map((item: any) => (
          <Link href={`/movie/${item.id}`} key={item.id}>
            <div className="flex flex-col rounded-xl w-full h-64 my-3">
            <Image
                      src={`${linkImages}${item.poster_path}`}
                      alt={item.original_title}
                      width={170}
                      height={220}
                      className="object-cover rounded-[14px] w-full h-full shadow-lg"
                    />
                    <p className="text-accent text-base mt-3">{item.title}</p>
            </div>
          </Link>
        ))
        }
      </div>
      <div className="hidden relative flex flex-row gap-5 z-10 items-center justify-center w-[320px] sm:w-[540px] md:w-[600px] lg:!w-[900px] mt-4 !overflow-x-clip !overflow-y-visible">
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
              spaceBetween: 30,
            },
          }}
          className="!relative !z-0 !max-w-[320px] sm:!max-w-[600px] md:!max-w-[800px] lg:!max-w-[900px] !overflow-x-clip !overflow-y-visible">
          {movies.map((item: any) => (
            <SwiperSlide key={item.id} className="!w-[148px] !mr-[20px] md:!mr-[40px]">
              <div className="relative flex flex-col items-center justify-center p-2 rounded-md"
                onMouseEnter={() => setHoveredMovieId(item.id)}
                onMouseLeave={() => setHoveredMovieId(null)}
              >
                <Link href={`/movie/${item.id}`}>
                  <div className="w-[170px] h-[220px]">
                    <Image
                      src={`${linkImages}${item.poster_path}`}
                      alt={item.original_title}
                      width={170}
                      height={220}
                      className="object-cover rounded-[14px]"
                    />
                  </div>
                </Link>
                <h2 className="text-milky text-sm mt-2 text-center pt-10">{item.title}</h2>
                {hoveredMovieId === item.id && (
                  <Link href={`/movie/${item.id}`}>
                    <div className="block absolute z-50 bottom-[25px] left-0 right-[40px] p-2 w-[250px] h-[auto] transform -translate-y-6 animation-card bg-black text-milky rounded-md">
                      <div className="h-[100px]">
                        <Image
                          src={`${linkImages}${item.backdrop_path}`}
                          alt={item.original_title}
                          objectFit="cover"
                          width={280}
                          height={150}
                          className="object-contain"
                          loading="lazy"
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
