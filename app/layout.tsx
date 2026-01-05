import React from 'react';
import type { Metadata } from "next";
import { Heebo } from "next/font/google"; 
import "./globals.css"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Mock font for preview
const heebo = { className: 'font-sans' };

export const metadata: Metadata = {
  title: {
    template: '%s | רובוט.פרו',
    default: 'רובוט.פרו - המדריך לרובוט שואב שוטף לדירה קטנה',
  },
  description: "המדריך המקיף לבחירת רובוט שואב שוטף לדירה קטנה. השוואות, המלצות ומדריכים.",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      {/* Tailwind CSS CDN included for preview purposes only. Remove in production! */}
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    stone: {
                      50: '#fafaf9',
                      100: '#f5f5f4',
                      200: '#e7e5e4',
                      300: '#d6d3d1',
                      400: '#a8a29e',
                      500: '#78716c',
                      600: '#57534e',
                      700: '#44403c',
                      800: '#292524',
                      900: '#1c1917',
                    },
                    amber: {
                      50: '#fffbeb',
                      100: '#fef3c7',
                      200: '#fde68a',
                      300: '#fcd34d',
                      400: '#fbbf24',
                      500: '#f59e0b',
                      600: '#d97706',
                      700: '#b45309',
                      800: '#92400e',
                      900: '#78350f',
                    }
                  }
                }
              }
            }
          `
        }} />
      </head>
      <body className={`${heebo.className} bg-stone-50 text-stone-800 antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
