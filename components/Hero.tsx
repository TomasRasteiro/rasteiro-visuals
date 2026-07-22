import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        bg-black
        text-white
        overflow-hidden
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "
        style={{
          backgroundImage:
            "url('/chatGPT Image 17_07_2026, 18_23_07.jpg')",
        }}
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/55
        "
      />

      <Reveal>
        <div
          className="
            relative
            z-10
            w-full
            max-w-7xl
            mx-auto
            px-8
            md:px-20
          "
        >
          <div
            className="
              max-w-lg
              text-left
              md:ml-[-40px]
            "
          >
            <h1
              className="
                text-5xl
                md:text-8xl
                font-bold
                leading-none
                mb-6
              "
            >
              Tomás
              <br />
              Rasteiro
            </h1>

            <h2
              className="
                uppercase
                tracking-[0.4em]
                text-sm
                text-gray-300
                mb-8
              "
            >
              Photography • Video Editor • Designer
            </h2>

            <p
              className="
                text-gray-300
                text-lg
                leading-relaxed
                max-w-md
              "
            >
              Creativity, photography, and visual design to transform ideas into impactful images.
              em imagens com impacto.
            </p>

            <a
              href="#portfolio"
              className="
                inline-flex
                mt-10
                border
                border-white
                px-8
                py-4
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
            >
              Ver trabalho
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}