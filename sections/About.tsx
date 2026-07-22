import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-40 px-10 md:px-20"
    >
      <Reveal>

        <p className="uppercase tracking-[0.45em] text-gray-500 text-sm mb-20">
          About
        </p>

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Texto */}

          <div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-10">
              About Me
              <br />
            </h2>

            <p className="text-gray-400 text-lg leading-9 max-w-xl">

              I'm <span className="text-white font-semibold">Tomás Rasteiro</span>,
              a multimedia graduate, photographer, video editor and visual designer
              based in Portugal.

              <br /><br />

              My passion for visual storytelling started during my multimedia
              course, where I developed both the technical knowledge and the
              creative mindset that define my work today.

              <br /><br />

              Since then, I've dedicated myself to photography, cinematic video
              editing and graphic design, always striving to create clean,
              modern and impactful visuals.

              <br /><br />

              Every project is crafted with creativity, precision and attention
              to detail, transforming ideas into memorable visual experiences.

            </p>

          </div>

          {/* Imagem */}

          <div className="flex justify-center">

            <img
              src="/FOTO ABOUT ME.jpg"
              alt="Tomás Rasteiro"
              className="
                w-full
                max-w-md
                object-cover
                rounded-sm
              "
            />

          </div>

        </div>

      </Reveal>
    </section>
  );
}