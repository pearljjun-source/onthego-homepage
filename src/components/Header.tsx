"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getNav, getGmailUrl } from "@/data/site";
import { images } from "@/data/theme";

export default function Header() {
  const pathname = usePathname();
  const nav = getNav();
  const gmailUrl = getGmailUrl();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F0]/80 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src={images.logoLight}
            alt="OnTheGo STUDIO"
            width={130}
            height={43}
            priority
          />
        </Link>

        {/* Desktop Nav — Basic Agency 스타일: 심플 텍스트 */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[13px] tracking-wide transition-colors duration-200 min-h-[44px] flex items-center ${
                pathname === item.href
                  ? "text-[#1A1A1A]"
                  : "text-[#7A7A72] hover:text-[#1A1A1A]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={gmailUrl}
            className="text-[13px] px-5 py-2 rounded-full bg-[#1A1A1A] text-[#F5F5F0] hover:bg-[#2D2D2D] active:bg-[#3D3D3D] transition-colors duration-200 min-h-[44px] flex items-center"
          >
            문의하기
          </a>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden text-[#1A1A1A] min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#F5F5F0] border-t border-[#DDDDD6] px-8 pb-6 pt-4 space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm min-h-[44px] flex items-center active:opacity-70 transition-opacity ${
                pathname === item.href ? "text-[#1A1A1A]" : "text-[#7A7A72]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={gmailUrl}
            onClick={() => setMenuOpen(false)}
            className="block text-sm text-[#5E6AD2] min-h-[44px] flex items-center active:opacity-70 transition-opacity"
          >
            문의하기
          </a>
        </div>
      )}
    </header>
  );
}
