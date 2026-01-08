import Link from 'next/link';
import { ArrowLeft, Zap, Volume2, Maximize2, AlertTriangle, CheckCircle2, Ruler, Wifi, Battery, Droplets } from 'lucide-react';
import { robots } from './data';
import { pageMetadata } from './lib/seo';
import AffiliateLink from './components/AffiliateLink';
import SectionHeader from './components/ui/SectionHeader';
import Card from './components/ui/Card';
import Badge from './components/ui/Badge';
import CTAButton from './components/ui/CTAButton';
import AffiliateDisclosure from './components/ui/AffiliateDisclosure';
import Image from 'next/image';

export const metadata = pageMetadata({
  title: 'רובוט שואב שוטף מומלץ לשימוש בדירה קטנה (2026)',
  description:
    'מחפשים רובוט שואב שוטף מומלץ לשימוש בדירה קטנה? מדריך ברור: מה חשוב לבדוק (גובה, רעש, ניווט), אילו דגמים שווים, וקישורים להשוואה ומדריך קנייה.',
  path: '/',
});

export default function Home() {
  const featuredRobots = robots.slice(0, 3);
  const formatStars = (v: number) => (Number.isInteger(v) ? v.toFixed(0) : v.toFixed(1));

  return (
    <main className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 bg-page overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Text Content */}
          <div className="text-center md:text-right space-y-6">
            <div className="inline-flex justify-center md:justify-start">
              <Badge>מעודכן ל‑2026</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-main leading-tight">
              רובוט שואב שוטף מומלץ לשימוש בדירה קטנה
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-lg mx-auto md:mx-0 font-medium leading-relaxed">
              מדריך קנייה ממוקד לדירות קטנות: בוחרים נכון לפי גובה, שקט, ניווט ומקום לתחנה — ומונעים אכזבות אחרי הרכישה.
            </p>

            {/* Benefits (Checkmarks) */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2 flex-wrap">
              {[
                'חיסכון בזמן ניקיון שבועי',
                'מתאים לחללים קטנים וצפופים',
                'עובד בשקט — גם כשאתם בבית',
                'בחירה שקופה לפי קריטריונים',
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-soft text-sm font-bold text-main shadow-sm"
                >
                  <span className="text-[rgb(var(--accent-rgb))]">✓</span>
                  {benefit}
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Link href="/guide" className="btn-primary flex items-center gap-2">
                למדריך הקנייה <ArrowLeft size={18} />
              </Link>
              <Link href="#compare" className="btn-secondary">
                השוואת דגמים
              </Link>
            </div>
            <div className="pt-2">
              <div className="flex flex-col gap-1">
                <Link href="/article" className="text-sm text-muted underline hover:opacity-80">
                  או קרא את המאמר המלא
                </Link>
                <Link href="/faq" className="text-sm text-muted underline hover:opacity-80">
                  שאלות נפוצות לפני שקונים
                </Link>
                <Link href="/sources" className="text-sm text-muted underline hover:opacity-80">
                  מקורות וקישורים
                </Link>
              </div>
            </div>
          </div>

          {/* Video Card */}
          <div className="relative w-full aspect-video md:aspect-square bg-surface-alt rounded-3xl overflow-hidden shadow-2xl border-8 border-white/70 transform rotate-1 hover:rotate-0 transition-transform duration-700">
            <video 
              className="w-full h-full object-cover scale-105"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              {/* התיקון המרכזי לנתיב הווידאו */}
              <source src="/videos/robot-hero.mp4" type="video/mp4" />
              הדפדפן שלך לא תומך בהצגת וידאו.
            </video>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[rgba(var(--accent-rgb),0.12)] to-transparent -z-0 opacity-60 pointer-events-none" />
      </section>

      {/* 3 Things to Check - REDESIGNED */}
      <section className="py-24 bg-page">
        <div className="container-custom">
          <SectionHeader 
            title="למה דירה קטנה דורשת בחירה אחרת?"
            subtitle="בחלל צפוף, המפרט הטכני היבש לא מספר את כל הסיפור. הנה 3 הקריטריונים הקריטיים שחייבים לבדוק."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-soft hover:shadow-md">
              <div className="bg-[rgba(var(--accent-rgb),0.12)] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-soft">
                <Ruler className="text-[rgb(var(--accent-hover-rgb))]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">גובה הרובוט</h3>
              <p className="text-muted leading-relaxed">
                בדירות קטנות, הרובוט חייב להיכנס מתחת לספה ולמיטה. חפשו דגמים מתחת ל-9.7 ס״מ כדי שלא יישארו שטחים מתים.
              </p>
            </Card>
            <Card className="text-center border-soft hover:shadow-md">
              <div className="bg-[rgba(var(--accent-rgb),0.12)] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-soft">
                <Volume2 className="text-[rgb(var(--accent-hover-rgb))]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">רמת רעש (dB)</h3>
              <p className="text-muted leading-relaxed">
                בחלל קטן הרעש מורגש הרבה יותר. ודאו שהרובוט שקט (פחות מ-62dB) כדי שתוכלו לנהל שיחה או לצפות בטלוויזיה.
              </p>
            </Card>
            <Card className="text-center border-soft hover:shadow-md">
              <div className="bg-[rgba(var(--accent-rgb),0.12)] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-soft">
                <Zap className="text-[rgb(var(--accent-hover-rgb))]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">מיפוי וניווט חכם</h3>
              <p className="text-muted leading-relaxed">
                חובה זיהוי מכשולים מתקדם (AI או לייזר) כדי שהרובוט לא ייתקע בגרביים, כבלים או רגלי כיסאות צפופות.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Criteria Grid - NEW */}
      <section className="py-24 bg-page">
        <div className="container-custom">
          <SectionHeader 
            title="קריטריונים מרכזיים לבחירה"
            subtitle="שישה גורמים שחייבים לבדוק לפני רכישת רובוט שואב-שוטף לדירה קטנה"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Ruler size={24}/>, title: "גובה הרובוט", desc: "הקריטריון החשוב ביותר לדירה קטנה. מדדו את הגובה מתחת לספה." },
              { icon: <Wifi size={24}/>, title: "טכנולוגיית מיפוי", desc: "מיפוי לייזר (LiDAR) הוא המדויק ביותר לניווט חכם." },
              { icon: <Volume2 size={24}/>, title: "רמת רעש", desc: "בדירה קטנה הרעש מורגש יותר. חפשו מצב שקט ייעודי." },
              { icon: <Droplets size={24}/>, title: "מיכל מים ושטיפה", desc: "בדקו אם יש ויסות אוטומטי של המים למניעת רטיבות יתר." },
              { icon: <Battery size={24}/>, title: "סוללה וזמן עבודה", desc: "לדירה קטנה מספיקה סוללה סטנדרטית (60-90 דקות)." },
              { icon: <Maximize2 size={24}/>, title: "תחנת ריקון", desc: "נוחות מקסימלית אך תופסת מקום. שקלו אם יש לכם פינה עבורה." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-surface rounded-2xl border border-soft shadow-sm">
                <div className="bg-[rgba(var(--accent-rgb),0.12)] p-3 rounded-xl h-fit text-[rgb(var(--accent-hover-rgb))] border border-soft">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-main mb-1">{item.title}</h4>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes - NEW */}
      <section className="py-24 bg-page">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="bg-red-50 p-3 rounded-2xl text-red-600">
                <AlertTriangle size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-main tracking-tight">טעויות נפוצות בקנייה</h2>
            </div>
            <div className="space-y-4">
              {[
                { m: "קניית רובוט גבוה מדי", f: "מדדו את הגובה מתחת לרהיטים לפני הקנייה" },
                { m: "התעלמות מרמת הרעש", f: "קראו ביקורות על רמת הרעש בפועל" },
                { m: "בחירה לפי מחיר בלבד", f: "השוו תכונות ולא רק מחיר" },
                { m: "התעלמות מסוג הרצפות", f: "ודאו התאמה לפרקט/אריחים/שטיחים" },
                { m: "שכחה לבדוק חלקי חילוף", f: "ודאו זמינות של מסננים ומברשות" },
                { m: "התעלמות מאפליקציה ושירות", f: "בדקו שהאפליקציה בעברית ויש שירות מקומי" },
              ].map((item, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-4 items-center">
                  <div className="bg-red-50/50 p-4 rounded-xl border border-red-100 text-red-800 font-medium flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs">✕</span>
                    {item.m}
                  </div>
                  <div className="bg-[rgba(var(--accent-rgb),0.10)] p-4 rounded-xl border border-soft text-[rgb(var(--accent-hover-rgb))] font-medium flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[rgba(var(--accent-rgb),0.18)] text-[rgb(var(--accent-hover-rgb))] flex items-center justify-center text-xs font-bold">✓</span>
                    {item.f}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Models */}
      <section className="py-24 bg-page" id="compare">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-right">
            <SectionHeader 
              title="הדגמים המומלצים לדירה קטנה"
              subtitle="בחרנו עבורכם את הרובוטים המצטיינים בשילוב של גובה נמוך, שקט וניווט חכם."
              centered={false}
              className="mb-0"
            />
            <CTAButton href="/compare" variant="secondary">
              לכל ההשוואות ←
            </CTAButton>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredRobots.map((robot) => (
              <Card key={robot.id} padding={false} className="flex flex-col h-full overflow-hidden">
                <div className="relative h-64 bg-surface-alt overflow-hidden">
                  <div className="absolute top-4 right-4 z-10 flex flex-wrap gap-2">
                    {robot.tags.map(tag => (
                      <Badge key={tag} variant={tag.includes('מומלץ') ? 'emerald' : 'stone'}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Image
                    src={robot.image}
                    alt={robot.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg shadow-sm border border-white/50 text-[rgb(var(--accent-hover-rgb))] font-bold">
                      {robot.rating}/10
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black mb-3 text-main">{robot.name}</h3>
                  <p className="text-muted mb-6 flex-1 line-clamp-3">{robot.shortDesc}</p>

                  <div className="text-xs text-muted font-bold flex flex-wrap gap-2 mb-2">
                    <span className="bg-surface-alt border border-soft px-3 py-1 rounded-full">
                      ★ {formatStars(robot.ratingStars)}
                    </span>
                    <span className="bg-surface-alt border border-soft px-3 py-1 rounded-full">
                      {robot.soldText} נמכרו
                    </span>
                    <span className="bg-surface-alt border border-soft px-3 py-1 rounded-full">
                      {robot.reviewsCount} ביקורות
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm font-bold bg-surface-alt p-3 rounded-xl border border-soft">
                      <span className="text-muted font-medium">ציון התאמה לדירה קטנה:</span>
                      <span className="text-[rgb(var(--accent-hover-rgb))] font-black">{robot.rating * 10}/100</span>
                    </div>
                    
                    <AffiliateLink
                      href={robot.affiliateLink}
                      className="btn-accent w-full text-center"
                    >
                      בדיקת מחיר (AliExpress)
                    </AffiliateLink>
                    <AffiliateDisclosure className="text-center" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser - NEW */}
      <section className="py-24 bg-surface border-t border-soft">
        <div className="container-custom">
          <SectionHeader 
            title="שאלות נפוצות לפני שקונים"
            subtitle="ריכזנו עבורכם תשובות קצרות לשאלות הכי בוערות של בעלי דירות קטנות."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "האם רובוט שואב באמת יכול להחליף שטיפה ידנית?", a: "בדירות קטנות התשובה היא כמעט כן מוחלט. הרובוטים המודרניים מצוינים בתחזוקה יומיומית." },
              { q: "כמה רעש הרובוט עושה באמת?", a: "במצב רגיל, רוב הרובוטים פועלים בעוצמה של 60-65 דציבלים - דומה למזגן פועל." },
              { q: "האם הרובוט ייתקע בכבלים על הרצפה?", a: "רק דגמים עם חיישני AI או מצלמות בחזית יודעים להימנע מחפצים קטנים כמו כבלים וגרביים." },
            ].map((faq, i) => (
              <Card key={i} className="hover:shadow-md border-soft">
                <h4 className="font-bold text-main mb-2 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[rgb(var(--accent-rgb))]" />
                  {faq.q}
                </h4>
                <p className="text-muted text-sm">{faq.a}</p>
              </Card>
            ))}
            <div className="text-center pt-8">
              <CTAButton href="/faq" variant="secondary">
                לכל השאלות והתשובות
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA - NEW */}
      <section className="py-24 bg-page overflow-hidden relative border-t border-soft">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(var(--accent-warm-rgb),0.14)] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-main">עדיין מתלבטים?</h2>
          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            מאמר העומק שלנו עושה סדר: מה חשוב לבדוק בדירה קטנה, מה מיותר לשלם עליו, ואיך לבחור דגם שיתאים לשגרה שלכם.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/article" variant="accent">
              קרא את המאמר המלא
            </CTAButton>
            <CTAButton href="/guide" variant="secondary">
              למדריך הקנייה המקוצר
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
