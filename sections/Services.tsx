import Reveal from "@/components/Reveal";

const services = [
  {
    number: "01",
    title: "Photography",
    description:
      "Portraits, events and cinematic photography focused on authentic moments and timeless visuals.",
  },
  {
    number: "02",
    title: "Video Editing",
    description:
      "High-quality editing with cinematic storytelling, dynamic pacing and attention to every detail.",
  },
  {
    number: "03",
    title: "Graphic Design",
    description:
      "Creative branding, posters and digital content designed to make every project stand out.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white px-8 md:px-20 py-36"
    >
      <Reveal>

        <p className="uppercase tracking-[0.45em] text-sm text-gray-500 mb-20">
          Services
        </p>


        <div className="space-y-8">

          {services.map((service) => (

            <a
              key={service.number}
              href="#contact"
              className="
                group
                block
                border-b
                border-white/10
                pb-10
                hover:border-white/40
                transition-all
                duration-500
              "
            >

              <div className="grid md:grid-cols-[120px_1fr_auto] items-center gap-10">


                {/* Número */}

                <span
                  className="
                    text-gray-600
                    text-xl
                    font-light
                    group-hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  {service.number}
                </span>


                {/* Conteúdo */}

                <div>

                  <h3
                    className="
                      text-4xl
                      md:text-6xl
                      font-bold
                      leading-none
                      group-hover:translate-x-3
                      transition-all
                      duration-500
                    "
                  >
                    {service.title}
                  </h3>


                  <p className="text-gray-400 mt-5 max-w-2xl leading-8">
                    {service.description}
                  </p>

                </div>


                {/* Contact */}

                <div
                  className="
                    border
                    border-white/10
                    px-6
                    py-2
                    rounded-full
                    uppercase
                    tracking-[0.25em]
                    text-xs
                    text-white
                    transition-all
                    duration-500
                  "
                >
                  Contact Me
                </div>


              </div>


            </a>


          ))}


        </div>


      </Reveal>

    </section>
  );
}