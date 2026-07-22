"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import FloatingSocials from "@/components/FloatingSocials";

const photos = [
  {
    image: "/photo1.jpg",
    title: "Portrait Session",
    category: "Portrait",
  },
  {
    image: "/photo2.jpg",
    title: "Automotive",
    category: "Cars",
  },
  {
    image: "/photo3.jpg",
    title: "Street",
    category: "Lifestyle",
  },
  {
    image: "/photo4.jpg",
    title: "Night Session",
    category: "Portrait",
  },
  {
    image: "/photo5.jpg",
    title: "Urban",
    category: "Lifestyle",
  },
  {
    image: "/photo6.jpg",
    title: "BMW M4",
    category: "Cars",
  },
];

export default function PhotographyPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === photos.length - 1 ? 0 : (prev ?? 0) + 1
    );
  };

  const previousImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? photos.length - 1 : (prev ?? 0) - 1
    );
  };

  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="px-10 md:px-20 pt-40 pb-20">

        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-12"
        >
          ← Back to Portfolio
        </Link>

        <p className="uppercase tracking-[0.45em] text-gray-500 text-sm mb-6">
          Portfolio
        </p>

        <h1 className="text-5xl md:text-8xl font-bold leading-none">
          Photography
        </h1>

        <p className="text-gray-400 max-w-2xl mt-8 mb-20 text-lg leading-8">
          A collection of some of my favourite moments, captured through light,
          composition and storytelling.
        </p>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-6">

          {photos.map((photo, index) => (

            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="
                mb-6
                break-inside-avoid
                overflow-hidden
                rounded-2xl
                cursor-pointer
                group
                relative
              "
            >

              <img
                src={photo.image}
                alt={photo.title}
                className="
                  w-full
                  transition-all
                  duration-700
                  group-hover:scale-110
                  group-hover:brightness-50
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                "
              />

              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                "
              >

                <p className="text-sm uppercase tracking-[0.3em] text-gray-300">
                  {photo.category}
                </p>

                <h2 className="text-3xl font-semibold mt-2">
                  {photo.title}
                </h2>

              </div>

            </div>

          ))}

        </div>

      </section>
            {selectedImage !== null && (

        <div
          className="
            fixed
            inset-0
            z-[999]
            bg-black/95
            flex
            items-center
            justify-center
            p-8
          "
          onClick={() => setSelectedImage(null)}
        >

          {/* Fechar */}

          <button
            className="
              absolute
              top-8
              right-10
              text-5xl
              hover:scale-110
              transition
            "
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          {/* Esquerda */}

          <button
            className="
              absolute
              left-6
              md:left-10
              text-6xl
              hover:scale-110
              transition
            "
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
          >
            ‹
          </button>

          {/* Imagem */}

          <img
            src={photos[selectedImage].image}
            alt={photos[selectedImage].title}
            className="
              max-w-[90vw]
              max-h-[88vh]
              object-contain
              rounded-xl
            "
            onClick={(e) => e.stopPropagation()}
          />

          {/* Direita */}

          <button
            className="
              absolute
              right-6
              md:right-10
              text-6xl
              hover:scale-110
              transition
            "
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </button>

          {/* Informação */}

          <div
            className="
              absolute
              bottom-10
              left-1/2
              -translate-x-1/2
              text-center
            "
          >

            <p className="uppercase tracking-[0.3em] text-gray-400 text-sm">
              {photos[selectedImage].category}
            </p>

            <h3 className="text-3xl font-semibold mt-2">
              {photos[selectedImage].title}
            </h3>

            <p className="text-gray-500 mt-3">
              {selectedImage + 1} / {photos.length}
            </p>

          </div>

        </div>

      )}

      <section className="px-10 md:px-20 pb-32">

        <div
          className="
            border
            border-white/10
            rounded-3xl
            p-12
            text-center
            bg-white/[0.02]
          "
        >

          <p className="uppercase tracking-[0.45em] text-gray-500 text-sm">
            Let's Work Together
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-6">
            Ready to create something memorable?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            Whether it's portraits, automotive photography or creative content,
            let's build something that stands out.
          </p>

          <Link
            href="/#contact"
            className="
              inline-block
              mt-10
              border
              border-white
              px-10
              py-4
              rounded-full
              hover:bg-white
              hover:text-black
              transition
            "
          >
            Contact Me
          </Link>

        </div>

      </section>

      <Footer />

      <FloatingSocials />

    </main>
  );
}