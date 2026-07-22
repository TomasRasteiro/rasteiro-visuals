"use client";

import Reveal from "@/components/Reveal";

const categories = [
  {
    title: "Photography",
    image: "/photography_tab_cover2.jpg",
    href: "/portfolio/photography",
    number: "01",
  },
  {
    title: "Video Editing",
    image: "/video_editing_tab_cover.jpg",
    href: "/portfolio/video",
    number: "02",
  },
  {
    title: "Design",
    image: "/design_tab_cover.jpg",
    href: "/portfolio/design",
    number: "03",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-black text-white px-10 md:px-20 py-32"
    >
      <p className="text-gray-400 uppercase tracking-widest text-sm mb-12">
        Portfolio
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {categories.map((category, index) => (

          <Reveal
            key={index}
            delay={index * 0.15}
          >

            <a
              href={category.href}
              className="
                group
                relative
                block
                overflow-hidden
                rounded-3xl
                h-[520px]
              "
            >

              <img
                src={category.image}
                alt={category.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
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
                  transition-all
                  duration-500
                  group-hover:bg-black/60
                "
              />

              <div
                className="
                  absolute
                  bottom-10
                  left-10
                "
              >

                <span
                  className="
                    text-white/40
                    tracking-[0.4em]
                    text-sm
                    uppercase
                  "
                >
                  {category.number}
                </span>

                <h2
                  className="
                    text-4xl
                    font-bold
                    mt-3
                  "
                >
                  {category.title}
                </h2>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    opacity-0
                    translate-y-4
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    group-hover:translate-y-0
                  "
                >

                  <span
                    className="
                      uppercase
                      tracking-[0.3em]
                      text-sm
                    "
                  >
                    Explore
                  </span>

                  <span className="text-2xl">
                    →
                  </span>

                </div>

              </div>

            </a>

          </Reveal>

        ))}

      </div>

      <div className="flex justify-center mt-20">

        <a
          href="/portfolio"
          className="
            border
            border-white/20
            px-10
            py-4
            rounded-full
            uppercase
            tracking-[0.35em]
            text-sm
            transition-all
            duration-500
            hover:bg-white
            hover:text-black
            hover:scale-105
          "
        >
          Explore Full Portfolio →
        </a>

      </div>
          </section>
  );
}