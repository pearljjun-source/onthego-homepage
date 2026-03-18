import Link from "next/link";
import Image from "next/image";
import { getServices, getPortfolio, getCompany } from "@/data/site";
import EmailLink from "@/components/EmailLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 & 포트폴리오 — OnTheGo STUDIO",
  description:
    "AI 기반 앱·웹 개발, 홈페이지 제작, 디지털 마케팅 서비스와 포트폴리오를 소개합니다.",
};

const statusLabel: Record<string, string> = {
  live: "운영 중",
  "in-progress": "개발 중",
  completed: "완료",
};

export default function WorksPage() {
  const services = getServices();
  const portfolio = getPortfolio();
  const company = getCompany();

  return (
    <>
      {/* ── Hero ── */}
      <section className="min-h-[60vh] flex items-end pb-16 md:pb-24 px-8 md:px-12 pt-32">
        <div className="max-w-[1400px] mx-auto w-full">
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#7A7A72] mb-6 block">
            Works
          </span>
          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.95] tracking-tight text-[#1A1A1A] max-w-4xl">
            우리가 만든 것,
            <br />
            <span className="italic text-[#5E6AD2]">만들 수 있는 것</span>
          </h1>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="border-t border-[#DDDDD6]" />
      </div>

      {/* ── Services — 넘버링 리스트 ── */}
      <section className="py-24 md:py-32 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#7A7A72] mb-12 block">
            Services
          </span>

          <div className="border-t border-[#DDDDD6]">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-[#DDDDD6] items-start"
              >
                <div className="md:col-span-1">
                  <span className="text-[12px] text-[#5E6AD2] font-medium">
                    0{i + 1}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-xl md:text-2xl font-normal text-[#1A1A1A] group-hover:text-[#5E6AD2] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <span className="text-[11px] tracking-wide uppercase text-[#7A7A72]">
                    {service.titleEn}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <p className="text-[14px] text-[#7A7A72] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio — 갤러리형 대형 카드 ── */}
      <section className="bg-[#1A1A1A] py-24 md:py-32 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#7A7A72] mb-4 block">
            Selected Works
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light text-[#F5F5F0] mb-16">
            포트폴리오
          </h2>

          {/* 잡지 스타일 — 사진 + 옆 설명 */}
          <div className="space-y-16 md:space-y-24">
            {portfolio.map((item, i) => {
              const Wrapper = item.url ? "a" : "div";
              const linkProps = item.url
                ? { href: item.url, target: "_blank" as const, rel: "noopener noreferrer" }
                : {};
              const isEven = i % 2 === 0;
              const isMobile = item.mockup === "phone";
              const imgColSpan = isMobile ? "md:col-span-4" : "md:col-span-7";
              const txtColSpan = isMobile ? "md:col-span-8" : "md:col-span-5";
              const imgAspect = isMobile ? "aspect-[9/16]" : "aspect-[16/10]";

              return (
                <Wrapper
                  key={item.id}
                  {...linkProps}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center ${
                    item.url ? "cursor-pointer" : ""
                  }`}
                >
                  {/* 이미지 — 독립 호버 줌 */}
                  <div className={`${isEven ? imgColSpan : `${imgColSpan} md:order-2`} group/img relative ${imgAspect} rounded-2xl overflow-hidden ${isMobile ? "max-w-[280px] mx-auto md:mx-0" : ""}`}>
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes={isMobile ? "(max-width: 768px) 280px, 33vw" : "(max-width: 768px) 100vw, 58vw"}
                        className="object-cover object-top group-hover/img:scale-105 transition-transform duration-700 ease-out"
                      />
                    )}
                  </div>

                  {/* 설명 — 독립 호버 색상 */}
                  <div className={`${isEven ? txtColSpan : `${txtColSpan} md:order-1`} group/text flex flex-col gap-4`}>
                    <span className="text-[13px] font-medium text-[#F5F5F0]/50">
                      {item.serviceLabel}
                    </span>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-[#8A8FF8] -mt-2">
                      {statusLabel[item.status]}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-light text-[#F5F5F0] group-hover/text:text-[#8A8FF8] transition-colors duration-700 flex items-center gap-2">
                      {item.title}
                      {item.url && (
                        <svg className="w-4 h-4 text-[#7A7A72] group-hover/text:text-[#8A8FF8] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      )}
                    </h3>
                    <p className="text-[14px] text-[#7A7A72] leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2.5 py-0.5 rounded-full border border-white/20 text-[#B0B0A8] backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 md:py-32 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-6">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#7A7A72] mb-6 block">
                Contact
              </span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-[#1A1A1A] mb-6">
                이야기를
                <br />
                들려주세요
              </h2>
              <p className="text-[15px] text-[#7A7A72] leading-relaxed max-w-md">
                프로젝트에 대해 이야기 나누고 싶으시다면 편하게 연락주세요.
                <br />
                빠른 시일 내에 답변드리겠습니다.
              </p>
            </div>

            <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center">
              <div className="space-y-6 mb-10">
                <div>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-[#7A7A72] mb-2 block">
                    Email
                  </span>
                  <EmailLink className="text-lg text-[#1A1A1A] hover:text-[#5E6AD2] transition-colors">
                    {company.email}
                  </EmailLink>
                </div>
                <div>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-[#7A7A72] mb-2 block">
                    Location
                  </span>
                  <p className="text-lg text-[#1A1A1A]">{company.address}</p>
                </div>
              </div>

              <EmailLink
                className="inline-flex items-center gap-3 w-fit px-8 py-3.5 rounded-full bg-[#1A1A1A] text-[#F5F5F0] text-[13px] hover:bg-[#2D2D2D] transition-colors"
              >
                이메일 보내기
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </EmailLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
