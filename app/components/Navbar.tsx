import Link from 'next/link';
import { Home, BarChart3, BookOpen, HelpCircle, Info, Search } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { href: '/', label: 'בית', icon: <Home size={16} /> },
    { href: '/guide', label: 'מדריך קנייה', icon: <BookOpen size={16} /> },
    { href: '/compare', label: 'השוואת דגמים', icon: <BarChart3 size={16} /> },
    { href: '/article', label: 'מאמר המדריך', icon: <Search size={16} /> },
    { href: '/faq', label: 'שאלות נפוצות', icon: <HelpCircle size={16} /> },
    { href: '/about', label: 'אודות', icon: <Info size={16} /> },
  ];

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-xl border-b border-soft shadow-sm"
      style={{ background: 'rgba(var(--surface-rgb), 0.92)' }}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xl transition-all shadow-lg rotate-3 group-hover:rotate-0 bg-[rgb(var(--accent-warm-rgb))] group-hover:bg-[rgb(var(--accent-rgb))]">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl text-main tracking-tighter leading-none">רובוט.פרו</span>
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-80 text-[rgb(var(--accent-hover-rgb))]">
                בחירה חכמה
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-muted hover:text-main px-4 py-2 text-sm font-bold flex items-center gap-2 rounded-xl transition-all hover:bg-surface-alt"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/compare" className="hidden md:flex btn-primary !px-5 !py-2.5 !text-sm">
              הדגמים המומלצים
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
