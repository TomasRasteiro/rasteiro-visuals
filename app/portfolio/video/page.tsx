"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import FloatingSocials from "@/components/FloatingSocials";

const videos = [
  {
    title: "YouTube Video",
    subtitle: "Long Form • Premiere Pro",
    youtubeId: "https://www.youtube.com/watch?v=l3i0e491DUY",
    poster: "/thumbnail1.jpeg",
  },
  {
    title: "Event Video",
    subtitle: "Travel Event",
    youtubeId: "https://www.youtube.com/watch?v=vjM3G42Y6WM",
    poster: "/thumb video camera.jpg",
  },
  {
    title: "Car Commercial",
    subtitle: "Commercial",
    youtubeId: "VIDEO3_ID",
    poster: "/thumbnail3.jpg",
  },
];

export default function VideoPage() {

  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (

    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="px-10 md:px-20 pt-40 pb-32">

        <Link
          href="/portfolio"
          className="text-gray-400 hover:text-white transition"
        >
          ← Back to Portfolio
        </Link>


        <p className="uppercase tracking-[0.45em] text-gray-500 text-sm mt-12">
          Portfolio
        </p>


        <h1 className="text-6xl md:text-8xl font-bold mt-6">
          Video Editing
        </h1>


        <p className="text-gray-400 max-w-2xl mt-8 leading-8 mb-24">
          A selection of my favourite editing projects focused on storytelling,
          pacing and cinematic visuals.
        </p>


        <div className="space-y-24">


          {videos.map((video, index) => (

            <div key={index}>


              <div className="mb-8">

                <h2 className="text-3xl font-semibold">
                  {video.title}
                </h2>


                <p className="text-gray-500 mt-2">
                  {video.subtitle}
                </p>

              </div>
                            <div
                onClick={() => setSelectedVideo(index)}
                className="
                  relative
                  group
                  cursor-pointer
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  shadow-2xl
                  max-w-5xl
                  mx-auto
                "
              >

                <img
                  src={video.poster}
                  alt={video.title}
                  className="
                    w-full
                    max-w-5xl
                    aspect-video
                    object-cover
                    rounded-3xl
                    transition-all
                    duration-700
                    group-hover:scale-105
                    group-hover:brightness-50
                  "
                />


                <div className="
                  absolute
                  inset-0
                  bg-black/20
                  group-hover:bg-black/45
                  transition-all
                  duration-500
                " />


                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                  "
                >

                  <div
                    className="
                      bg-red-600
                      rounded-xl
                      w-24
                      h-16
                      flex
                      items-center
                      justify-center
                      shadow-2xl
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                  >

                    <span className="text-4xl text-white ml-1">
                      ▶
                    </span>

                  </div>

                </div>


              </div>


            </div>

          ))}


        </div>


      </section>


      {selectedVideo !== null && (

        <div
          className="
            fixed
            inset-0
            z-[999]
            bg-black/95
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-6
          "
          onClick={() => setSelectedVideo(null)}
        >


          <button
            onClick={() => setSelectedVideo(null)}
            className="
              absolute
              top-8
              right-8
              w-14
              h-14
              rounded-full
              bg-white/10
              backdrop-blur-md
              text-3xl
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
              z-50
            "
          >
            ×
          </button>


          <div
            className="w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >


            <div
              className="
                aspect-video
                w-full
                overflow-hidden
                rounded-3xl
                shadow-2xl
                border
                border-white/10
              "
            >

              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videos[selectedVideo].youtubeId}?autoplay=1&rel=0`}
                title={videos[selectedVideo].title}
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share
                "
                allowFullScreen
              />

            </div>
            <div className="mt-8">

              <h2 className="text-4xl font-bold">
                {videos[selectedVideo].title}
              </h2>


              <p className="text-gray-400 mt-3">
                {videos[selectedVideo].subtitle}
              </p>

            </div>


          </div>


        </div>

      )}


      <Footer />

      <FloatingSocials />


    </main>

  );

}