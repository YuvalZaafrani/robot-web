import React from 'react';
// import Link from 'next/link'; // Un-comment in your actual Next.js project
import { ArrowLeft } from 'lucide-react';

// Mock Link for preview purposes. In Next.js, use the real <Link> component.
const Link = ({ href, children, className }: any) => (
  <a href={href} className={className}>
    {children}
  </a>
);

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-stone-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">המדריך המהיר</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mt-2 mb-8">איך בוחרים רובוט ב-3 צעדים</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-3">
                <span className="bg-stone-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                התאמה פיזית
              </h2>
              <p className="text-stone-600 text-lg">
                הדבר הכי חשוב בדירה קטנה הוא שהרובוט ייכנס מתחת לרהיטים. קחו סרט מדידה. 
                אם הספה בגובה 8 ס"מ מהרצפה, אתם חייבים רובוט נמוך (ללא לייזר). אם יש לכם 10 ס"מ ומעלה - השמיים הם הגבול.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-3">
                <span className="bg-stone-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                טכנולוגיית ניווט
              </h2>
              <p className="text-stone-600 text-lg">
                אל תתפשרו על רובוט "טיפש" שנוסע אקראית. בדירה קטנה הוא יפספס פינות. חפשו מילים כמו <strong>LiDAR</strong>, <strong>VSLAM</strong> או <strong>Mapping</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-3">
                <span className="bg-stone-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                האם צריך שוטף?
              </h2>
              <p className="text-stone-600 text-lg">
                אם אתם שונאים להעביר סמרטוט - כן. אבל זכרו: רובוטים זולים רק "מלטפים" את הרצפה עם סמרטוט רטוב. רובוטים יקרים יותר מקרצפים באמת.
              </p>
            </section>
          </div>

          <div className="mt-12 bg-amber-50 p-6 rounded-2xl text-center">
            <h3 className="font-bold text-xl mb-4 text-amber-900">מוכנים לבחור?</h3>
            <Link href="/compare" className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-amber-700 transition shadow-lg">
              עברו לטבלת ההשוואה <ArrowLeft className="w-5 h-5"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
