import type { Service } from "@/data/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative bg-[#16161C] rounded-xl p-7 border border-[#26262F] hover:border-[#5E6AD2]/40 transition-all duration-300">
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#5E6AD2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="text-3xl mb-4">{service.icon}</div>
        <h3 className="text-white font-semibold text-[15px] mb-1">{service.title}</h3>
        <p className="text-[#5E6AD2] text-[11px] font-medium tracking-wide uppercase mb-3">
          {service.titleEn}
        </p>
        <p className="text-[#8B8B9E] text-[13px] leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}
