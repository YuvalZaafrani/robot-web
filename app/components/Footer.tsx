import Link from 'next/link';
import { Mail, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-alt text-muted py-20 mt-24 relative overflow-hidden border-t border-soft" dir="rtl">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-[rgb(var(--accent-rgb))] to-[rgb(var(--accent-warm-rgb))]" />
      
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-right relative z-10">
        {/* Brand Section */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center text-main font-black text-lg border border-soft shadow-sm">
              R
            </div>
            <span className="text-main font-black text-2xl tracking-tighter">רובוט.פרו</span>
          </div>
          <p className="leading-relaxed mb-8 max-w-sm text-muted font-medium text-base">
            המדריך המקצועי בישראל לבחירת רובוט שואב-שוטף לדירות קטנות. אנחנו עוזרים לכם למצוא את המכשיר המושלם ללא בולשיט וללא אותיות קטנות.
          </p>
          <div className="flex gap-4">
            <a href="mailto:contact@robot.pro" className="bg-surface hover:bg-page p-3 rounded-full text-main transition-all border border-soft group shadow-sm">
              <Mail size={20} className="group-hover:scale-110 transition-transform text-[rgb(var(--accent-hover-rgb))]" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-main font-black text-lg mb-6 tracking-widest">ניווט מהיר</h4>
          <ul className="space-y-4 font-bold">
            {[
              { href: '/guide', label: 'מדריך קנייה' },
              { href: '/compare', label: 'השוואת דגמים' },
              { href: '/article', label: 'מאמר המדריך' },
              { href: '/faq', label: 'שאלות נפוצות' },
              { href: '/sources', label: 'מקורות וקישורים' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-main transition-colors flex items-center gap-2 group">
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -mr-4 group-hover:mr-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Trust */}
        <div>
          <h4 className="text-main font-black text-lg mb-6 tracking-widest">מידע ושקיפות</h4>
          <ul className="space-y-4 font-bold">
            <li>
              <Link href="/about" className="hover:text-main transition-colors flex items-center gap-2 group">
                <ShieldCheck size={16} className="text-[rgb(var(--accent-hover-rgb))]" />
                אודות וגילוי נאות
              </Link>
            </li>
            <li className="pt-4 border-t border-soft mt-4">
              <div className="flex items-center gap-2 text-muted font-medium">
                <Heart size={14} className="text-[rgba(var(--accent-warm-rgb),0.7)]" />
                <span>© 2026 כל הזכויות שמורות</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom mt-20 pt-8 border-t border-soft text-center text-[10px] text-muted font-bold tracking-[0.2em]">
        מותאם ל‑SEO • בנוי למדריך קנייה בעברית
      </div>
    </footer>
  );
}
