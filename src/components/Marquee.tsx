"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import type { PortfolioItem } from "@/data/types";

export default function Marquee({ items }: { items: PortfolioItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const total = items.length;

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[index] as HTMLElement;
    if (card) {
      scrollRef.current.scrollTo({ left: card.offsetLeft - 40, behavior: "smooth" });
      setCurrent(index);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const cardWidth = (el.children[0] as HTMLElement)?.offsetWidth || 1;
      const idx = Math.round(el.scrollLeft / (cardWidth + 16));
      setCurrent(Math.min(idx, total - 1));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [total]);

  return (
    <div>
      {/* 스와이프 갤러리 */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-8 md:px-12 pb-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="group flex-shrink-0 w-[85vw] md:w-[420px] snap-start rounded-xl overflow-hidden"
          >
            {/* 이미지 */}
            <div className="relative h-[240px] md:h-[260px] overflow-hidden">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                    item.id === "speaky-app" ? "object-[center_17%]" : "object-top"
                  }`}
                />
              )}
            </div>
            {/* 텍스트 */}
            <div className="bg-[#16161C] px-5 py-4">
              <h3 className="text-[15px] font-medium text-[#F5F5F0] mb-0.5 group-hover:text-[#8A8FF8] transition-colors">
                {item.title}
              </h3>
              <p className="text-[12px] text-[#7A7A72]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 네비게이션: 도트 + 화살표 */}
      <div className="flex items-center justify-between px-8 md:px-12 mt-4">
        {/* 도트 인디케이터 */}
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-[#5E6AD2]" : "w-2 bg-[#444]"
              }`}
            />
          ))}
        </div>

        {/* 화살표 */}
        <div className="flex gap-2">
          <button
            onClick={() => scrollTo(Math.max(0, current - 1))}
            className="w-10 h-10 rounded-full border border-[#444] flex items-center justify-center text-[#7A7A72] hover:text-[#F5F5F0] hover:border-[#F5F5F0] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollTo(Math.min(total - 1, current + 1))}
            className="w-10 h-10 rounded-full border border-[#444] flex items-center justify-center text-[#7A7A72] hover:text-[#F5F5F0] hover:border-[#F5F5F0] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
