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
    <section className="flex flex-col flex-wrap gap-4 bg-blacky items-center justify-center mx-[50px]">
          <div className="container h-80 flex items-center">
              <div className="flex flex-col items-center justify-start text-left space-y-4 text-white">
                  <h1 className="text-xl font-bold tracking-tighter sm:text-2xl xl:text-3xl">
                    Discover the Best TV Shows
                  </h1>
                  <p className="text-muted-foreground md:text-base">
                    Explore a curated selection of the latest and greatest TV shows. From gripping dramas to hilarious
                    comedies, we've got something for everyone.
                  </p>
              </div>
            </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
      {tvshows.map((tv: any) => (
        <div className="relative overflow-hidden rounded-lg group bg-slate-300 p-5" key={tv.id}>
        <Image
            src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
            alt={tv.title}
            width={500}
            height={750}
            className="w-full h-48 object-cover rounded-md"
          />
        <div className="bg-background text-left gap-2 mt-3">
          <h2 className="text-blacky font-bold text-white text-lg">{tv.original_name}</h2>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {tv.overview}
          </p>
          <button className="bg-marimo hover:bg-slate-700 text-white p-2 text-sm mt-3 rounded-md w-[120px]">More Info</button>
        </div>
      </div>          
      ))}
      </div>
    </section>
  );
}
