export const siteUrl = "https://ansangoyangibunyang.vercel.app";

export const targetKeywords = ['안산고양이분양', '안산 고양이', '안산 고양이 전문', '안산 반려동물', '시흥 고양이분양', '화성 고양이분양'] as const;

export const siteTitle = "안산고양이분양 | 건강하고 사랑스러운 고양이, 안산에서 새 가족을 만나세요";

export const siteDescription =
  "안산고양이분양 전문 안산고양이분양입니다. 건강하고 예쁜 고양이들을 만날 수 있는 곳. 체계적인 관리와 평생 책임 분양을 약속드립니다. 안산, 시흥, 화성 등 인근 지역 방문 환영.";

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "안산고양이분양",
        description: siteDescription,
        inLanguage: "ko-KR",
        telephone: "0505-464-1004",
        knowsAbout: [...targetKeywords],
      },
    ],
  };
}
