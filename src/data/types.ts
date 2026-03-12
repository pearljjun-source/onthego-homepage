// ── 사이트 전체 데이터 스키마 타입 정의 ──

export interface CompanyInfo {
  name: string;
  nameKo: string;
  ceo: string;
  ceoEn: string;
  businessNumber: string;
  address: string;
  addressEn: string;
  email: string;
  phone: string;
  identity: string;
  identityEn: string;
}

export interface Slogan {
  en: string;
  ko: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  icon: string; // emoji or icon identifier
}

export interface PortfolioItem {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  tags: string[];
  status: "live" | "in-progress" | "completed";
  image?: string;
  mockup?: "laptop" | "phone";
  url?: string;
}

export interface CeoProfile {
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  bio: string[];
  highlights: string[];
}

export interface SiteData {
  company: CompanyInfo;
  slogan: Slogan;
  nav: NavItem[];
  services: Service[];
  portfolio: PortfolioItem[];
  ceo: CeoProfile;
}
