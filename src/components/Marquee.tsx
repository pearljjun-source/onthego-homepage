"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { PortfolioItem } from "@/data/types";

function MarqueeCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="flex-shrink-0 w-[320px] rounded-xl overflow-hidden group">
      {/* 이미지 영역 — 원래 크기 */}
      <div className="relative h-[220px] overflow-hidden">
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
      {/* 텍스트 영역 — 아래쪽 별도 배경 */}
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
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  // 첫 줄: 앞에서 4개, 둘째 줄: 뒤에서부터
  const row1 = items.slice(0, Math.ceil(items.length / 2));
  const row2 = items.slice(Math.ceil(items.length / 2));

  return (
    <div
      className="space-y-4 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Row 1 — 왼쪽으로 스크롤 */}
      <div className="relative">
        <div
          ref={ref1}
          className="flex gap-4"
          style={{
            animation: "marquee-left 30s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {[...row1, ...row1, ...row1].map((item, i) => (
            <MarqueeCard key={`${item.id}-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — 오른쪽으로 스크롤 */}
      <div className="relative">
        <div
          ref={ref2}
          className="flex gap-4"
          style={{
            animation: "marquee-right 30s linear infinite",
            animationPlayState: paused ? "paused" : "running",
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
