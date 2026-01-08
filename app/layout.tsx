import React from 'react';
import type { Metadata } from "next";
import { Heebo } from "next/font/google"; 
import "./globals.css"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SITE_NAME, SITE_URL } from './lib/seo';

// הגדרת פונט Heebo שתומך בעברית
const heebo = Heebo({ 
  subsets: ["hebrew", "latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "המדריך המקיף לבחירת רובוט שואב שוטף לדירה קטנה. השוואות, המלצות ומדריכים.",
  openGraph: {
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body className={`${heebo.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
