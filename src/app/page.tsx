import Image from "next/image";
import Hero from "@/components/ui/hero";
import TrendingNow from "@/components/ui/trending";
import LastTrailer from "@/components/ui/lasttrailer";
import NowPlaying from "@/components/ui/nowplaying";

export default async function MoviePage() {
  return (
    <section className="flex flex-col bg-blacky flex-wrap gap-4 justify-center">
    <Hero />
    <TrendingNow />
    <LastTrailer />
    <NowPlaying />
    </section>
  );
}
