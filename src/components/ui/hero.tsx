import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="flex items-center justify-center">
      <div className="container h-[500px] flex bg-heroColor bg-no-repeat bg-cover bg-heropattern bg-hero-overlay items-center justify-between w-full">
        <div className="mb-7 flex flex-col gap-2 w-full ms-8 ">
          <h2 className="text-5xl font-bold tracking-wide">Explore, Watch, Enjoy</h2>
          <p className="text-xl tracking-wide">Enjoy your Movies and TV Shows</p>
          <div className="bg-white relative z-40 flex items-center gap-2 mt-2 text-sm border-slate-300 rounded-full overflow-hidden max-w-[580px] max-h-[48px]">
            <input className="w-full bg-transparent placeholder:font-italitc py-2 pl-3 pr-4 focus:outline-none" placeholder="Enter your keyword to search" type="text" />
            <button className="flex items-center p-3 bg-marimo font-bold">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;