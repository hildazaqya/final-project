'use client';
import React from 'react';
import { useBackgroundImage } from '@/hooks/useBackgroundImage';

function Hero() {
  const backgroundImage = useBackgroundImage();

  return (
    <section
      className="hero-background w-full"
      style={{
        backgroundImage: `
        linear-gradient(to bottom, rgba(0, 0, 139, 0) 0%, rgba(13, 27, 42, 0.3) 30%, rgba(13, 27, 42, 0.9) 90%), 
        linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), 
        url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="h-[500px] flex items-center justify-center w-full">
        <div className="flex flex-col gap-2 w-full text-center">
          <h2 className="text-4xl font-bold tracking-wide text-accent">Explore, Watch, Enjoy</h2>
          <p className="text-xl tracking-wide text-accent">Enjoy your Movies and TV Shows</p>         
        </div>
      </div>
    </section>
  );
}

export default Hero;
