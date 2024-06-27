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
          <div className="container h-80 flex items-center px-4 md:px-6">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the Best TV Shows
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Explore a curated selection of the latest and greatest TV shows. From gripping dramas to hilarious
                    comedies, we've got something for everyone.
                  </p>
                </div>
              </div>
            </div>
      <div className="grid grid-cols-3 gap-8 mx-[50px]">
      {tvshows.map((tv: any) => (
        <div className="relative overflow-hidden rounded-lg group" key={tv.id}>
        <Image
            src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
            alt={tv.title}
            width={500}
            height={750}
            className="h-40 object-cover"
          />
        <div className="p-4 bg-background">
          <h2 className="text-center text-xl text-white">{tv.original_name}</h2>
          <p className="text-sm text-muted-foreground line-clamp-2">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying
            supernatural forces, and one very strange little girl.
          </p>
        </div>
      </div>          
      ))}
      </div>
    </section>
  );
}
