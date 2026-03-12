import Image from "next/image";
import { getCompany, getCeo, getSlogan } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사소개 — OnTheGo STUDIO",
  description:
    "교육 전문가 출신 AI 크리에이티브 스튜디오, 온더고 스튜디오를 소개합니다.",
};

export default function AboutPage() {
  const company = getCompany();
  const ceo = getCeo();
  const slogan = getSlogan();

  return (
    <>
      {/* ── Hero — 대형 타이포 ── */}
      <section className="min-h-[70vh] flex items-end pb-16 md:pb-24 px-8 md:px-12 pt-32">
        <div className="max-w-[1400px] mx-auto w-full">
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#7A7A72] mb-6 block">
            About
          </span>
          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.95] tracking-tight text-[#1A1A1A] max-w-4xl">
            교육에서 시작해
            <br />
            <span className="italic text-[#5E6AD2]">기술로 연결하다</span>
          </h1>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="border-t border-[#DDDDD6]" />
      </div>

      {/* ── Story — 좌우 비대칭 레이아웃 ── */}
      <section className="py-24 md:py-32 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-24">
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#7A7A72] mb-4 block">
                  Our Story
                </span>
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.15] text-[#1A1A1A]">
                  {company.identity}
                </h2>
              </div>
            </div>

            <div className="md:col-span-7 md:col-start-6 space-y-8 text-[16px] text-[#7A7A72] leading-[1.8]">
              <p>
                <span className="text-[#1A1A1A] font-medium">{company.name}</span>은
                20년간의 교육 현장 경험과 최신 AI 기술을 결합하여
                진짜 쓸모 있는 디지털 제품을 만드는 스튜디오입니다.
              </p>
              <p>
                &ldquo;{slogan.en}&rdquo; — {slogan.ko}.
                고객의 아이디어에 집중하고, 기획부터 디자인, 개발, 마케팅까지
                원스톱으로 제공합니다.
              </p>
              <p>
                교육이라는 본질에서 출발했기에, 사용자가 실제로 체감할 수 있는
                가치를 만드는 데 집중합니다. 복잡한 기술도 쉽게, 어려운 개념도
                직관적으로 전달하는 것이 우리의 강점입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values — 가로 스크롤 느낌의 3단 ── */}
      <section className="bg-[#EAEAE4] py-24 md:py-32 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#7A7A72] mb-12 block">
            Values
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#DDDDD6]">
            {[
              {
                num: "01",
                title: "교육에서 출발",
                desc: "20년 교육 경험에서 비롯된 사용자 중심 사고로 제품을 설계합니다. 배우는 사람의 관점에서 모든 인터페이스를 만듭니다.",
              },
              {
                num: "02",
                title: "AI 네이티브",
                desc: "AI를 단순 도구가 아닌 제품의 핵심 가치로 활용합니다. 기술의 가능성을 실제 사용자 경험으로 연결합니다.",
              },
              {
                num: "03",
                title: "끝까지 함께",
                desc: "기획부터 런칭, 그 이후 운영까지 파트너로 함께합니다. 일회성 외주가 아닌 지속적인 파트너십을 지향합니다.",
              },
            ].map((v) => (
              <div
                key={v.num}
                className="py-10 md:py-12 md:px-8 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-r last:border-r-0 border-[#DDDDD6]"
              >
                <span className="text-[12px] text-[#5E6AD2] font-medium mb-4 block">
                  {v.num}
                </span>
                <h3 className="text-xl font-normal text-[#1A1A1A] mb-3">
                  {v.title}
                </h3>
                <p className="text-[14px] text-[#7A7A72] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder — 풀폭 2단 ── */}
      <section className="py-24 md:py-32 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            {/* 왼쪽: 프로필 */}
            <div className="md:col-span-4">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#7A7A72] mb-6 block">
                Founder
              </span>
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
                <Image
                  src="/images/profile.jpg"
                  alt="전진주 대표"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover object-[center_55%]"
                />
              </div>
              <h3 className="text-3xl font-light text-[#1A1A1A] mb-1">
                {ceo.name}
              </h3>
              <p className="text-[14px] text-[#5E6AD2] mb-1">{ceo.nameEn}</p>
              <p className="text-[13px] text-[#7A7A72]">{ceo.title}</p>
            </div>

            {/* 오른쪽: 바이오 + 하이라이트 */}
            <div className="md:col-span-7 md:col-start-6">
              <div className="space-y-5 mb-12">
                {ceo.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[16px] text-[#7A7A72] leading-[1.8]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="border-t border-[#DDDDD6] pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ceo.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-3 text-[14px] text-[#1A1A1A]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
