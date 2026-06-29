import type { Metadata } from "next";
import {
  getStructuredData,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ansangoyangibunyang.vercel.app"),
  title: "안산고양이분양 | 건강하고 사랑스러운 고양이, 안산에서 새 가족을 만나세요",
  description: "안산고양이분양 전문 안산고양이분양입니다. 건강하고 예쁜 고양이들을 만날 수 있는 곳. 체계적인 관리와 평생 책임 분양을 약속드립니다. 안산, 시흥, 화성 등 인근 지역 방문 환영.",
  keywords: ["안산고양이분양", "안산 고양이", "안산 고양이 전문", "안산 반려동물", "시흥 고양이분양", "화성 고양이분양"],
  authors: [{ name: "안산고양이분양" }],
  creator: "안산고양이분양",
  publisher: "안산고양이분양",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://ansangoyangibunyang.vercel.app",
    siteName: "안산고양이분양",
    title: "안산고양이분양 | 건강하고 사랑스러운 고양이, 안산에서 새 가족을 만나세요",
    description: "안산고양이분양 전문 안산고양이분양입니다. 건강하고 예쁜 고양이들을 만날 수 있는 곳. 체계적인 관리와 평생 책임 분양을 약속드립니다. 안산, 시흥, 화성 등 인근 지역 방문 환영.",
    images: [{ url: "/https://image.cattery.co.kr/maincoon/44.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "안산고양이분양 | 건강하고 사랑스러운 고양이, 안산에서 새 가족을 만나세요",
    description: "안산고양이분양 전문 안산고양이분양입니다. 건강하고 예쁜 고양이들을 만날 수 있는 곳. 체계적인 관리와 평생 책임 분양을 약속드립니다. 안산, 시흥, 화성 등 인근 지역 방문 환영.",
    images: ["/https://image.cattery.co.kr/maincoon/44.webp"],
  },
  alternates: {
    canonical: "https://ansangoyangibunyang.vercel.app",
    types: {
      "application/rss+xml": "https://ansangoyangibunyang.vercel.app/feed.xml",
    },
  },
  category: "안산고양이분양",
  verification: {
    other: {
      "naver-site-verification": "PENDING",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getStructuredData();

  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="PENDING" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans pb-safe-floating lg:pb-0">{children}</body>
    </html>
  );
}
