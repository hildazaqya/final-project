import Image from "next/image";
import Hero from "@/components/ui/Hero";
import TrendingNow from "@/components/ui/Trending";
import LastTrailer from "@/components/ui/LastTrailer";
import NowPlaying from "@/components/ui/NowPlaying";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default async function MoviePage() {
  return (
    <section className="flex flex-col bg-primary flex-wrap gap-4 justify-center">
    <Hero />
    <TrendingNow />
    <LastTrailer />
    <NowPlaying />
    </section>
  );
}
