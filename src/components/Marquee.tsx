"use client";

import Image from "next/image";
import { useState } from "react";
import type { PortfolioItem } from "@/data/types";

function MarqueeCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[320px] rounded-xl overflow-hidden group">
      <div className="relative h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden">
        {item.image && (
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 320px"
            loading="lazy"
            className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
              item.id === "speaky-app" ? "object-[center_17%]" : "object-top"
            }`}
          />
        )}
      </div>
      <div className="bg-[#16161C] px-5 py-4">
        <h3 className="text-[14px] font-medium text-[#F5F5F0] mb-0.5 group-hover:text-[#8A8FF8] transition-colors">
          {item.title}
        </h3>
        <p className="text-[12px] text-[#7A7A72]">{item.description}</p>
      </div>
    </div>
  );
}

export default function Marquee({ items }: { items: PortfolioItem[] }) {
  const [paused, setPaused] = useState(false);

  const row1 = items.slice(0, Math.ceil(items.length / 2));
  const row2 = items.slice(Math.ceil(items.length / 2));

  return (
    <div
      className="space-y-4 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        <div
          className="flex gap-4"
          style={{
            animation: "marquee-left 30s linear infinite",
            animationPlayState: paused ? "paused" : "running",
            willChange: "transform",
          }}
        >
          {[...row1, ...row1, ...row1].map((item, i) => (
            <MarqueeCard key={`${item.id}-${i}`} item={item} />
          ))}
        </div>
      </div>

      <div className="relative">
        <div
          className="flex gap-4"
          style={{
            animation: "marquee-right 30s linear infinite",
            animationPlayState: paused ? "paused" : "running",
            willChange: "transform",
          }}
        >
          {[...row2, ...row2, ...row2].map((item, i) => (
            <MarqueeCard key={`${item.id}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
