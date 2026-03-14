"use client";

import { useState, useEffect } from "react";

const words1 = ["idea", "vision", "dream", "concept"];
const words2 = ["craft", "design", "code", "creation"];

export default function RotatingSlogan() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setFade(false);
      timeoutId = setTimeout(() => {
        setIndex((prev) => (prev + 1) % words1.length);
        setFade(true);
      }, 600);
    }, 2800);
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <p className="text-[clamp(1.65rem,3.3vw,2.4rem)] font-light tracking-[0.1em] uppercase text-[#1A1A1A] mb-20 whitespace-nowrap">
      Your{" "}
      <span
        className={`inline-block min-w-[5em] text-center text-[#5E6AD2] transition-all duration-500 ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        {words1[index]}
      </span>
      , our{" "}
      <span
        className={`inline-block min-w-[5em] text-center text-[#5E6AD2] transition-all duration-500 ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {words2[index]}
      </span>
      .
    </p>
  );
}
