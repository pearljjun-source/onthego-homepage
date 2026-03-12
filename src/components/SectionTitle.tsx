interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tag?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
  tag,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} mb-16 md:mb-20`}>
      {tag && (
        <span className="block text-[11px] tracking-[0.2em] uppercase text-[#7A7A72] mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight text-[#1A1A1A]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-[16px] text-[#7A7A72] leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
