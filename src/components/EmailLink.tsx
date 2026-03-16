"use client";

import { getCompany } from "@/data/site";

function getEmailUrl() {
  const email = getCompany().email;
  const subject = encodeURIComponent("프로젝트 문의");
  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent
  );
  if (isMobile) {
    return `mailto:${email}?subject=${subject}`;
  }
  return `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}`;
}

export default function EmailLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = getEmailUrl();
    if (url.startsWith("mailto:")) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <a href="#" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
