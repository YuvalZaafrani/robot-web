import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, AlertCircle, ChevronLeft, Info, Home, List, Target, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';
import { SITE_NAME, SITE_URL } from '../lib/seo';
import SeoJsonLd from '../components/SeoJsonLd';
import Card from '../components/ui/Card';
import CTAButton from '../components/ui/CTAButton';
import AffiliateDisclosure from '../components/ui/AffiliateDisclosure';

const baseMetadata = pageMetadata({
  title: 'רובוט שואב שוטף מומלץ לשימוש בדירה קטנה | מדריך עומק (2026)',
  description:
    'מאמר עומק לדירות קטנות: קריטריונים אמיתיים (גובה, רעש, ניווט, תחנה), טעויות נפוצות ורשימת בדיקה. כולל קישורים להשוואה, מדריך קנייה ושאלות נפוצות.',
  path: '/article',
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    type: 'article',
  },
};

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-page pb-20 text-right" dir="rtl">
      {/* Hero Header */}
      <header className="bg-surface border-b border-soft pt-20 pb-16 mb-16 shadow-sm">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-muted text-sm mb-8">
            <Link href="/" className="hover:opacity-80 transition-colors flex items-center gap-1 font-medium">
              <Home size={14} /> בית
            </Link>
            <ChevronLeft size={14} />
            <span className="text-main font-bold">מאמר מקיף</span>
          </nav>
          
          <h1 className="text-4xl md:text-6xl font-black text-main leading-[1.1] mb-10 max-w-4xl">
            רובוט שואב שוטף מומלץ לשימוש בדירה קטנה: המדריך המלא (2026)
          </h1>
          
          <div className="flex flex-wrap gap-6 text-sm text-muted items-center border-t border-soft pt-8">
            <div className="flex items-center gap-2 bg-surface-alt px-4 py-1.5 rounded-full font-bold border border-soft">
              <Clock size={16} className="text-muted" /> 
              <span>זמן קריאה: 12 דקות</span>
            </div>
            <div className="flex items-center gap-2 bg-surface-alt px-4 py-1.5 rounded-full font-bold border border-soft">
              <Calendar size={16} className="text-muted" /> 
              <span>עודכן: ינואר 2026</span>
            </div>
            <div className="flex items-center gap-2 font-black text-[rgb(var(--accent-hover-rgb))]">
              <ShieldCheck size={18} /> 
              <span>נבדק ואומת על ידי צוות המומחים</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Table of Contents */}
          <Card className="mb-16 bg-surface">
            <div className="flex items-center gap-3 mb-6 border-b border-soft pb-4">
              <List className="text-[rgb(var(--accent-rgb))]" size={24} />
              <h2 className="text-xl font-black text-main m-0 font-heebo tracking-tight">במאמר זה נלמד:</h2>
            </div>
            <nav className="grid md:grid-cols-2 gap-x-12 gap-y-3">
              {[
                { id: "why-different", text: "למה דירה קטנה דורשת בחירה שונה?" },
                { id: "criteria", text: "5 הקריטריונים הכי חשובים" },
                { id: "size-mapping", text: "גודל הדירה ומיפוי חכם: מה באמת משנה?" },
                { id: "scenarios", text: "בחירה לפי תרחישים (30/40/60 מ״ר)" },
                { id: "pets-carpets", text: "חיות מחמד, שטיחים ופרקט: התאמות" },
                { id: "maintenance-costs", text: "תחזוקה ועלויות שוטפות: למה לצפות?" },
                { id: "urban-rentals", text: "אורח חיים עירוני ודירות שכורות" },
                { id: "mistakes", text: "טעויות נפוצות בקנייה" },
                { id: "methodology", text: "מתודולוגיית ההמלצה שלנו" },
              ].map((item, i) => (
                <a key={i} href={`#${item.id}`} className="text-muted hover:opacity-80 font-bold flex items-center gap-2 transition-colors text-sm py-1 border-b border-transparent">
                  <ArrowRight size={14} className="shrink-0" />
                  {item.text}
                </a>
              ))}
            </nav>
          </Card>

          <div className="prose prose-stone prose-lg max-w-none text-main space-y-12">
            
            <section id="why-different">
              <p className="text-2xl text-main font-bold leading-relaxed italic border-r-8 pr-8 py-2 rounded-l-2xl font-heebo tracking-tight bg-[rgba(var(--accent-rgb),0.12)]" style={{ borderColor: 'rgb(var(--accent-rgb))' }}>
                בעולם שבו הזמן הוא המשאב היקר ביותר, רובוט שואב-שוטף הפך מפריט מותרות לכלי הכרחי בבית הישראלי המודרני. עבור מי שגר בדירה קטנה, הבחירה ברובוט הנכון היא המפתח לחיסכון משמעותי בזמן ובמאמץ.
              </p>
              <p className="mt-8">
                דירה קטנה (30-60 מ״ר) מציבה אתגרים ייחודיים: יש יותר רהיטים ביחס לשטח הרצפה, פחות מקום פנוי לתחנת עגינה גדולה, והרעש של המנוע מורגש הרבה יותר. במאמר הזה נסביר בדיוק מה צריך לחפש, ממה להימנע, ואיך לבחור רובוט שיתאים בדיוק לממדים ולאתגרים של הדירה שלכם.
              </p>

              <p>
                למה דווקא <strong>רובוט שואב-שוטף</strong> לדירות קטנות? כי בדירה עירונית השגרה צפופה: חזרה מאוחרת הביתה, בישול במטבח קטן, פחות מקום לאחסן ציוד ניקוי, ויותר אבק שמגיע מהרחוב. רובוט שמנקה “מעט כל יום” יוצר תחושה של דירה מסודרת בלי להקדיש לזה ערב שלם.
              </p>
            </section>

            <section id="criteria">
              <h2 className="text-3xl font-black text-main border-b-2 border-soft pb-4 mb-8 flex items-center gap-3 font-heebo tracking-tight">
                <Target className="text-[rgb(var(--accent-rgb))]" /> 5 הקריטריונים הכי חשובים לדירה קטנה
              </h2>
              
              <div className="space-y-8">
                <div className="bg-surface p-8 rounded-3xl border border-soft shadow-sm">
                  <h3 className="text-xl font-bold text-main mb-4 font-heebo tracking-tight">1. גובה ומעבר מתחת לרהיטים</h3>
                  <p>זהו הקריטריון הקריטי ביותר. אם הרובוט גבוה מ-10 ס״מ, הוא כנראה לא ייכנס תחת רוב הספות המודרניות. בדקו דגמי ״Slim״ או רובוטים ללא צריח לייזר בולט אם הרהיטים שלכם נמוכים במיוחד.</p>
                </div>

                <div className="bg-surface p-8 rounded-3xl border border-soft shadow-sm">
                  <h3 className="text-xl font-bold text-main mb-4 font-heebo tracking-tight">2. רמת רעש ושעות הפעלה</h3>
                  <p>בחלל מצומצם אין לאן לברוח מהרעש. חפשו מכשירים עם רמת רעש של פחות מ-60dB במצב רגיל. זה יאפשר לכם להפעיל את הרובוט גם כשאתם בבית מבלי להשתגע.</p>
                </div>

                <div className="bg-surface p-8 rounded-3xl border border-soft shadow-sm">
                  <h3 className="text-xl font-bold text-main mb-4 font-heebo tracking-tight">3. ניווט וזיהוי מכשולים (AI)</h3>
                  <p>בדירות קטנות הכל צפוף יותר. כבלים, נעליים ורגלי כיסאות הם מכשול יומיומי. רובוט עם מצלמת AI לזיהוי אובייקטים עדיף משמעותית על רובוט שמסתמך רק על מגע (Bumper).</p>
                </div>

                <div className="bg-surface p-8 rounded-3xl border border-soft shadow-sm">
                  <h3 className="text-xl font-bold text-main mb-4 font-heebo tracking-tight">4. תחנה קומפקטית (או בלי תחנה)</h3>
                  <p>
                    תחנת ריקון/שטיפה היא “שדרוג” לנוחות, אבל בדירה קטנה היא גם אלמנט שתופס מקום קבוע. בדקו מראש אם יש לכם פינה יציבה ליד שקע, עם מרווח לפתיחה וניקוי, בלי לחסום מעבר. אם אין מקום — עדיף רובוט טוב בלי תחנה מאשר תחנה ענקית שמפריעה ביומיום.
                  </p>
                </div>

                <div className="bg-surface p-8 rounded-3xl border border-soft shadow-sm">
                  <h3 className="text-xl font-bold text-main mb-4 font-heebo tracking-tight">5. תחזוקה ועלויות שוטפות</h3>
                  <p>
                    ברובוטים שואבים-שוטפים יש “עלות נסתרת” של אביזרים מתכלים: מסננים, מברשות ומטליות. בדירה קטנה אמנם מנקים פחות שטח, אבל אם אין זמינות חלקי חילוף — החוויה מדרדרת מהר. העדיפו דגמים שיש להם אביזרים נפוצים וזולים, ושקל להחליף בלי טכנאי.
                  </p>
                </div>
              </div>
            </section>

            <section id="size-mapping">
              <h2 className="text-3xl font-black text-main border-b-2 border-soft pb-4 mb-8 font-heebo tracking-tight">
                גודל הדירה ומיפוי חכם: מה באמת משנה?
              </h2>
              <p>
                בדירה קטנה, מיפוי טוב לא נועד להרשים — הוא נועד <strong>לחסוך זמן ולהימנע מעצבים</strong>. כשהרובוט יודע לזהות חדרים, להבין איפה מכשול קבוע (כמו רגלי כיסאות) ולהיצמד למסלול יעיל, הוא יסיים ניקיון מהר יותר ויתקע פחות.
              </p>
              <p>
                למה זה חשוב במיוחד בדירות קטנות? כי כל תקיעה מורגשת יותר: אם הרובוט נתקע מתחת לספה או על כבל, כל הניקיון “נופל” — ואתם חוזרים לדירה לא נקייה.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="bg-surface">
                  <h3 className="text-xl font-bold text-main mb-2 font-heebo tracking-tight">מיפוי LiDAR</h3>
                  <p className="text-sm text-muted m-0 leading-relaxed">
                    מצוין לסריקה מהירה ומדויקת של דירה, במיוחד אם מסודר יחסית. חשוב לשים לב: הצריח מוסיף גובה — וזה יכול לשבור התאמה לרהיטים נמוכים מאוד.
                  </p>
                </Card>
                <Card className="bg-surface">
                  <h3 className="text-xl font-bold text-main mb-2 font-heebo tracking-tight">מצלמה + AI לזיהוי מכשולים</h3>
                  <p className="text-sm text-muted m-0 leading-relaxed">
                    בדירה עירונית “אמיתית” (כבלים, נעליים, צעצועים) זה שדרוג ענק. הוא מפחית תקלות ומאפשר להפעיל אוטומציות בלי לפחד שהרובוט יתקע.
                  </p>
                </Card>
              </div>
              <p>
                טיפ פרקטי: אם אתם אוהבים להפעיל ניקיון כשאתם מחוץ לבית — העדיפו דגם עם זיהוי מכשולים טוב. אם אתם מפעילים כשהבית מסודר — LiDAR יספיק ברוב המקרים.
              </p>
            </section>

            <section id="scenarios" className="py-12 bg-surface px-10 rounded-[3rem] shadow-sm overflow-hidden relative border border-soft">
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(var(--accent-rgb),0.08)] opacity-60" />
              <h2 className="text-3xl font-black mb-10 text-main relative z-10 font-heebo tracking-tight">בחירה לפי סוג הדירה</h2>
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <div className="space-y-4">
                  <div className="text-[rgb(var(--accent-hover-rgb))] font-black text-2xl font-heebo tracking-tight">30-40 מ״ר</div>
                  <p className="text-muted text-sm">הדגש: קומפקטיות מקסימלית. עדיף רובוט בלי תחנה גדולה שתופסת פינה יקרה.</p>
                </div>
                <div className="space-y-4 border-r border-soft pr-8 md:border-r-0 md:border-x md:px-8">
                  <div className="text-[rgb(var(--accent-hover-rgb))] font-black text-2xl font-heebo tracking-tight">40-50 מ״ר</div>
                  <p className="text-muted text-sm">הדגש: איזון. תחנת ריקון קומפקטית יכולה להתאים בפינה קבועה. ניווט טוב חוסך זמן.</p>
                </div>
                <div className="space-y-4 border-r border-soft pr-8 md:border-r-0">
                  <div className="text-[rgb(var(--accent-hover-rgb))] font-black text-2xl font-heebo tracking-tight">60 מ״ר ומעלה</div>
                  <p className="text-muted text-sm">הדגש: אוטומציה. שטח גדול יותר הופך תחנת ריקון/שטיפה לנוחה יותר לאורך זמן.</p>
                </div>
              </div>
            </section>

            <section id="pets-carpets">
              <h2 className="text-3xl font-black text-main border-b-2 border-soft pb-4 mb-8 font-heebo tracking-tight">
                חיות מחמד, שטיחים ופרקט: התאמות שחשוב להכיר
              </h2>
              <p>
                בדירה קטנה, שילוב של חיית מחמד/שטיח/פרקט יכול לשנות את מה שחשוב לכם. שיער של כלב או חתול מצטבר מהר, ושטיח קטן בכניסה יכול “לבלבל” דגמים מסוימים בשטיפה.
              </p>
              <ul className="space-y-3">
                <li><strong>חיות מחמד:</strong> עדיפו מברשת ראשית שמפחיתה הסתבכויות שיער, וזיהוי מכשולים טוב כדי להימנע מתקלות (למשל צעצועים/קערות).</li>
                <li><strong>שטיחים:</strong> חשוב שתהיה הרמת מטלית אוטומטית (או הימנעות משטיחים במצב שטיפה) כדי לא להרטיב שטיח בטעות.</li>
                <li><strong>פרקט:</strong> בדקו שליטה בכמות המים ושטיפה “עדינה” — בדירה קטנה קל להפריז במים אם אין ויסות.</li>
              </ul>
            </section>

            <section id="maintenance-costs">
              <h2 className="text-3xl font-black text-main border-b-2 border-soft pb-4 mb-8 font-heebo tracking-tight">
                תחזוקה ועלויות שוטפות: למה לצפות?
              </h2>
              <p>
                ברובוט שואב-שוטף, התחזוקה היא חלק מהעסקה. החדשות הטובות: בדירה קטנה זה לרוב פשוט — אבל צריך להכיר את הדברים מראש כדי לא להתאכזב.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="bg-surface">
                  <h3 className="text-xl font-bold text-main mb-2 font-heebo tracking-tight">מה מחליפים וכמה פעמים?</h3>
                  <p className="text-sm text-muted m-0 leading-relaxed">
                    מסנן כל כמה חודשים, מברשות לפי שחיקה, ומטליות לפי שימוש. בדירה קטנה אפשר להאריך קצת מרווחים — אבל לא כדאי למשוך יותר מדי כי זה פוגע בביצועים ובריח.
                  </p>
                </Card>
                <Card className="bg-surface">
                  <h3 className="text-xl font-bold text-main mb-2 font-heebo tracking-tight">עלויות נסתרות</h3>
                  <p className="text-sm text-muted m-0 leading-relaxed">
                    חפשו דגם עם אביזרים זמינים וזולים. אם חלקי חילוף נדירים — תשלמו יותר ותמתינו יותר. זה קריטי במיוחד בדירות שכורות כשלא רוצים “פרויקט” תחזוקה.
                  </p>
                </Card>
              </div>
              <p>
                טיפ קטן שעושה הבדל: נקו את המברשת ואת המסנן פעם בשבוע-שבועיים. זה שומר על שקט יחסי, על ביצועים, ומאריך חיים.
              </p>
            </section>

            <section id="urban-rentals">
              <h2 className="text-3xl font-black text-main border-b-2 border-soft pb-4 mb-8 font-heebo tracking-tight">
                אורח חיים עירוני ודירות שכורות: איך בוחרים חכם?
              </h2>
              <p>
                בדירות שכורות, אנשים נוטים לזוז, להחליף רהיטים ולהתאים את הבית “על הדרך”. לכן חשוב לבחור דגם שהוא גם <strong>עמיד</strong> וגם <strong>לא תלוי בהתקנות מורכבות</strong>.
              </p>
              <ul className="space-y-3">
                <li><strong>מיקום תחנה:</strong> העדיפו תחנה קטנה שקל להזיז ולמקם מחדש כשמשנים סידור.</li>
                <li><strong>שעות שקט:</strong> בדירות בבניינים צפופים חשוב מצב “שקט” אמיתי, כדי שתוכלו להפעיל גם בערב בלי להרגיש לא נעים.</li>
                <li><strong>אפליקציה ו-Wi‑Fi:</strong> ודאו שהאפליקציה יציבה, ושאפשר להגדיר אזורים אסורים (כבלים/פינת אוכל) בלי להתעסק כל פעם מחדש.</li>
              </ul>
              <p>
                בשורה התחתונה: בדירה עירונית, רובוט טוב הוא כזה שאתם מפעילים בלי לחשוב. אם אתם צריכים “להכין את הבית” חצי שעה לפני — הוא יישאר בארון.
              </p>
            </section>

            <section id="mistakes">
              <h2 className="text-3xl font-black text-main border-b-2 border-soft pb-4 mb-8 flex items-center gap-3 font-heebo tracking-tight">
                <AlertCircle className="text-red-500" /> טעויות נפוצות בקנייה
              </h2>
              <div className="grid gap-4">
                {[
                  { t: "קנייה בגלל 'עוצמת שאיבה' (Pa)", d: "בדירה קטנה עם רצפות, 4000Pa זה די והותר. אל תשלמו יותר על 8000Pa שרק מרעישים יותר." },
                  { t: "בחירה בתחנת עגינה ענקית", d: "תחנות עם מיכלי מים וריקון הן נפלאות, אבל הן דורשות שטח רצפה משמעותי. ודאו שיש לכם פינה ייעודית לפני." },
                  { t: "התעלמות מזמינות חלקי חילוף", d: "רובוט הוא מכשיר שצריך תחזוקה. ודאו שאפשר להזמין מברשות ומסננים באלי-אקספרס בקלות." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-red-50/30 border border-red-100 rounded-2xl items-start">
                    <div className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0">✕</div>
                    <div>
                      <h4 className="font-bold text-main mb-1 font-heebo tracking-tight">{item.t}</h4>
                      <p className="text-sm text-muted m-0 leading-relaxed font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="methodology" className="bg-surface-alt p-10 rounded-[2.5rem] border border-soft">
              <h2 className="text-2xl font-black text-main mb-6 flex items-center gap-3 font-heebo tracking-tight">
                <ShieldCheck className="text-[rgb(var(--accent-hover-rgb))]" /> איך אנחנו מדרגים?
              </h2>
              <p className="text-sm font-medium leading-relaxed">
                ההמלצות שלנו מבוססות על שקלול של 4 גורמים: <strong>ביצועים בחלל צפוף</strong> (מבחני מעבדה), <strong>אמינות לאורך זמן</strong> (ביקורות משתמשים מאומתות), <strong>זמינות חלקי חילוף</strong> באלי-אקספרס ו-<strong>יחס תמורה למחיר</strong>. אנחנו לא מקבלים תשלום מיצרנים כדי להמליץ על דגם ספציפי.
              </p>
            </section>

            <section className="text-center pt-8">
              <h2 className="text-3xl font-black text-main mb-8 font-heebo tracking-tight">מוכנים לבחור את הרובוט הבא שלכם?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/compare" variant="accent" className="px-12 py-5 text-xl">
                  עבור להשוואת דגמים מומלצים
                </CTAButton>
                <CTAButton href="/guide" variant="secondary">
                  למדריך הקנייה המהיר
                </CTAButton>
              </div>
            </section>

          </div>

          {/* Footer of article */}
          <footer className="mt-20 pt-12 border-t border-soft">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-surface p-8 rounded-3xl border border-soft shadow-sm">
              <div className="flex items-center gap-6 text-right">
                <div className="w-20 h-20 bg-surface-alt rounded-full flex items-center justify-center text-muted shrink-0 border border-soft">
                   <Info size={40} />
                </div>
                <div>
                  <h4 className="font-bold text-main text-xl mb-1 font-heebo tracking-tight">צוות המומחים של {SITE_NAME}</h4>
                  <p className="text-muted m-0 font-medium">סקירות אובייקטיביות מבוססות מחקר, ניסיון ובדיקות שטח.</p>
                </div>
              </div>
              <CTAButton href="mailto:support@robotpro.co.il" variant="secondary" className="px-6 py-3 text-sm shrink-0">
                <MessageCircle size={18} />
                דברו איתנו
              </CTAButton>
            </div>
            
            <AffiliateDisclosure className="mt-12 text-center leading-relaxed max-w-2xl mx-auto" />
          </footer>

          <SeoJsonLd
            data={{
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'רובוט שואב שוטף מומלץ לשימוש בדירה קטנה',
              description:
                'מאמר עומק לדירות קטנות: קריטריונים אמיתיים (גובה, רעש, ניווט, תחנה), טעויות נפוצות ורשימת בדיקה.',
              inLanguage: 'he-IL',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${SITE_URL.origin}/article`,
              },
              datePublished: '2026-01-01',
              dateModified: '2026-01-08',
              author: {
                '@type': 'Organization',
                name: SITE_NAME,
              },
              publisher: {
                '@type': 'Organization',
                name: SITE_NAME,
                url: SITE_URL.origin,
              },
            }}
          />
        </div>
      </div>
    </article>
  );
}
