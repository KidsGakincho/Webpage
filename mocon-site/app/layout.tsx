import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";
import React from "react";

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-zen-kaku",
});

export const metadata: Metadata = {
  title: "MOCON",
  description: "MOCON website",
};

export default function RootLayout({ 
  children 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className={`${zenKaku.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <Header />

        <main>        
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
