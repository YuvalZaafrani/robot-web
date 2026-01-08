import { pageMetadata } from '../lib/seo';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import CTAButton from '../components/ui/CTAButton';
import { CheckCircle2, Ruler, Wifi, AlertTriangle, Lightbulb } from 'lucide-react';

export const metadata = pageMetadata({
  title: 'מדריך קנייה: איך לבחור רובוט שואב שוטף לדירה קטנה',
  description:
    'מדריך מפורט לבחירת רובוט לדירה קטנה: שלבי בחירה, מדידות חובה, רמת רעש אידיאלית, וניווט LiDAR מול מצלמה.',
  path: '/guide',
});

export default function GuidePage() {
  return (
    <main className="min-h-screen pb-24 bg-page">
      {/* Hero Header */}
      <header className="py-20 mb-16 relative overflow-hidden bg-surface border-b border-soft">
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(var(--accent-rgb),0.10)] opacity-60" />
        <div className="container-custom relative z-10 text-center">
          <HeroBadge className="mb-4">מדריך קנייה מעודכן ל‑2026</HeroBadge>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-main">איך לבחור רובוט לדירה קטנה?</h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed font-medium">
            בדירה קטנה החוקים משתנים. אין מקום לתחנות ענק, הרעש מורגש יותר, והרובוט חייב להיות אקרובט. 
            הכנו לכם את המדריך המלא שיחסוך לכם כסף ועצבים.
          </p>
        </div>
      </header>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Selection Process */}
          <section className="mb-20">
            <SectionHeader 
              title="תהליך הבחירה ב-5 שלבים"
              subtitle="אל תלכו לאיבוד בין המפרטים. עקבו אחרי השלבים האלה."
              centered={false}
            />
            <div className="grid gap-6">
              {[
                { step: 1, title: "מדדו את גובה הרהיטים", desc: "הספה היא האתגר הכי גדול. רובוט שלא נכנס מתחתיה משאיר 20% מהבית מלוכלך." },
                { step: 2, title: "בדקו את שטח הרצפה הפנוי", desc: "האם יש מקום לתחנת עגינה שוטפת (גדולה) או שעדיף תחנה בסיסית?" },
                { step: 3, title: "הגדירו תקציב ריאלי", desc: "לדירה קטנה אין צורך להשקיע 5,000 ש״ח. דגמים ב-2,500-3,500 ש״ח יעשו עבודה מעולה." },
                { step: 4, title: "בחרו את סוג הניווט", desc: "דירה מבולגנת? חובה זיהוי מכשולים מבוסס AI. דירה מסודרת? LiDAR יספיק." },
                { step: 5, title: "קראו ביקורות על רעש", desc: "ב-40 מ״ר אין לאן לברוח מרעש של 70dB. חפשו דגמים שקטים." },
              ].map((s, i) => (
                <div key={i} className="flex gap-6 items-start p-6 bg-surface rounded-2xl border border-soft shadow-sm">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black shrink-0 text-white bg-[rgb(var(--accent-warm-rgb))]">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-main text-xl mb-2">{s.title}</h4>
                    <p className="text-muted leading-relaxed font-medium">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Critical Measurements */}
          <section className="mb-20 py-16 bg-surface-alt rounded-[3rem] px-8 border border-soft">
            <div className="flex items-center gap-4 mb-8">
              <Ruler className="text-[rgb(var(--accent-hover-rgb))]" size={32} />
              <h2 className="text-3xl font-black text-main tracking-tight text-right">מדידות חובה בבית</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-surface">
                <h4 className="font-bold text-main mb-4 text-lg">גובה מתחת לספה ולמיטה</h4>
                <p className="text-muted text-sm mb-4">
                  רוב הספות המודרניות הן בגובה של 8-12 ס״מ. 
                </p>
                <div className="bg-page p-4 rounded-xl border border-soft text-[rgb(var(--accent-warm-hover-rgb))] font-bold text-sm">
                  טיפ: קחו סרגל ומדדו מהרצפה עד לתחתית בד הספה. הרובוט שלכם חייב להיות נמוך מהמספר הזה ב-0.5 ס״מ לפחות.
                </div>
              </Card>
              <Card className="bg-surface">
                <h4 className="font-bold text-main mb-4 text-lg">רוחב המעברים</h4>
                <p className="text-muted text-sm mb-4">
                  בדקו את הרווח בין רגלי פינת האוכל או המרחק בין הקיר לשידה.
                </p>
                <div className="bg-page p-4 rounded-xl border border-soft text-[rgb(var(--accent-warm-hover-rgb))] font-bold text-sm">
                  רובוט סטנדרטי צריך מעבר של 35-40 ס״מ כדי לנווט בנוחות בלי להתנגש שוב ושוב.
                </div>
              </Card>
            </div>
          </section>

          {/* Navigation Tech */}
          <section className="mb-20">
            <SectionHeader 
              title="ניווט: LiDAR מול מצלמה (AI)"
              subtitle="מה עדיף לחלל קטן וצפוף?"
              centered={false}
            />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-surface rounded-2xl border-r-4 shadow-sm border border-soft" style={{ borderRightColor: 'rgb(var(--accent-rgb))' }}>
                  <div className="flex items-center gap-3 mb-4 font-bold text-[rgb(var(--accent-hover-rgb))]">
                    <Wifi size={20} />
                    <span>מיפוי לייזר (LiDAR)</span>
                  </div>
                  <ul className="space-y-2 text-muted text-sm font-medium">
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-1 shrink-0"/> המיפוי המדויק ביותר בשוק</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-1 shrink-0"/> עובד מצוין בחושך מוחלט</li>
                    <li className="flex items-start gap-2 text-red-600/70"><AlertTriangle size={14} className="mt-1 shrink-0"/> מוסיף כ-2 ס״מ לגובה הרובוט (הצריח)</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-surface rounded-2xl border-r-4 shadow-sm border border-soft" style={{ borderRightColor: 'rgb(var(--accent-warm-rgb))' }}>
                  <div className="flex items-center gap-3 mb-4 font-bold text-[rgb(var(--accent-warm-hover-rgb))]">
                    <Wifi size={20} />
                    <span>זיהוי מכשולים (מצלמה/AI)</span>
                  </div>
                  <ul className="space-y-2 text-muted text-sm font-medium">
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-1 shrink-0"/> היחיד שיודע להימנע מגרביים וכבלים</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-1 shrink-0"/> מאפשר רובוט נמוך יותר (ללא צריח לייזר)</li>
                    <li className="flex items-start gap-2 text-red-600/70"><AlertTriangle size={14} className="mt-1 shrink-0"/> פחות מדויק במיפוי קירות</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section className="mb-20 bg-surface p-12 rounded-[3rem] relative overflow-hidden border border-soft shadow-sm">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[rgba(var(--accent-rgb),0.12)] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <h2 className="text-3xl font-black mb-8 relative z-10 text-main">צ׳קליסט לפני קנייה</h2>
            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              {[
                "מדדתי גובה מתחת ל-3 רהיטים לפחות",
                "בדקתי שיש לי נקודת חשמל פנויה לתחנה",
                "וידאתי שהאפליקציה תומכת בעברית/אנגלית",
                "בדקתי את עוצמת הרעש במצב 'שקט'",
                "וידאתי שיש חלקי חילוף באלי-אקספרס",
                "החלטתי אם אני חייב/ת תחנת שטיפה"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-lg font-medium text-muted">
                  <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0" style={{ borderColor: 'rgb(var(--accent-rgb))' }}>
                    <CheckCircle2 size={14} className="text-[rgb(var(--accent-rgb))]" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 font-bold mb-6 bg-surface px-4 py-2 rounded-full border border-soft text-[rgb(var(--accent-warm-hover-rgb))]">
              <Lightbulb size={20} />
              <span>השלב הבא: בחירת הדגם המתאים</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/compare" variant="accent" className="px-12">
                עבור להשוואת דגמים
              </CTAButton>
              <CTAButton href="/article" variant="secondary">
                קרא סקירה מעמיקה
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function HeroBadge({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase badge-accent ${className}`}>
      {children}
    </span>
  );
}
