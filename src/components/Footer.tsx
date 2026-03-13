import Link from "next/link";
import { getCompany, getNav } from "@/data/site";

export default function Footer() {
  const company = getCompany();
  const nav = getNav();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-[#F5F5F0]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light mb-4">{company.name}</h3>
            <p className="text-[#7A7A72] text-sm leading-relaxed max-w-sm">
              {company.identity}
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#7A7A72] mb-4">
              바로가기
            </h4>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#B0B0A8] hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-[#7A7A72] mb-4">
              Info
            </h4>
            <ul className="space-y-2.5 text-[#B0B0A8] text-sm">
              <li>{company.address}</li>
              <li>사업자등록번호 {company.businessNumber}</li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@onthegostudio.kr&su=%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EB%AC%B8%EC%9D%98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#2D2D2D] text-center text-[#7A7A72] text-xs">
          <span>© {year} {company.name}</span>
        </div>
      </div>
    </footer>
  );
}
