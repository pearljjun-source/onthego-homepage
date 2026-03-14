import Link from "next/link";
import { getSlogan, getServices, getPortfolio, getCompany, getGmailUrl } from "@/data/site";
import { images } from "@/data/theme";
import RotatingSlogan from "@/components/RotatingSlogan";
import Marquee from "@/components/Marquee";

export default function Home() {
  const slogan = getSlogan();
  const services = getServices();
  const portfolio = getPortfolio();
  const company = getCompany();
  const gmailUrl = getGmailUrl();

  return (
    <>
      {/* ── Hero — 한국어 슬로건 중앙 배치, 에디토리얼 타이포 ── */}
      <section className="min-h-[100svh] flex flex-col items-center px-6 sm:px-8 md:px-12 relative pt-[20vh] md:pt-[20vh]">
        {/* 상단 영문 슬로건 — 단어 순환 */}
        <RotatingSlogan />

        {/* 메인 한국어 슬로건 */}
        <h1 className="text-center leading-[1.15] tracking-tight text-[#1A1A1A]">
          <span className="block text-[clamp(1.8rem,3.75vw,2.4rem)] font-light text-[#7A7A72] mb-4">
            기획부터 완성까지,
          </span>
          <span className="block text-[clamp(2.4rem,5.5vw,5rem)] font-light">
            당신의{" "}
            <span className="italic font-normal text-[#5E6AD2]">아이디어</span>{" "}에
            집중합니다
          </span>
        </h1>

        {/* 스크롤 힌트 */}
        <div className="absolute bottom-28 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#B0B0A8]">
          <span className="text-[10px] tracking-[0.15em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-[#DDDDD6]" />
        </div>
      </section>

      {/* ── 구분선 ── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12">
        <div className="border-t border-[#DDDDD6]" />
      </div>

      {/* ── What We Do — 키워드 중심 요약 ── */}
      <section className="py-16 sm:py-24 md:py-32 px-6 sm:px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#7A7A72] mb-12 block">
            What We Do
          </span>
          <div className="space-y-0 border-t border-[#DDDDD6]">
            {services.map((item) => (
              <Link
                key={item.id}
                href="/works"
                className="group flex items-center justify-between py-6 md:py-8 border-b border-[#DDDDD6] min-h-[44px] active:opacity-70 transition-opacity"
              >
                <h3 className="text-[clamp(1.4rem,3vw,2.5rem)] font-light text-[#1A1A1A] group-hover:text-[#5E6AD2] transition-colors">
                  {item.titleEn}
                </h3>
                <span className="text-[13px] text-[#7A7A72] hidden md:block">
                  {item.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview — 무한 마퀴 갤러리 ── */}
      <section className="bg-[#1A1A1A] py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#7A7A72] mb-4 block">
              Selected Works
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.1] text-[#F5F5F0]">
              포트폴리오
            </h2>
          </div>
          <Link
            href="/works"
            className="text-[13px] text-[#7A7A72] hover:text-[#F5F5F0] active:text-[#F5F5F0] transition-colors flex items-center gap-2 min-h-[44px]"
          >
            전체 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <Marquee items={portfolio} />
      </section>

      {/* ── CTA — 미니멀, 넉넉한 여백 ── */}
      <section className="py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-12 text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-light leading-[1.15] tracking-tight text-[#1A1A1A] mb-6">
            프로젝트를 함께
            <br />
            시작할까요?
          </h2>
          <p className="text-[15px] text-[#7A7A72] mb-10">
            아이디어만 가져오세요. 나머지는 저희가 함께합니다.
          </p>
          <a
            href="{gmailUrl}"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 rounded-full bg-[#1A1A1A] text-[#F5F5F0] text-[13px] hover:bg-[#2D2D2D] active:bg-[#3D3D3D] transition-colors min-h-[44px]"
          >
            문의하기
          </a>
        </div>
      </section>
    </>
  );
}
