'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const API_KEY = '4f23342c64119b888d4db574dbbab573';

async function getVideoData() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/297762/videos?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  return data.results;
}

async function getMovieDetails(movieId: number) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  return data;
}

export default function LastTrailer() {
  const linkImages = "https://image.tmdb.org/t/p/w500";
  const [trailers, setTrailers] = useState<any[]>([]);
  const [hoveredTrailerId, setHoveredTrailerId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const videoData = await getVideoData();
        const trailersWithDetails = await Promise.all(
          videoData.map(async (video: any) => {
            const movieDetails = await getMovieDetails(video.id); 
            return {
              ...video,
              poster_path: movieDetails.poster_path,
              backdrop_path: movieDetails.backdrop_path,
            };
          })
        );
        setTrailers(trailersWithDetails);
      } catch (error) {
        setError('Failed to fetch data');
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  if (trailers.length === 0) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center z-10 mt-5 mx-[50px] ps-10">
      <div className="title flex justify-start items-center w-full">
        <h3 className="text-2xl font-bold text-white text-left">
          Latest Trailer
        </h3>
      </div>
      <div className="relative flex flex-row gap-5 z-10 items-center justify-center !w-[900px] mt-4">
        <Swiper spaceBetween={50} slidesPerView={5}>
          {trailers.map((item: any) => (
            <SwiperSlide key={item.id}>
              <div className="relative flex flex-col items-center justify-center p-2 rounded-md"
                onMouseEnter={() => setHoveredTrailerId(item.id)}
                onMouseLeave={() => setHoveredTrailerId(null)}
              >
                <Link href={`https://www.youtube.com/watch?v=${item.key}`}>
                  <div className="overflow-hidden w-[170px] h-[220px]">
                    <Image
                      src={`${linkImages}${item.poster_path}`}
                      alt={item.name}
                      width={170}
                      height={220}
                      className="object-cover rounded-md"
                    />
                  </div>
                </Link>
                <h2 className="text-white text-sm mt-2 text-left">{item.name}</h2>
                {hoveredTrailerId === item.id && (
                  <div className="absolute overflow-hidden z-50 bottom-0 left-0 right-0 p-2 w-[250px] h-[auto] transform -translate-y-6 bg-black text-white rounded-md">
                    <Link href={`https://www.youtube.com/watch?v=${item.key}`}>
                      <div className="h-[100px]">
                        <Image
                          src={`${linkImages}${item.backdrop_path}`}
                          alt={item.name}
                          objectFit="cover"
                          width={280}
                          height={150}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-col gap-2 p-2">
                        <h4 className="text-base font-bold">{item.name}</h4>
                        <p className="text-xs text-marimo text-right cursor-pointer">Watch on YouTube {' > '}</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

