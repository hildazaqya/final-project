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
    <section className="flex flex-col flex-wrap gap-4 bg-blacky items-center justify-center mx-[50px]">
      <div className="container h-80 flex items-center">
        <div className="flex flex-col items-center justify-start text-center md:text-left space-y-4 text-milky">
          <h1 className="text-xl font-bold tracking-tighter sm:text-2xl xl:text-3xl">
            Discover the Best Movies
          </h1>
          <p className="text-muted-foreground md:text-base">
            Dive into a handpicked collection of the latest and greatest movies.
            Whether you&apos;re in the mood for thrilling action, heartfelt dramas,
            or laugh-out-loud comedies, we&apos;ve got something for every movie lover.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
        {movies.map((movie: any) => (
          <div className="relative overflow-hidden rounded-[14px] group bg-gradient-to-t from-slate-600 to-[#292727] shadow-md p-5 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/50 transition-all" key={movie.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={500}
              height={750}
              className="w-full h-48 object-cover rounded-md shadow-md"
            />
            <div className="bg-background text-left gap-2 mt-3">
              <h2 className="text-blacky font-bold text-lg">{movie.title}</h2>
              <p className="text-sm text-muted-foreground line-clamp-2 text-slate-950">
                {movie.overview}
              </p>
              <button className="bg-slate-900 hover:bg-slate-800 text-milky p-2 text-sm mt-3 rounded-md w-[120px]">More Info</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
