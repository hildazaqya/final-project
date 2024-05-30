import Image from "next/image";
import React from "react";

async function getData(id: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=4f23342c64119b888d4db574dbbab573&language=en-US`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie data");
  }
  return response.json();
}

export default async function DetailMovies({
  params,
}: {
  params: { id: string };
}) {
  const linkImages = "https://image.tmdb.org/t/p/w500";
  const movie = await getData(params.id);

  return (
    <section className="flex flex-col items-center justify-center bg-blacky min-h-screen">
      <div
        className="relative w-[800px] h-[400px] bg-cover bg-center mx-5"
        style={{ backgroundImage: `url(${linkImages}${movie.backdrop_path})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-row items-center justify-center h-full p-5 text-center text-white gap-4">
        <Image
          src={`${linkImages}${movie.poster_path}`}
          alt={movie.original_title}
          width={300}
          height={450}
          className="rounded-md"
        />
        <div className="flex flex-col text-left">
         <h3 className="text-4xl font-bold mb-4">{movie.original_title}</h3>
         <p className="text-base">Description:</p>
          <p className="text-base">{movie.overview}</p>
        <div className="text-white text-base text-left">
          <p className="mb-2">Popularity: {movie.popularity}</p>
          <p className="mb-2">Release Date: {movie.release_date}</p>
          <p className="mb-2">Vote Count: {movie.vote_count}</p>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}
