import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        bg-black
        text-white
        px-10
        md:px-20
        py-32
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-2
          gap-20
          items-center
        "
      >


        {/* FOTO */}

        <Reveal>

          <div
            className="
              relative
              overflow-hidden
              group
            "
          >

            <img
              src="/foto tomas.png"
              alt="Tomás Rasteiro"
              className="
                w-full
                h-[650px]
                object-cover
                transition-all
                duration-700
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                to-transparent
              "
            />

          </div>

        </Reveal>



        {/* FORMULÁRIO */}

        <Reveal>

          <div>

            <p
              className="
                text-gray-400
                uppercase
                tracking-[0.4em]
                text-sm
                mb-8
              "
            >
              Contact
            </p>


            <h2
              className="
                text-5xl
                md:text-7xl
                font-bold
                mb-12
              "
            >
              Vamos criar
              <br />
              algo incrível.
            </h2>



            <form className="space-y-10">


              <input
                type="text"
                placeholder="Nome"
                className="
                  w-full
                  bg-transparent
                  border-b
                  border-white/30
                  py-4
                  outline-none
                  focus:border-white
                  transition
                "
              />


              <input
                type="email"
                placeholder="Email"
                className="
                  w-full
                  bg-transparent
                  border-b
                  border-white/30
                  py-4
                  outline-none
                  focus:border-white
                  transition
                "
              />


              <input
                type="text"
                placeholder="Assunto"
                className="
                  w-full
                  bg-transparent
                  border-b
                  border-white/30
                  py-4
                  outline-none
                  focus:border-white
                  transition
                "
              />


              <textarea
                placeholder="Mensagem"
                rows={4}
                className="
                  w-full
                  bg-transparent
                  border-b
                  border-white/30
                  py-4
                  outline-none
                  focus:border-white
                  transition
                  resize-none
                "
              />



              <button
                className="
                  border
                  border-white
                  px-10
                  py-4
                  uppercase
                  tracking-widest
                  text-sm
                  hover:bg-white
                  hover:text-black
                  transition-all
                  duration-500
                "
              >
                Enviar
              </button>

              <div className="mt-10 space-y-3 text-gray-400 text-sm">

  <a
    href="mailto:tomasrasteiro0@gmail.com"
    className="block hover:text-white transition"
  >
    tomasrasteiro0@gmail.com
  </a>


  <a
    href="https://wa.me/351928100310"
    target="_blank"
    className="block hover:text-white transition"
  >
    +351 928 100 310
  </a>

</div>


            </form>


          </div>

        </Reveal>


      </div>


    </section>
  );
}