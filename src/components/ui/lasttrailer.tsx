'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import {MOVIE_POSTER_SIZE, BASE_TMDB_IMAGE_URL } from '@/configs';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

async function getVideoData() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/297762/videos?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  return data.results;
}

async function getMovieDetails(movieId: number) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  return data;
}

export default function LastTrailer() {
  const linkImages = `${BASE_TMDB_IMAGE_URL}/${MOVIE_POSTER_SIZE}`;
  const [trailers, setTrailers] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideoKey, setCurrentVideoKey] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const videoData = await getVideoData();
        const trailersWithDetails = await Promise.all(
          videoData.map(async (video: any) => {
            const movieDetails = await getMovieDetails(video.id); 
            return {
              ...video,
              poster_path: movieDetails.poster_path,
              backdrop_path: movieDetails.backdrop_path,
            };
          })
        );
        setTrailers(trailersWithDetails);
      } catch (error) {
        setError('Failed to fetch data');
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const openModal = (videoKey: string) => {
    setCurrentVideoKey(videoKey);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentVideoKey(null);
  };

  if (error) {
    return <div className="text-milky">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto flex flex-col justify-center z-10 mt-5 ps-10 py-5 bg-marimo">
        <div className="title flex justify-start w-full">
          <h3 className="text-2xl font-bold text-white text-left">
            Latest Trailer
          </h3>
        </div>
      <div className="relative flex flex-row gap-5 z-10 items-center justify-center w-[460px] sm:w-[540px] md:w-[600px] lg:!w-[900px] overflow-hidden mt-4">
          <Swiper spaceBetween={10} 
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
         className="!relative !z-0 !max-w-[320px] sm:!max-w-[500px] md:!max-w-[600px] lg:!max-w-[900px] !overflow-x-clip !overflow-y-visible">
            {trailers.map((item: any) => (
              <SwiperSlide key={item.id} className="!w-[248px]">
                <div
                  className="relative flex flex-col items-center justify-center p-2 rounded-md hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(item.key)}
                >
                  <div className="block overflow-hidden !w-[220px] !h-[124px]">
                    <Image
                      src={`${linkImages}${item.poster_path}`}
                      alt={item.name}
                      width={220}
                      height={124}
                      className="object-cover rounded-md !h-[124px]"
                    />
                    <div className="play absolute top-0 left-0 flex items-center justify-center w-[248px] h-buttonplay">
                      <span>
                        <FontAwesomeIcon icon={faPlay} size="2xl" style={{ color: "#ffffff" }} />
                      </span>
                    </div>
                  </div>
                  <h2 className="text-milky text-sm mt-2 text-left">{item.name}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Trailer Modal"
        className="flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="rounded-lg w-[80vw] h-[80vh] flex items-center justify-center border-none">
          <button onClick={closeModal} className="absolute top-2 right-2 text-black text-2xl">×</button>
          {currentVideoKey && (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${currentVideoKey}`}
              title="Video Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </Modal>
    </div>
  );
}
