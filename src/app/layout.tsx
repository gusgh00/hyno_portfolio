import type { Metadata } from "next";
import "./globals.css";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

export const metadata: Metadata = {
  title: "HYNO PORTFOLIO",
  description: "유현호의 프론트엔드 포트폴리오입니다.",
  icons: {
    icon: "/favicon.ico"
  },
  other: {
    google: 'notranslate',
  },
  openGraph: {
    siteName: "HYNO PORTFOLIO",
    title: "HYNO PORTFOLIO",
    description: "유현호의 프론트엔드 포트폴리오입니다.",
    type: 'website',
    url: "https://portfolio.hyno.kr",
    locale: "ko_KR"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
