"use client";

import FloatingSocials from "@/components/FloatingSocials";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import Link from "next/link";


const projects = [
  {
    image: "/design1.jpg",
    title: "YouTube Thumbnail",
    category: "Thumbnail Design",
  },
  {
    image: "/design2.jpg",
    title: "Concert Poster",
    category: "Poster",
  },
  {
    image: "/design3.jpg",
    title: "Brand Identity",
    category: "Branding",
  },
  {
    image: "/design4.jpg",
    title: "Social Media",
    category: "Instagram",
  },
  {
    image: "/design5.jpg",
    title: "Gaming Banner",
    category: "Banner",
  },
  {
    image: "/design6.jpg",
    title: "Logo Concept",
    category: "Logo",
  },
];

export default function DesignPage() {
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
          Design
        </h1>

        <p className="text-gray-400 max-w-2xl mt-8 leading-8">
          Posters, branding, thumbnails and digital visuals created to
          capture attention and communicate ideas with impact.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-24">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group cursor-pointer"
            >

              <div className="overflow-hidden rounded-3xl relative">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[430px]
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                    group-hover:brightness-75
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-transparent
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                />

              </div>

              <div className="mt-6">

                <p className="uppercase tracking-[0.3em] text-gray-500 text-xs">
                  {project.category}
                </p>

                <h2 className="text-2xl font-semibold mt-2">
                  {project.title}
                </h2>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />

      <FloatingSocials />

    </main>
  );
}