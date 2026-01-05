import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'שאלות נפוצות | רובוט.פרו',
  description: 'תשובות לכל השאלות הנפוצות על רובוטים שואבים לדירות קטנות.',
};

const faqs = [
  {
    q: "האם רובוט שואב באמת שוטף את הרצפה?",
    a: "חשוב לתאם ציפיות: רוב הרובוטים מבצעים 'ניגוב לח' ולא שטיפה כמו ספונג'ה עם דלי מים. זה מצוין לתחזוקה יומיומית והסרת אבק דק, אבל לא יסיר כתמים קשים מאוד."
  },
  {
    q: "האם צריך אינטרנט בבית כדי שהרובוט יעבוד?",
    a: "הרובוט יכול לעבוד בלחיצת כפתור פיזית גם ללא אינטרנט, אבל כדי להגדיר קירות וירטואליים, לו\"ז ניקיון ולראות מפה - חובה לחבר אותו ל-WiFi."
  },
  {
    q: "כל כמה זמן צריך להחליף חלקים?",
    a: "מומלץ להחליף פילטר HEPA ומברשת צד כל 3-6 חודשים (תלוי בשימוש), ואת המברשת הראשית כל 6-12 חודשים. האפליקציה בדרך כלל תתריע לכם."
  },
  {
    q: "האם הוא יפול במדרגות?",
    a: "לא. לכל הרובוטים המודרניים יש חיישני מצוק (Cliff Sensors) בתחתית שמזהים נפילה ועוצרים את הרובוט מיידית."
  },
  {
    q: "כמה מקום צריך להשאיר לעמדת הטעינה?",
    a: "היצרנים ממליצים על 50 ס\"מ מכל צד, אבל בדירות קטנות מניסיון אפשר להסתדר גם עם 10-20 ס\"מ, כל עוד לרובוט יש גישה ישרה ופנויה לעמדה."
  }
];

export default function FAQPage() {
  // Generate JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-stone-50 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center text-stone-900 mb-12">שאלות נפוצות</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-2xl border border-stone-200 open:border-amber-400 open:ring-1 open:ring-amber-100 transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-bold text-lg text-stone-800 group-hover:text-amber-700 transition flex gap-3">
                  <HelpCircle className="text-amber-500 w-6 h-6 shrink-0" />
                  {faq.q}
                </h3>
                <ChevronDown className="text-stone-400 group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 pt-0 text-stone-600 leading-relaxed border-t border-transparent group-open:border-stone-100 group-open:pt-4 ml-8">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
