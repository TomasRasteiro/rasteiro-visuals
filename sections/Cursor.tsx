"use client";

import { useEffect, useState } from "react";

export default function Cursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [trail, setTrail] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);


  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });


      setTrail({
        x: e.clientX,
        y: e.clientY,
      });

    };


    const handleHover = () => setHovering(true);
    const handleLeave = () => setHovering(false);


    window.addEventListener("mousemove", moveCursor);


    const elements = document.querySelectorAll(
      "a, button, img"
    );


    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });


    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };


  }, []);


  return (
    <>

      {/* Círculo atrás */}
      <div
        className="
          fixed
          pointer-events-none
          z-[998]
          w-8
          h-8
          rounded-full
          border
          border-white/40
        "
        style={{
          transform: `
            translate(${trail.x}px, ${trail.y}px)
            translate(-50%, -50%)
          `,
          transition: "transform 0.15s ease-out",
        }}
      />


      {/* Cursor principal */}
      <div
        className={`
          fixed
          pointer-events-none
          z-[999]
          rounded-full
          bg-white
          mix-blend-difference
          transition-all
          duration-200
          ${
            hovering
            ? "w-10 h-10"
            : "w-3 h-3"
          }
        `}
        style={{
          transform: `
            translate(${position.x}px, ${position.y}px)
            translate(-50%, -50%)
          `,
        }}
      />

    </>
  );
}