import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HYNO PORTFOLIO",
  description: "HYNO PORTFOLIO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
