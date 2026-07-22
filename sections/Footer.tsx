import {
  FaInstagram,
  FaBehance,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* INSTAGRAM */}

      <div className="border-t border-white/10 border-b border-white/10 py-24">

        <div className="max-w-6xl mx-auto px-8 md:px-20">

          <h2 className="text-5xl font-light text-center mb-16">
            Instagram
          </h2>

          <div className="flex justify-center">

            <a
              href="https://instagram.com/tomasrasteiro_"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-8 transition duration-300"
            >

              {/* FOTO */}

              <div className="w-32 h-32 rounded-full overflow-hidden border border-white/10">

                <img
                  src="/foto tomas.png"
                  alt="Tomás Rasteiro"
                  className="w-full h-full object-cover object-center"
                />

              </div>

              {/* INFO */}

              <div>

                <div className="flex items-center gap-3">

                  <h3 className="text-4xl font-semibold group-hover:text-white transition">
                    Tomás Rasteiro
                  </h3>

                  {/* Verified */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#3797F0"
                    className="w-5 h-5"
                  >
                    <path d="M22 12l-2.09 2.09.3 2.96-2.96.3L15 22l-3-1.35L9 22l-2.25-2.65-2.96-.3.3-2.96L2 12l2.09-2.09-.3-2.96 2.96-.3L9 2l3 1.35L15 2l2.25 2.65 2.96.3-.3 2.96zM10.3 15.3l7-7-1.4-1.4-5.6 5.6-2.6-2.6-1.4 1.4z"/>
                  </svg>

                </div>

                <p className="text-gray-500 text-xl">
                  @tomasrasteiro_
                </p>

              </div>

              {/* BOTÃO */}

              <div
                className="
                  ml-8
                  px-8
                  py-3
                  rounded-lg
                  bg-[#262626]
                  hover:bg-[#363636]
                  transition
                  text-white
                  font-medium
                "
              >
                Follow
              </div>

            </a>

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <div className="py-16">

        <div className="max-w-6xl mx-auto px-8 md:px-20 flex flex-col items-center">

          {/* LOGOS */}

          <div className="flex gap-8 text-3xl mb-8">

            <a
              href="https://wa.me/351928100310"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition hover:scale-110"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://instagram.com/tomasrasteiro_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/tom%C3%A1s-rasteiro-958a5438a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.behance.net/tomsrasteiro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition hover:scale-110"
            >
              <FaBehance />
            </a>

          </div>

          <h3 className="text-xl font-semibold">
            Tomás Rasteiro
          </h3>

          <p className="text-gray-400 mt-2">
            Photographer • Video Editor • Graphic Designer
          </p>

          <p className="text-gray-500 mt-1">
            Portugal
          </p>

          <div className="w-20 h-px bg-white/10 my-8"></div>

          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Tomás Rasteiro. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}