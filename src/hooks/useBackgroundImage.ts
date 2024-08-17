import { useState, useEffect } from "react";

export function useBackgroundImage() {
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const fetchBackgroundImage = async () => {
            const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
        
            try {
                const backgroundResponse = await fetch(
                  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
                );
                const backgroundData = await backgroundResponse.json();
                if (backgroundData.results.length > 0) {
                  const backdropPath = backgroundData.results[0].backdrop_path;
                  setBackgroundImage(`https://image.tmdb.org/t/p/original${backdropPath}`);
                }
              } catch (error) {
                console.error('Error fetching background image:', error);
              }
            };
        
            fetchBackgroundImage();
          }, []);
        
          return backgroundImage;
        }