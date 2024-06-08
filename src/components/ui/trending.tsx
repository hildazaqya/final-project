import Image from "next/image";
import React from "react";
import Link from "next/link";

async function getData() {
    const apiUrl = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=4f23342c64119b888d4db574dbbab573&language=en-US&page=1");
    return apiUrl.json();
  }

export default async function TrendingNow() {
    const linkImages = "https://image.tmdb.org/t/p/w500";
    const moviesData = await getData();
    const movies = moviesData.results;
  return (
    <div className="flex flex-col justify-center items-center mt-5">
    <div className="title flex justify-start items-center w-full ms-5">
    <h3 className="text-2xl font-bold text-white text-left ms-10">Trending Now</h3>
    </div>
    <div className="flex flex-row gap-5 items-center justify-center overflow-hidden w-[1000px] mx-[50px]">
      {movies.map((item: any) => (
        <div className="flex flex-col items-center w-52 p-2 justify-center rounded-md" key={item.id}>
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
            <h2 className="text-white text-sm mt-3 text-left">{item.title}</h2>
          </Link>
        </div>
      ))}
      </div>
</div>
  );
}
