import type { SiteData } from "./types";

// ── 사이트 전체 중앙 데이터 ──
// 모든 페이지에서 이 데이터를 import해서 사용합니다.
// 수정이 필요하면 이 파일만 변경하면 됩니다.

const siteData: SiteData = {
  company: {
    name: "OnTheGo STUDIO",
    nameKo: "온더고 스튜디오",
    ceo: "전진주",
    ceoEn: "Jinju Jun",
    businessNumber: "312-49-00883",
    address: "충남 천안시 불당동 1530번지 7층",
    addressEn: "7F, 1530 Buldang-dong, Cheonan-si, Chungnam",
    email: "hello@onthegostudio.kr",
    phone: "010-4032-6474",
    identity: "교육 전문가 출신 AI 크리에이티브 스튜디오",
    identityEn: "AI Creative Studio by Education Experts",
  },

  slogan: {
    en: "Your idea, our craft.",
    ko: "기획부터 완성까지, 당신의 아이디어에 집중합니다",
  },

  nav: [
    { label: "홈", href: "/" },
    { label: "회사소개", href: "/about" },
    { label: "서비스", href: "/works" },
  ],

  services: [
    {
      id: "ai-dev",
      title: "AI 기반 앱 & 웹 개발",
      titleEn: "AI-Powered App & Web Development",
      description:
        "AI 기술을 활용한 맞춤형 웹·앱 솔루션을 기획부터 런칭까지 함께합니다.",
      icon: "🤖",
    },
    {
      id: "homepage",
      title: "홈페이지 제작",
      titleEn: "Website Design & Development",
      description:
        "브랜드 아이덴티티를 반영한 반응형 웹사이트를 제작합니다.",
      icon: "🌐",
    },
    {
      id: "creative",
      title: "AI 크리에이티브 콘텐츠 제작",
      titleEn: "AI Creative Content Production",
      description:
        "AI를 활용한 영상, 이미지, 카피라이팅 등 크리에이티브 콘텐츠를 제작합니다.",
      icon: "🎨",
    },
    {
      id: "marketing",
      title: "디지털 마케팅",
      titleEn: "Digital Marketing",
      description:
        "네이버 광고, SEO 최적화, 콘텐츠 마케팅으로 비즈니스 성장을 돕습니다.",
      icon: "📈",
    },
  ],

  portfolio: [
    {
      id: "speaky",
      title: "Speaky",
      titleEn: "Speaky",
      description: "AI 기반 OPIc 스피킹 연습 웹 플랫폼",
      descriptionEn: "AI-powered OPIc speaking practice platform",
      tags: ["Web", "AI", "B2B SaaS", "Education"],
      status: "live",
      image: "/images/works-speaky.png",
      mockup: "laptop",
      url: "https://speaky.co.kr",
    },
    {
      id: "speaky-app",
      title: "Speaky App",
      titleEn: "Speaky Mobile",
      description: "OPIc 스피킹 연습 모바일 앱",
      descriptionEn: "OPIc speaking practice mobile app",
      tags: ["React Native", "AI", "Mobile"],
      status: "live",
      image: "/images/works-speaky2.jpg",
      mockup: "phone",
    },
    {
      id: "gday",
      title: "G'day English Lab",
      titleEn: "G'day English Lab",
      description: "개인 일정 및 학생 관리 앱",
      descriptionEn: "Schedule & student management app",
      tags: ["Mobile", "Education", "Management"],
      status: "live",
      image: "/images/works-gdayenglish.jpg",
      mockup: "phone",
      url: "https://tutoring-app-smoky.vercel.app/",
    },
    {
      id: "chanonlja",
      title: "차놀자",
      titleEn: "Chanonlja",
      description: "렌터카 프랜차이즈 본사 홈페이지",
      descriptionEn: "Car rental franchise corporate website",
      tags: ["Web", "Franchise", "Responsive"],
      status: "completed",
      image: "/images/works-chanolja.png",
      mockup: "laptop",
      url: "https://차놀자.net",
    },
    {
      id: "youtube",
      title: "차놀자 Youtube",
      titleEn: "Chanonlja Youtube",
      description: "유튜브 콘텐츠 기획 및 제작",
      descriptionEn: "YouTube content planning & production",
      tags: ["YouTube", "Content", "Marketing"],
      status: "live",
      image: "/images/works-youtube.png",
      mockup: "laptop",
      url: "https://www.youtube.com/@chanolja-official/videos",
    },
    {
      id: "naverad",
      title: "네이버 검색광고",
      titleEn: "Naver Search Ad",
      description: "네이버 검색광고 상위노출 운영",
      descriptionEn: "Naver search ad top placement management",
      tags: ["Naver", "SEO", "Marketing"],
      status: "live",
      image: "/images/works-naverad.png",
      mockup: "laptop",
      url: "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EB%A0%8C%ED%8A%B8%EC%B9%B4+%EC%B0%BD%EC%97%85&ackey=mm4lsm11",
    },
    {
      id: "naverblog",
      title: "차놀자 블로그",
      titleEn: "Chanonlja Blog",
      description: "네이버 홈페이지형 블로그 제작",
      descriptionEn: "Naver homepage-style blog design",
      tags: ["Naver", "Blog", "Branding"],
      status: "completed",
      image: "/images/works-naverblog.png",
      mockup: "laptop",
      url: "https://blog.naver.com/chanolja_official_",
    },
    {
      id: "onthegostudio",
      title: "OnTheGo STUDIO",
      titleEn: "OnTheGo STUDIO",
      description: "회사 홈페이지 기획 및 개발",
      descriptionEn: "Corporate website design & development",
      tags: ["Web", "Next.js", "Tailwind"],
      status: "live",
      image: "/images/works-onthegostudio.png",
      mockup: "laptop",
      url: "https://onthegostudio.kr",
    },
  ],

  ceo: {
    name: "전진주",
    nameEn: "Jinju Jun",
    title: "대표 / Founder",
    titleEn: "CEO / Founder",
    bio: [
      "20년간 영어교육 현장에서 학생들과 함께한 교육 전문가입니다.",
      "교육 경험을 바탕으로 AI 기반 학습 도구를 기획하고 개발하는 OnTheGo STUDIO를 설립했습니다.",
      "기술과 교육의 접점에서 진짜 쓸모 있는 제품을 만드는 것을 목표로 합니다.",
    ],
    highlights: [
      "호주 UNSW 통번역 석사",
      "영어교육 경력 20년",
      "AI 기반 교육 앱 기획·개발",
      "B2B SaaS 서비스",
      "웹·앱 풀스택 프로젝트 리드",
    ],
  },
};

export default siteData;

// ── 편의 접근 함수 ──

export const getCompany = () => siteData.company;
export const getSlogan = () => siteData.slogan;
export const getNav = () => siteData.nav;
export const getServices = () => siteData.services;
export const getPortfolio = () => siteData.portfolio;
export const getCeo = () => siteData.ceo;

export const getGmailUrl = () => {
  const email = siteData.company.email;
  const subject = encodeURIComponent("프로젝트 문의");
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;
};

export const getServiceById = (id: string) =>
  siteData.services.find((s) => s.id === id);

export const getPortfolioById = (id: string) =>
  siteData.portfolio.find((p) => p.id === id);
