import Image from "next/image";

const API_KEY = "4f23342c64119b888d4db574dbbab573";

async function getNowPlayingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return response.json();
}

export default async function Movies() {
  const data = await getNowPlayingMovies();
  const movies = data.results;

  return (
    <section className="flex flex-col flex-wrap gap-4 bg-blacky items-center justify-center">
      <h1 className="text-white font-bold text-center">Movies</h1>
      <div className="grid grid-cols-5 gap-8">
      {movies.map((movie: any) => (
        <div className="w-52 border-2 border-gray-900" key={movie.id}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="h-40 object-cover"
          />
          <h2 className="text-center text-xl text-white">{movie.title}</h2>
        </div>
      ))}
      </div>
    </section>
  );
}
