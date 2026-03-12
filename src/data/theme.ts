// ── 컬러 팔레트 & 디자인 토큰 ──
// 벤치마킹: Revolut (레이아웃/타이포) + Basic Agency (미니멀/여백/밝은톤)

export const colors = {
  primary: "#5E6AD2",       // 인디고 — 포인트 컬러
  primaryLight: "#8A8FF8",  // 라이트 인디고 — 호버
  bg: "#F5F5F0",            // 웜 오프화이트 — 메인 배경 (Basic Agency 스타일)
  bgAlt: "#EAEAE4",         // 살짝 어두운 섹션 배경
  dark: "#1A1A1A",          // 텍스트 블랙
  darkSoft: "#2D2D2D",      // 소프트 블랙
  gray: "#7A7A72",          // 뮤트 그레이
  grayLight: "#B0B0A8",     // 라이트 그레이
  white: "#FFFFFF",
  border: "#DDDDD6",        // 보더
} as const;

export const images = {
  logoDark: "/images/logo-dark.png",
  logoLight: "/images/logo-light.png",
} as const;
