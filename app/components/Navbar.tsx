'use client';
import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Un-comment in your actual Next.js project
// import { usePathname } from 'next/navigation'; // Un-comment in your actual Next.js project
import { Menu, X } from 'lucide-react';

// Inlined data for preview purposes (Original was imported from @/lib/data)
const navigationLinks = [
  { name: 'בית', href: '/' },
  { name: 'מדריך קנייה', href: '/guide' },
  { name: 'השוואת דגמים', href: '/compare' },
  { name: 'המדריך המלא', href: '/article' },
  { name: 'שאלות נפוצות', href: '/faq' },
  { name: 'אודות', href: '/about' },
];

export default function Navbar() {
  // Mocking pathname for preview. In Next.js use: const pathname = usePathname();
  const [pathname, setPathname] = useState('/'); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
  }, []);

  // Helper for Link vs <a>. In Next.js, use the <Link> component directly.
  const NavLink = ({ href, children, className, onClick }: any) => (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );

  return (
    <nav className="bg-stone-50/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <NavLink href="/" className="font-extrabold text-2xl text-stone-800 flex items-center gap-2 group">
            <span className="bg-amber-100 p-2 rounded-xl border border-amber-200 group-hover:bg-amber-200 transition">🤖</span>
            <span className="tracking-tight">רובוט<span className="text-amber-600">.פרו</span></span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <NavLink
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-stone-800 text-white shadow-md' 
                      : 'text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
            <NavLink 
              href="/compare" 
              className="mr-4 bg-amber-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-amber-700 transition shadow-lg hover:shadow-amber-200/50 flex items-center gap-2"
            >
              המומלצים
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-stone-600 hover:bg-stone-100 rounded-lg"
            aria-label="פתח תפריט"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-stone-100 bg-white absolute w-full left-0 shadow-xl">
          <div className="flex flex-col p-4 space-y-2">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium ${
                   pathname === link.href ? 'bg-amber-50 text-amber-900' : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
