import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="container h-[500px] flex bg-heroColor bg-no-repeat bg-cover bg-heropattern bg-hero-overlay items-center justify-between w-full">
      <div>
        <div className="mb-7 flex flex-col gap-2 w-full ms-8 ">
          <h2 className="text-5xl font-bold tracking-wide">Explore, Watch, Enjoy</h2>
          <p className="text-xl tracking-wide">Enjoy your Movies and TV Shows</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;