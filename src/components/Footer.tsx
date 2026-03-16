import Link from "next/link";
import { getCompany, getNav, getGmailUrl } from "@/data/site";

export default function Footer() {
  const company = getCompany();
  const nav = getNav();
  const gmailUrl = getGmailUrl();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-[#F5F5F0]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-2">
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
                    className="text-[#B0B0A8] hover:text-white active:text-white text-sm transition-colors inline-block min-h-[44px] flex items-center"
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
                  href={gmailUrl}
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
