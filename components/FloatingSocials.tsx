"use client";

import { useState } from "react";
import {
  FaInstagram,
  FaBehance,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

export default function FloatingSocials() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[9999]">

      {/* MENU */}

      <div
        className={`
          absolute
          bottom-20
          right-0
          w-64
          rounded-2xl
          border
          border-white/10
          bg-black/95
          backdrop-blur-xl
          overflow-hidden
          transition-all
          duration-300
          ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }
        `}
      >

        <a
          href="https://instagram.com/tomasrasteiro_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-5 py-4 hover:bg-white/5 transition"
        >
          <div className="flex items-center gap-3">
            <FaInstagram size={20} />
            <span>Instagram</span>
          </div>

          ↗
        </a>

        <a
          href="https://www.behance.net/tomsrasteiro"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-5 py-4 hover:bg-white/5 transition"
        >
          <div className="flex items-center gap-3">
            <FaBehance size={20} />
            <span>Behance</span>
          </div>

          ↗
        </a>

        <a
          href="https://www.linkedin.com/in/tom%C3%A1s-rasteiro-958a5438a/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-5 py-4 hover:bg-white/5 transition"
        >
          <div className="flex items-center gap-3">
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </div>

          ↗
        </a>

        <a
          href="https://wa.me/351928100310"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-5 py-4 hover:bg-white/5 transition"
        >
          <div className="flex items-center gap-3">
            <FaWhatsapp size={20} />
            <span>WhatsApp</span>
          </div>

          ↗
        </a>

      </div>

      {/* BOTÃO */}

      <button
        onClick={() => setOpen(!open)}
        className="
          w-16
          h-16
          rounded-full
          bg-orange-500 
          text-black
          shadow-2xl
          flex
          items-center
          justify-center
          hover:scale-110
          transition-all
        "
      >
        <HiPlus
          size={30}
          className={`transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>

    </div>
  );
}