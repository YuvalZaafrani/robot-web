import React from 'react';
// import Link from 'next/link'; // Un-comment in your actual Next.js project
import { Clock, Calendar, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';
// import { Metadata } from 'next'; // Un-comment in your actual Next.js project

// Mock Link for preview purposes. In Next.js, use the real <Link> component.
const Link = ({ href, children, className }: any) => (
  <a href={href} className={className}>
    {children}
  </a>
);

export const metadata = {
  title: 'המדריך המלא: איך לבחור רובוט לדירה קטנה | רובוט.פרו',
  description: 'מאמר מקיף המפרט את כל השיקולים החשובים לפני רכישת רובוט שואב לדירה קטנה: גובה, רעש, מיפוי ועוד.',
};

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-stone-50 pb-20">
      
      {/* Article Header */}
      <header className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 text-stone-400 text-sm mb-6">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> עודכן: ינואר 2026</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> 8 דקות קריאה</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            איך לבחור רובוט שואב-שוטף לדירה קטנה: המדריך הפרקטי
          </h1>
          <p className="text-xl text-stone-300 font-light">
            כל מה שצריך לדעת כדי לא לקנות רובוט שייתקע לכם בין הרגליים (תרתי משמע).
          </p>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 -mt-10">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl">
          
          <div className="prose prose-stone prose-lg max-w-none">
            <p className="lead text-xl font-medium text-stone-800 mb-8">
              בדירה גדולה, לרובוט יש מקום לטעות. בדירה קטנה? כל סנטימטר קובע. הרעש מורגש יותר, אין איפה להחביא את עמדת הטעינה, ואם הוא נתקע מתחת לספה - כל הסלון מושבת.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-stone-900">הקריטריון הקריטי: הגובה</h2>
            <p>
              לפני שאתם מסתכלים על עוצמת שאיבה או אפליקציה, קחו מטר ומדדו את הגובה מתחת לרהיטים שלכם. ספות, מזנונים, מיטות.
            </p>
            <div className="bg-amber-50 border-r-4 border-amber-500 p-6 my-8 rounded-r-xl">
              <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5"/> כלל אצבע
              </h4>
              <p className="m-0 text-sm">
                אם הגובה מתחת לספה הוא 9 ס"מ, רובוט עם LIDAR (שגובהו בדרך כלל 9.6 ס"מ) פשוט לא ייכנס. במקרה כזה, עדיף רובוט עם מצלמה או ג'יירוסקופ (כמו Dreame F9 או דגמי סלים) שגובהם כ-8 ס"מ.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-stone-900">רעש: האויב השקט</h2>
            <p>
              בדירת 100 מ"ר, הרובוט יכול לעבוד בחדר השינה בזמן שאתם בסלון. בדירת 50 מ"ר? הוא אתכם בכל מקום.
              מומלץ לחפש דגמים שמצהירים על רמת רעש של פחות מ-<strong>65dB</strong> במצב רגיל.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">צ'ק ליסט מהיר לקנייה:</h3>
            <ul className="space-y-2 list-none p-0">
              {[
                "מדדתי את הגובה מתחת לכל הרהיטים.",
                "יש לי מקום ייעודי לתחנת העגינה (עם שקע קרוב).",
                "בדקתי אם הרובוט יודע לעבור ספים (אם יש כאלה).",
                "החלטתי אם שטיפה (ניגוב) חשובה לי או רק שאיבה."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-stone-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5"/>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-stone-900">סיכום</h2>
            <p>
              הבחירה הנכונה תלויה קודם כל במגבלות הפיזיות של הדירה שלכם. אל תתפתו לקנות את המכשיר הכי חזק או הכי יקר אם הוא לא נכנס מתחת לספה שלכם.
            </p>
          </div>

          {/* Bottom CTAs */}
          <div className="mt-16 pt-10 border-t border-stone-200 grid sm:grid-cols-2 gap-6">
            <Link href="/compare" className="group bg-stone-900 text-white p-6 rounded-2xl text-center hover:bg-stone-800 transition">
              <h3 className="font-bold text-lg mb-2 group-hover:text-amber-400 transition">לא בטוחים בדגם?</h3>
              <p className="text-sm text-stone-400 mb-4">עברו לטבלת ההשוואה המלאה</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold">להשוואה <ArrowLeft className="w-4 h-4"/></span>
            </Link>
            <Link href="/guide" className="group bg-amber-50 text-amber-900 p-6 rounded-2xl text-center hover:bg-amber-100 transition border border-amber-100">
              <h3 className="font-bold text-lg mb-2">צריכים עוד עזרה?</h3>
              <p className="text-sm text-amber-800/70 mb-4">קראו את המדריך המקוצר לדירות קטנות</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold">למדריך המקוצר <ArrowLeft className="w-4 h-4"/></span>
            </Link>
          </div>

        </div>
      </div>
    </article>
  );
}
