"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-black/75 backdrop-blur-xl py-2"
            : "bg-transparent py-3"
        }
      `}
    >
      <div
        className="
          w-full
          flex
          items-center
          justify-between
          px-8
          md : px-16
          md:px-20
        "
      >
        {/* LOGO */}

        <a href="/#home" className="flex items-center">
          <Image
            src="/LOGO 5.png"
            alt="Tomás Rasteiro"
            width={500}
            height={150}
            priority
            className="
              w-40
              md:w-44
              lg:w-48
              h-auto
              object-contain
              transition-opacity
              duration-300
              hover:opacity-80
            "
          />
        </a>

        {/* LINKS */}

        <div
          className="
            flex
            items-center
            gap-8
            md:gap-10
            uppercase
            tracking-[0.25em]
            text-xs
            font-medium
          "
        >
          <a
            href="/#about"
            className="text-white hover:text-gray-400 transition"
          >
            About
          </a>

          <a
            href="/#services"
            className="text-white hover:text-gray-400 transition"
          >
            Services
          </a>

          <a
            href="/#portfolio"
            className="text-white hover:text-gray-400 transition"
          >
            Portfolio
          </a>

          <a
            href="/#contact"
            className="text-white hover:text-gray-400 transition"
          >
            Contact
          </a>

          <a
            href="https://www.instagram.com/tomasrasteiro_/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-orange-500
              hover:text-gray-400
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}