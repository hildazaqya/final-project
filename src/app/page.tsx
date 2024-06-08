import Image from "next/image";
import Hero from "@/components/ui/hero";
import TrendingNow from "@/components/ui/trending";

export default async function MoviePage() {
  return (
    <section className="flex flex-col bg-blacky flex-wrap gap-4 items-center justify-center">
    <Hero />
    <TrendingNow />
    </section>
  );
}
