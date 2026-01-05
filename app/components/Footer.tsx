import React from 'react';
// import Link from 'next/link'; // Un-comment in your actual Next.js project
// import { navigationLinks } from '@/lib/data'; // Un-comment in your actual Next.js project

// Mock data for preview purposes to avoid import errors
const navigationLinks = [
  { name: 'בית', href: '/' },
  { name: 'מדריך קנייה', href: '/guide' },
  { name: 'השוואת דגמים', href: '/compare' },
  { name: 'המדריך המלא', href: '/article' },
  { name: 'שאלות נפוצות', href: '/faq' },
  { name: 'אודות', href: '/about' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Helper component for Links in preview. In real Next.js project, use <Link>
  const FooterLink = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => (
    <a href={href} className={className}>
      {children}
    </a>
  );

  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 text-sm mb-12">
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
            <span className="text-2xl">🤖</span> רובוט.פרו
          </h4>
          <p className="leading-relaxed mb-6">
            המדריך המקצועי והאובייקטיבי לבחירת שואב רובוטי שוטף לדירות בישראל. אנחנו כאן כדי לעזור לכם לחסוך זמן וכסף.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-6">ניווט מהיר</h4>
          <ul className="space-y-3">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href} className="hover:text-amber-500 transition flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-stone-700 rounded-full group-hover:bg-amber-500"></span> 
                  {link.name}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">משפטי</h4>
          <ul className="space-y-3">
            <li><FooterLink href="/about" className="hover:text-amber-500 transition">תנאי שימוש</FooterLink></li>
            <li><FooterLink href="/about" className="hover:text-amber-500 transition">מדיניות פרטיות</FooterLink></li>
            <li><FooterLink href="/about" className="hover:text-amber-500 transition">הצהרת נגישות</FooterLink></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">גילוי נאות</h4>
          <p className="leading-relaxed bg-stone-800/50 p-4 rounded-xl border border-stone-800 text-xs">
            חלק מהקישורים באתר הם קישורי אפילייט (Aliexpress). רכישה דרכם עשויה להקנות לנו עמלה קטנה ללא תוספת עלות מצדכם.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-stone-800 text-center text-xs md:text-sm">
        <p>&copy; {currentYear} רובוט.פרו | כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}
