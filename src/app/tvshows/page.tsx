import Image from "next/image";

const API_KEY = "4f23342c64119b888d4db574dbbab573";

async function getNowPopularTV() {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch tvshows");
  }

  return response.json();
}

export default async function TvShows() {
  const data = await getNowPopularTV();
  const tvshows = data.results;

  return (
    <section className="flex flex-col flex-wrap gap-4 bg-blacky items-center justify-center">
      <h1 className="text-white font-bold text-center">Tv Shows</h1>
      <div className="grid grid-cols-5 gap-8">
      {tvshows.map((tv: any) => (
        <div className="w-52 border-2 border-gray-900" key={tv.id}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
            alt={tv.title}
            width={500}
            height={750}
            className="h-40 object-cover"
          />
          <h2 className="text-center text-xl text-white">{tv.original_name}</h2>
        </div>
      ))}
      </div>
    </section>
  );
}
