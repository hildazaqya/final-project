import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/ui/hero";

async function getData() {
  const apiUrl = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=4f23342c64119b888d4db574dbbab573&language=en-US&page=1");
  return apiUrl.json();
}

export default async function MoviePage() {
  const linkImages = "https://image.tmdb.org/t/p/w500";
  const moviesData = await getData();
  const movies = moviesData.results;

  return (
    <section className="flex flex-col bg-blacky flex-wrap gap-4 items-center justify-center mb-5">
    <Hero />
    <h3 className="text-2xl font-bold text-white text-left mt-5">Trending Now</h3>
    <div className="flex flex-row flex-wrap gap-4 items-center justify-center py-5">
      {movies.map((item: any) => (
        <div className="flex flex-col items-center justify-center w-52 border-2 border-gray-900 p-5 rounded-md gap-5" key={item.id}>
          <Link href={`/movie/${item.id}`}>
            <div>
            <div className="overflow-hidden w-[200px] h-[300px]">
            <Image
              src={`${linkImages}${item.poster_path}`}
              alt={item.original_title}
              width={800}
              height={150}
              className="object-contain "
            />
            </div>
            <h2 className="text-white text-xl mt-5 text-left">{item.title}</h2>
            </div>
          </Link>
        </div>
      ))}
</div>
    </section>
  );
}
