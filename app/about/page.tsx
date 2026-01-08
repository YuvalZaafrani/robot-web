import React from 'react';
import { Mail, Shield, CheckCircle2, Heart, Users, Search } from 'lucide-react';
import { pageMetadata } from '../lib/seo';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import CTAButton from '../components/ui/CTAButton';
import AffiliateDisclosure from '../components/ui/AffiliateDisclosure';

export const metadata = pageMetadata({
  title: 'אודות האתר: איך אנחנו מדרגים רובוטים לדירה קטנה',
  description:
    'שקיפות: איך אנחנו בוחרים ומדרגים רובוטים לדירות קטנות, הערכים שלנו ודרכי יצירת קשר.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-page pb-24">
      {/* Hero Header */}
      <header className="bg-surface py-20 mb-16 relative overflow-hidden border-b border-soft">
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(var(--accent-rgb),0.10)] opacity-60" />
        <div className="container-custom relative z-10 text-center">
          <Badge className="mb-4">אודות האתר</Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-main">אודות וגילוי נאות</h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed font-medium">
            מי אנחנו, מה המטרה שלנו ואיך אנחנו בוחרים את ההמלצות שלנו.
          </p>
        </div>
      </header>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Who We Are */}
          <section className="mb-20">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-black text-main mb-6 font-heebo tracking-tight">מי אנחנו</h2>
                <div className="space-y-4 text-lg text-muted leading-relaxed font-medium">
                  <p>
                    אתר ״רובוט שואב שוטף מומלץ לדירה קטנה״ הוקם במטרה לעזור לישראלים שגרים בדירות קטנות למצוא את הרובוט השואב-שוטף המתאים להם ביותר, אנחנו יודעים כמה זה מבלבל להתמודד עם עשרות דגמים, מפרטים טכניים ומחירים שונים.
                  </p>
                  <p>
                    הניסיון שלנו הוא בדירות קטנות – אנחנו מבינים את האתגרים הייחודיים: רהיטים נמוכים, חוסר במקום לתחנת טעינה גדולה, ורעש שמורגש בכל פינה. לכן כל ההמלצות שלנו מותאמות לצרכים האלה במיוחד.
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 w-full">
                <Card className="bg-surface">
                  <div className="text-center">
                    <div className="bg-[rgba(var(--accent-warm-rgb),0.14)] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[rgb(var(--accent-warm-hover-rgb))] border border-soft">
                      <Heart size={32} fill="currentColor" />
                    </div>
                    <h4 className="font-bold text-main mb-1 text-lg">רוצים לעזור</h4>
                    <p className="text-muted text-sm">המטרה שלנו היא לעזור לכם לחסוך זמן וכסף בבחירת רובוט שואב-שוטף מתאים.</p>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-20">
            <SectionHeader title="הערכים שלנו" subtitle="מה שמנחה אותנו בכל סקירה ומדריך שאנחנו כותבים." centered={true} />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Search />, title: "מחקר מעמיק", desc: "אנחנו מבצעים מחקר יסודי על כל דגם לפני שאנחנו ממליצים עליו. בודקים מפרטים, קוראים ביקורות משתמשים ומשווים ביצועים." },
                { icon: <Users />, title: "התמקדות בדירות קטנות", desc: "ההתמחות שלנו היא בדירות קטנות. אנחנו מבינים את האתגרים הייחודיים ומתאימים את ההמלצות בהתאם." },
                { icon: <Shield />, title: "שקיפות מלאה", desc: "אנחנו גלויים לגבי קישורי האפילייט שלנו ולא נותנים להם להשפיע על ההמלצות שלנו." },
              ].map((v, i) => (
                <Card key={i} className="text-center">
                  <div className="bg-surface-alt w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6 text-[rgb(var(--accent-hover-rgb))] border border-soft">
                    {v.icon}
                  </div>
                  <h4 className="font-bold text-main mb-3 text-lg">{v.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Selection Methodology */}
          <section className="mb-20 bg-surface p-12 rounded-[3rem] border border-soft shadow-sm">
            <h2 className="text-3xl font-black text-main mb-8 font-heebo tracking-tight text-center">איך נבחרות ההמלצות שלנו</h2>
            <p className="text-center text-muted mb-12 max-w-2xl mx-auto">כל דגם שמופיע באתר עובר תהליך בחינה מקיף. אנחנו לא ממליצים על מוצרים שלא עומדים בסטנדרטים שלנו, גם אם הם מציעים עמלת אפילייט גבוהה. הנה הקריטריונים שאנחנו בודקים:</p>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "גובה הרובוט והתאמה למעבר מתחת לרהיטים נפוצים",
                "טכנולוגיית הניווט והמיפוי",
                "רמת רעש בפועל (לא רק לפי מפרט)",
                "יחס מחיר-ביצועים",
                "זמינות חלקי חילוף בישראל",
                "ביקורות משתמשים אמיתיים",
                "תמיכה באפליקציה בעברית",
                "אמינות לאורך זמן"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-main font-medium">
                  <CheckCircle2 size={18} className="text-[rgb(var(--accent-rgb))] shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </section>

          {/* Disclosure */}
          <section className="mb-20">
            <h2 className="text-3xl font-black text-main mb-8 font-heebo tracking-tight">גילוי נאות - קישורי שותפים</h2>
            <AffiliateDisclosure variant="full" />
          </section>

          {/* Contact */}
          <section className="text-center pt-8 border-t border-soft">
            <h2 className="text-2xl font-black text-main mb-4 font-heebo tracking-tight">צרו איתנו קשר</h2>
            <p className="text-muted mb-8">יש לכם שאלה? הצעה? נתקלתם בבעיה באתר? אנחנו כאן.</p>
            <CTAButton href="mailto:contact@robot.pro" variant="primary" icon={<Mail size={18} />}>
              contact@robot.pro
            </CTAButton>
          </section>
        </div>
      </div>
    </main>
  );
}
