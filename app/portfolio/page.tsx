"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import FloatingSocials from "@/components/FloatingSocials";

const categories = [
  {
    title: "Video Editing",
    subtitle: "Cinematics • YouTube • Commercial",
    image: "/video_editing_tab_cover.jpg",
    href: "/portfolio/video",
    number: "01",
  },
  {
    title: "Photography",
    subtitle: "Portraits • Lifestyle • Automotive",
    image: "/photography_tab_cover2.jpg",
    href: "/portfolio/photography",
    number: "02",
  },
  {
    title: "Design",
    subtitle: "Posters • Branding • Social Media",
    image: "/design_tab_cover.jpg",
    href: "/portfolio/design",
    number: "03",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="pt-40 pb-32 px-10 md:px-20">

        <p className="uppercase tracking-[0.4em] text-gray-500 text-sm mb-6">
          Portfolio
        </p>

        <h1 className="text-5xl md:text-8xl font-bold mb-24">
          Explore My Work
        </h1>

        <div className="space-y-16">

          {categories.map((category) => (

            <Link
              key={category.title}
              href={category.href}
              className="group block"
            >

              <div className="relative h-[500px] overflow-hidden rounded-3xl">

                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/60 transition" />

                <div className="absolute inset-0 flex flex-col justify-end p-12">

                  <span className="text-7xl font-bold text-white/20 mb-2">
                    {category.number}
                  </span>

                  <h2 className="text-5xl font-bold">
                    {category.title}
                  </h2>

                  <p className="text-gray-300 mt-2">
                    {category.subtitle}
                  </p>

                  <span className="mt-8 uppercase tracking-[0.3em] text-sm">
                    Explore →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

      <Footer />

      <FloatingSocials />

    </main>
  );
}