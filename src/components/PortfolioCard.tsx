import type { PortfolioItem } from "@/data/types";

const statusLabel: Record<PortfolioItem["status"], string> = {
  live: "운영 중",
  "in-progress": "개발 중",
  completed: "완료",
};

const statusDot: Record<PortfolioItem["status"], string> = {
  live: "bg-green-400",
  "in-progress": "bg-yellow-400",
  completed: "bg-[#8B8B9E]",
};

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group relative bg-[#16161C] rounded-xl p-7 border border-[#26262F] hover:border-[#5E6AD2]/40 transition-all duration-300">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#5E6AD2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold text-lg">{item.title}</h3>
          <span className="flex items-center gap-1.5 text-[11px] text-[#8B8B9E]">
            <span className={`w-1.5 h-1.5 rounded-full ${statusDot[item.status]}`} />
            {statusLabel[item.status]}
          </span>
        </div>
        <p className="text-[#8B8B9E] text-[13px] mb-1">{item.description}</p>
        <p className="text-[#8B8B9E]/60 text-[12px] mb-5">{item.descriptionEn}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#5E6AD2]/10 text-[#8A8FF8] border border-[#5E6AD2]/15"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
