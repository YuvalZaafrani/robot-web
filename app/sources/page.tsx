import React from 'react';
import { ExternalLink, Book, Settings, ShoppingCart, Info } from 'lucide-react';
import { pageMetadata } from '../lib/seo';
import { robots } from '../data';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import CTAButton from '../components/ui/CTAButton';

export const metadata = pageMetadata({
  title: 'מקורות וקישורים חיצוניים | רובוט.פרו',
  description:
    'ריכוז המקורות המהימנים שעליהם התבסס המחקר שלנו: אתרי יצרנים רשמיים, מעבדות בדיקה מובילות ומדריכים טכניים.',
  path: '/sources',
});

interface SourceLink {
  name: string;
  url: string;
  desc: string;
  isAffiliate?: boolean;
}

interface SourceGroup {
  category: string;
  icon: React.ReactNode;
  links: SourceLink[];
}

export default function SourcesPage() {
  const recommendedModels: SourceLink[] = robots.slice(0, 3).map((robot) => ({
    name: `${robot.name} — ★ ${Number.isInteger(robot.ratingStars) ? robot.ratingStars.toFixed(0) : robot.ratingStars.toFixed(1)} • ${robot.soldText} נמכרו • ${robot.reviewsCount} ביקורות`,
    url: robot.affiliateLink,
    desc: robot.shortDesc,
    isAffiliate: true,
  }));

  const sourceGroups: SourceGroup[] = [
    {
      category: "אתרי יצרנים ומפרטים רשמיים",
      icon: <Settings className="text-[rgb(var(--accent-rgb))]" size={20} />,
      links: [
        { name: "Roborock - Official Global Site", url: "https://global.roborock.com/", desc: "מקור המידע הרשמי והמדויק ביותר לסדרות S ו-Q. כולל שרטוטים טכניים וגבהים מדויקים." },
        { name: "Dreame Tech - Official Website", url: "https://www.dreametech.com/", desc: "פירוט טכנולוגיות הניווט (vSLAM) והשטיפה של דגמי L10s ו-X series." },
        { name: "Xiaomi Global - Robot Vacuum", url: "https://www.mi.com/global/product-list/vacuum-cleaner/robot-vacuum/", desc: "עמוד רשמי שמרכז דגמי רובוטים שואבים של שיאומי, כולל מפרטים ותתי-דגמים." }
      ]
    },
    {
      category: "מעבדות בדיקה וביקורות מקצועיות",
      icon: <Book className="text-[rgb(var(--accent-rgb))]" size={20} />,
      links: [
        { name: "RTINGS - Vacuum Cleaner Reviews", url: "https://www.rtings.com/vacuum", desc: "האתר המוביל בעולם לבדיקות מעבדה אובייקטיביות. השתמשנו במדדי הרעש (dB) והשאיבה שלהם." },
        { name: "Vacuum Wars (YouTube/Web)", url: "https://www.vacuumwars.com/", desc: "הערוץ המקצועי ביותר לבדיקות שטח של רובוטים. המקור שלנו ליעילות זיהוי מכשולים." },
        { name: "TechRadar - Best Robot Vacuums", url: "https://www.techradar.com/news/best-robot-vacuums", desc: "דירוג שנתי של צוות עורכים טכנולוגי, המשמש לאימות חוויות משתמש ארוכות טווח." }
      ]
    },
    {
      category: "3 דגמים מומלצים באלי־אקספרס (בדיקת מחיר)",
      icon: <ShoppingCart className="text-[rgb(var(--accent-warm-rgb))]" size={20} />,
      links: recommendedModels
    },
    {
      category: "לכל הדגמים באלי־אקספרס",
      icon: <ShoppingCart className="text-[rgb(var(--accent-warm-rgb))]" size={20} />,
      links: [
        {
          name: "חיפוש כל הדגמים (AliExpress)",
          url: "https://s.click.aliexpress.com/e/_c3SNgNGB",
          desc: "קישור כללי לצפייה בדגמים נוספים באלי־אקספרס.",
          isAffiliate: true
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-page py-20 px-4" dir="rtl">
      <div className="container-custom max-w-4xl">
        <header className="text-center mb-16">
          <Badge className="mb-4">שקיפות מקורות</Badge>
          <SectionHeader 
            title="מקורות וקישורים חיצוניים"
            subtitle="אנחנו מאמינים בשקיפות מלאה. הנה המקורות המהימנים עליהם התבסס המחקר שלנו."
          />
        </header>

        {/* Start Guide Box */}
        <Card className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
            <div>
              <h3 className="text-xl font-black text-main mb-2">עוד לא התחלתם את המסע?</h3>
              <p className="text-muted text-sm font-medium">ריכזנו את כל המידע המזוקק במדריכים שלנו.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <CTAButton href="/article" variant="secondary" className="px-4 py-2 text-sm">מאמר עומק</CTAButton>
              <CTAButton href="/compare" variant="accent" className="px-4 py-2 text-sm">השוואת דגמים</CTAButton>
            </div>
          </div>
        </Card>

        <div className="space-y-12">
          {sourceGroups.map((group, i) => (
            <section key={i} aria-labelledby={`cat-${i}`}>
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-soft">
                <div className="bg-surface p-2 rounded-lg shadow-sm border border-soft">
                  {group.icon}
                </div>
                <h2 id={`cat-${i}`} className="text-2xl font-black text-main m-0 font-heebo tracking-tight">
                  {group.category}
                </h2>
              </div>
              
              <div className="grid gap-4">
                {group.links.map((link, j) => (
                  <a 
                    key={j} 
                    href={link.url} 
                    target="_blank" 
                    rel={link.isAffiliate ? "nofollow sponsored noopener" : "noopener noreferrer"} 
                    className="group bg-surface p-6 rounded-2xl border border-soft shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-main transition-colors group-hover:opacity-80">
                          {link.name} 
                        </h3>
                        {link.isAffiliate && <Badge variant="amber" className="text-[9px] py-0.5 px-1.5">קישור שותפים</Badge>}
                      </div>
                      <p className="text-sm text-muted m-0 leading-relaxed font-medium">{link.desc}</p>
                    </div>
                    <div
                      className={`shrink-0 flex items-center text-xs font-bold px-4 py-2 rounded-full transition-all border ${
                        link.isAffiliate
                          ? "bg-[rgba(var(--accent-warm-rgb),0.14)] text-[rgb(var(--accent-warm-hover-rgb))] border-[rgba(var(--accent-warm-rgb),0.20)] group-hover:bg-[rgb(var(--accent-warm-rgb))] group-hover:text-white"
                          : "bg-[rgba(var(--accent-rgb),0.14)] text-[rgb(var(--accent-hover-rgb))] border-[rgba(var(--accent-rgb),0.20)] group-hover:bg-[rgb(var(--accent-rgb))] group-hover:text-white"
                      }`}
                    >
                      {link.isAffiliate ? "בדיקת מחיר" : "ביקור באתר"} 
                      <ExternalLink size={12} className="mr-2" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-20 pt-12 border-t border-soft">
          <div className="flex items-start gap-4 bg-surface-alt p-6 rounded-2xl border border-soft">
            <Info className="text-muted shrink-0" size={20} />
            <p className="text-xs text-muted leading-relaxed m-0">
              גילוי נאות: חלק מהקישורים הם קישורי שותפים. ייתכן שנקבל עמלה ללא עלות נוספת עבורך.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
