import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

import { Sora } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--sora-variable',
});

export const metadata: Metadata = {
  title: "Rororona.net - Watch Movies and TV Shows",
  description: "Watch Movies and TV Shows",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      </head>
      <body className={sora.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
