import React from 'react';
import Link from 'next/link';
import { pageMetadata } from '../lib/seo';
import SeoJsonLd from '../components/SeoJsonLd';

export const metadata = pageMetadata({
  title: 'שאלות נפוצות על רובוט שואב שוטף לדירה קטנה',
  description:
    'מענה מהיר לשאלות לפני קנייה ושימוש: רעש, שטיחים, חיות מחמד, תחנה, מיפוי, כבלים ותחזוקה. כולל סכמת FAQPage.',
  path: '/faq',
});

const faqs = [
  { q: "האם רובוט שואב באמת יכול להחליף שטיפה ידנית?", a: "בדירות קטנות התשובה היא כמעט כן מוחלט. הרובוטים המודרניים מצוינים בתחזוקה יומיומית שמונעת הצטברות לכלוך, כך שצריך שטיפה ידנית יסודית רק פעם בכמה שבועות." },
  { q: "האם הרובוט יפול במדרגות?", a: "לא. רוב הדגמים כוללים חיישני מצוק (Cliff) שמזהים קצה ועוצרים את הרובוט בזמן." },
  { q: "כמה רעש הרובוט עושה?", a: "במצב רגיל, רוב הרובוטים פועלים בעוצמה של 60-65 דציבלים - דומה למזגן פועל. בדירה קטנה מומלץ להפעילם כשאתם מחוץ לבית או ב'מצב שקט'." },
  { q: "האם הרובוט מסתדר עם שטיחים?", a: "כן, רוב הדגמים מזהים שטיחים אוטומטית, מגבירים עוצמת שאיבה ומרימים את מטלית השטיפה כדי לא להרטיב את השטיח." },
  { q: "מה קורה אם יש לי כלב או חתול?", a: "חפשו דגמים עם עוצמת שאיבה של 4000Pa ומעלה ומברשות סיליקון שמונעות הסתבכות של שיער." },
  { q: "האם צריך אינטרנט כדי להפעיל את הרובוט?", a: "אפשר להפעיל בלחיצת כפתור פיזית, אבל כדי ליהנות ממיפוי, לוחות זמנים ועדכונים, חובה חיבור ל-Wi-Fi ואפליקציה." },
  { q: "כמה מקום תופסת תחנת העגינה?", a: "תחנה בסיסית תופסת שטח של כ-30 ס״מ. תחנת ריקון אוטומטית דורשת גובה של כ-40-50 ס״מ ושטח רצפה גדול יותר." },
  { q: "האם הרובוט יודע להימנע מכבלים על הרצפה?", a: "רק דגמים עם זיהוי מכשולים מתקדם (מצלמה/חיישנים חכמים) יודעים להימנע מחפצים קטנים כמו כבלים וגרביים. בדגמים פשוטים יותר כדאי 'לפנות' את הרצפה לפני ההפעלה." },
  { q: "איזה גובה רובוט מתאים לדירה קטנה עם ספה נמוכה?", a: "הכלל הכי חשוב: למדוד את המרווח מתחת לספה/מיטה. אם המרווח קטן מ-10 ס״מ, חפשו דגם נמוך (Slim) כדי שלא יישארו אזורים שלא נוקו." },
  { q: "תחנת ריקון/שטיפה שווה בדירה קטנה?", a: "רק אם יש לכם מקום קבוע שמסתדר בבית. בדירה קטנה לפעמים עדיף תחנה קטנה יותר או בלי תחנה בכלל, כדי לא לבזבז שטח יקר." },
  { q: "האם רובוט שואב שוטף מתאים לפרקט?", a: "כן, אבל חשוב לבחור דגם ששולט בכמות המים ושומר על מטלית לחה ולא רטובה מדי. בפרקט עדיף גם להימנע מהפעלת שטיפה כשהבית ריק אם יש סיכון לנזילות." },
  { q: "כל כמה זמן צריך להחליף מסננים/מברשות?", a: "זה משתנה לפי שימוש ואבק, אבל בדירה קטנה רוב האנשים מחליפים מסנן כל כמה חודשים ומברשות כשיש שחיקה. כדאי לוודא שיש חלקי חילוף זמינים לפני קנייה." },
  { q: "איך לבחור בין לייזר (LiDAR) למצלמה בדירה קטנה?", a: "לייזר נותן מיפוי מדויק, אבל לפעמים מוסיף גובה. מצלמה/זיהוי מכשולים טובים במיוחד כשיש כבלים וחפצים קטנים. בדירה קטנה זה לרוב חשוב יותר מ'עוד דיוק' במפה." }
];

export default function FAQPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 bg-page">
      <h1 className="text-4xl font-bold mb-8 text-center text-main">שאלות נפוצות על רובוט שואב שוטף לדירה קטנה</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group bg-surface border border-soft rounded-2xl overflow-hidden shadow-sm">
            <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-main list-none">
              <span>{faq.q}</span>
              <span className="transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div className="px-6 pb-6 text-muted leading-relaxed font-medium">
              {faq.a}
            </div>
          </details>
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-muted">
        <div className="font-bold text-main mb-2">רוצים להעמיק?</div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/guide" className="font-bold hover:underline text-[rgb(var(--accent-hover-rgb))]">
            מדריך קנייה
          </Link>
          <Link href="/compare" className="font-bold hover:underline text-[rgb(var(--accent-hover-rgb))]">
            השוואת דגמים
          </Link>
          <Link href="/article" className="font-bold hover:underline text-[rgb(var(--accent-hover-rgb))]">
            מאמר עומק
          </Link>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <SeoJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
    </main>
  );
}
