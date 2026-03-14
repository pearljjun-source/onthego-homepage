import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteData from "@/data/site";

export const metadata: Metadata = {
  title: `${siteData.company.name} — ${siteData.slogan.en}`,
  description: siteData.slogan.ko,
  keywords: ["AI", "웹개발", "앱개발", "디지털마케팅", "온더고", "스튜디오"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
