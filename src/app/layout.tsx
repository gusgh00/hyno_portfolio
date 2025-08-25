import type { Metadata } from "next";
import "./globals.css";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import { getMetadata } from "@utils/Metadata";
import GoogleAnalytics from "@utils/GoogleAnalytics";

export const metadata: Metadata = getMetadata("HOME")

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <body>
        {/*GA 영역*/}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}/>
        ) : null}
        {/*GA 영역*/}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
