import React from 'react';
import { Metadata } from 'next';
import { Check, Info, Star, ChevronDown, Map, Battery, Volume2, HelpCircle } from 'lucide-react';

// 1. SEO Metadata
export const metadata: Metadata = {
  title: 'רובוט שואב שוטף מומלץ לשימוש בדירה קטנה | המדריך המלא 2024',
  description: 'מחפשים רובוט שואב שוטף לדירה קטנה? הכנסו למדריך המקיף: השוואת דגמים, המלצות לחיסכון במקום, עוצמת שאיבה וטיפים לתחזוקה קלה.',
};

export default function Home() {
  
  // 2. FAQ Schema for Google (JSON-LD) - Updated with new questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "מה ההבדל בין רובוט שואב לרובוט שואב-שוטף?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "רובוט שואב רק יונק אבק ולכלוך יבש. רובוט שואב-שוטף (היברידי) כולל גם מיכל מים ומטלית, ומסוגל לבצע שאיבה וניגוב בפעולה אחת - יתרון משמעותי לחיסכון בזמן ומקום בדירות קטנות."
        }
      },
      {
        "@type": "Question",
        "name": "מה גודל הדירה המינימלי לשימוש ברובוט שואב-שוטף?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "אין גודל מינימלי, אך בדירות סטודיו או דירות מתחת ל-40 מ\"ר חשוב לוודא שיש מספיק מרווח פנוי על הרצפה לתנועת הרובוט. רובוטים מודרניים יודעים לנקות ביעילות גם חללים קטנים ומורכבים."
        }
      },
      {
        "@type": "Question",
        "name": "האם רובוט שואב-שוטף מתאים לשטיחים?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "כן, אך תלוי בדגם. רוב הרובוטים המתקדמים מזהים שטיחים אוטומטית ומגבירים את עוצמת השאיבה. דגמים משוכללים יותר יודעים להרים את המטלית כשהם עולים על שטיח כדי לא להרטיב אותו."
        }
      },
      {
        "@type": "Question",
        "name": "מה חשוב לבדוק לפני קנייה של רובוט לדירה קטנה?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "שלושת הדברים הקריטיים: 1. גובה הרובוט (כדי שייכנס מתחת לרהיטים). 2. מערכת ניווט חכמה (לייזר/מצלמה) למניעת היתקעות. 3. גודל עמדת הטעינה (כדי שלא תתפוס מקום יקר)."
        }
      },
      {
        "@type": "Question",
        "name": "האם תחנת ריקון אוטומטית שווה את ההשקעה?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "בדירות קטנות שבהן האבק מצטבר מהר, זהו שדרוג משמעותי שחוסך התעסקות יומיומית. עם זאת, התחנה תופסת מקום, אז יש לוודא שיש לכם נישה מתאימה עבורה."
        }
      },
      {
        "@type": "Question",
        "name": "כמה זמן לוקח לרובוט לנקות דירה קטנה?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "בדירה ממוצעת של 50-60 מ\"ר, ניקוי יסודי אורך בדרך כלל בין 30 ל-45 דקות, תלוי בכמות המכשולים ובעוצמת השאיבה שנבחרה."
        }
      },
      {
        "@type": "Question",
        "name": "איך לתחזק רובוט שואב-שוטף?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "תחזוקה בסיסית כוללת: ריקון מיכל האבק (אם אין עמדה), שטיפת המטלית לאחר כל שימוש, ניקוי השערות מהמברשת הראשית פעם בשבוע, וניגוב החיישנים מאבק אחת לחודש."
        }
      },
      {
        "@type": "Question",
        "name": "האם רובוט שואב-שוטף בטוח לחיות מחמד?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "כן, בדרך כלל חיות מחמד מתרגלות אליו מהר. אם יש לכם גורים או חיות חששניות, מומלץ לבחור ברובוט שקט במיוחד ולהפעיל אותו בהתחלה כשהם בחדר אחר."
        }
      }
    ]
  };

  return (
    <div dir="rtl" className="font-sans text-stone-800 bg-stone-50 min-h-screen">
      {/* Inject Schema into Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- Header --- */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-amber-700 flex items-center gap-2">
            <span className="bg-amber-100 p-1 rounded-lg">🤖</span>
            רובוט.פרו
          </div>
          <div className="hidden md:flex space-x-reverse space-x-8">
            <a href="#" className="text-stone-600 hover:text-amber-700 font-medium transition">בית</a>
            <a href="#guide" className="text-stone-600 hover:text-amber-700 font-medium transition">מדריך קנייה</a>
            <a href="#comparison" className="text-stone-600 hover:text-amber-700 font-medium transition">השוואת דגמים</a>
            <a href="#faq" className="text-stone-600 hover:text-amber-700 font-medium transition">שאלות נפוצות</a>
          </div>
          <button className="bg-amber-700 text-white px-5 py-2 rounded-full font-medium hover:bg-amber-800 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
            הדגמים המומלצים
          </button>
        </div>
      </nav>

      {/* --- Hero Section (Updated Size & Colors) --- */}
      <header className="relative bg-white pt-12 pb-24 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text (Less width) */}
          <div className="text-right z-10 lg:col-span-5">
            <span className="inline-block bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-amber-200">
              🍂 מדריך חורף 2024
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-stone-900 tracking-tight">
              רובוט שואב שוטף <span className="text-amber-700">מומלץ</span> לשימוש בדירה קטנה
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              המדריך המלא לחיים קלים יותר. השוואה מקיפה, המלצות אובייקטיביות וטיפים לניקיון חכם בדירות עד 60 מ"ר.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#guide" className="bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-amber-800 transition shadow-lg hover:shadow-amber-200/50">
                למדריך הקנייה
              </a>
              <a href="#comparison" className="bg-white text-amber-700 border-2 border-amber-700 px-8 py-4 rounded-xl font-bold text-center hover:bg-amber-50 transition">
                להשוואת דגמים
              </a>
            </div>
          </div>

          {/* Hero Video (More width - Enlarged) */}
          <div className="relative lg:col-span-7">
            <div className="absolute -inset-2 bg-gradient-to-tr from-amber-200 to-orange-100 rounded-[2rem] blur-lg opacity-60"></div>
            <div className="relative bg-black rounded-[1.5rem] overflow-hidden shadow-2xl aspect-video border-4 border-white transform transition hover:scale-[1.01] duration-500">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
                poster="/images/video-placeholder.jpg"
              >
                <source src="/robot-hero.mp4" type="video/mp4" />
                הדפדפן שלך לא תומך בוידאו.
              </video>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-5 py-3 rounded-xl shadow-xl border border-stone-100 flex items-center gap-3 animate-fade-in-up">
                <div className="bg-green-100 p-2 rounded-full">
                  <Check className="text-green-700 w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider">נבדק ואושר</p>
                  <p className="font-bold text-stone-800">מותאם לדירות קטנות</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Key Features Section --- */}
      <section className="py-20 bg-stone-50" id="guide">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">שלושה דברים שחייבים לבדוק</h2>
            <div className="w-24 h-1.5 bg-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 rotate-3">
                <Map className="text-amber-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-800">מיפוי לייזר (Lidar)</h3>
              <p className="text-stone-600 leading-relaxed">
                בדירה קטנה עם הרבה רהיטים, רובוט בלי מיפוי חכם פשוט ילך לאיבוד. אל תתפשרו על ניווט מבוסס לייזר או מצלמה שיודע למפות את החלל.
              </p>
            </div>
             {/* Feature 2 */}
             <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 -rotate-2">
                <Battery className="text-orange-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-800">תחנת עגינה קומפקטית</h3>
              <p className="text-stone-600 leading-relaxed">
                מקום הוא מצרך נדיר. חפשו דגמים עם תחנת ריקון צרה ואסתטית שמשתלבת בעיצוב הבית ולא תופסת חצי סלון.
              </p>
            </div>
             {/* Feature 3 */}
             <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="bg-stone-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 rotate-1">
                <Volume2 className="text-stone-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-stone-800">עוצמת שאיבה ושקט</h3>
              <p className="text-stone-600 leading-relaxed">
                בחלל קטן הרעש מורגש יותר. מומלץ לבחור רובוט עם מנוע שקט (מתחת ל-65dB) שמאפשר לכם להיות בבית בזמן שהוא עובד.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Recommendations Section --- */}
      <section className="py-20 bg-white" id="recommendations">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold tracking-wide uppercase text-sm">הבחירות שלנו</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-6">המלצות מובילות לדירות קטנות</h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              אחרי בדיקה של עשרות דגמים, סיננו עבורכם את השלושה המשתלמים ביותר שמתאימים במיוחד לחללים אורבניים.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 hover:border-amber-200 transition duration-300 flex flex-col">
              <div className="h-56 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-stone-100 flex items-center justify-center text-stone-400 group-hover:scale-105 transition duration-500">
                  {/* PLACEHOLDER */}
                  <span className="text-4xl opacity-20">🖼️</span>
                </div>
                <div className="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">המשתלם ביותר</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-stone-800">Xiaomi Robot Vacuum S10</h3>
                <p className="text-stone-500 text-sm mb-6">הפתרון האידיאלי לתקציב נמוך ולדירות סטודיו. קטן, חכם ועושה את העבודה.</p>
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-3 text-sm text-stone-700">
                    <div className="bg-green-100 p-1 rounded-full"><Check className="w-3 h-3 text-green-600"/></div>
                    מיפוי לייזר מדויק
                  </div>
                  <div className="flex items-center gap-3 text-sm text-stone-700">
                    <div className="bg-green-100 p-1 rounded-full"><Check className="w-3 h-3 text-green-600"/></div>
                    שאיבה חזקה 4000Pa
                  </div>
                  <div className="flex items-center gap-3 text-sm text-stone-700">
                    <div className="bg-green-100 p-1 rounded-full"><Check className="w-3 h-3 text-green-600"/></div>
                    עיצוב מינימליסטי
                  </div>
                </div>
                <a 
                  href="#" 
                  className="w-full bg-stone-800 text-white py-4 rounded-xl font-bold text-center hover:bg-stone-900 transition flex items-center justify-center gap-2 shadow-lg shadow-stone-200"
                >
                  לצפייה במחיר באלי אקספרס
                </a>
              </div>
            </div>

            {/* Product 2 (Highlighted) */}
            <div className="group bg-white rounded-3xl overflow-hidden border-2 border-amber-500 shadow-2xl shadow-amber-100/50 relative transform md:-translate-y-6 flex flex-col">
              <div className="absolute top-0 inset-x-0 bg-amber-500 text-white text-center text-sm font-bold py-1.5 tracking-wide">🏆 הבחירה המומלצת</div>
              <div className="h-64 bg-stone-100 relative mt-8 overflow-hidden">
                 <div className="absolute inset-0 bg-stone-50 flex items-center justify-center text-stone-400 group-hover:scale-105 transition duration-500">
                   {/* PLACEHOLDER */}
                   <span className="text-5xl opacity-20">🖼️</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-stone-900">Roborock Q7 Max</h3>
                <p className="text-stone-500 text-sm mb-6">סוס עבודה אמין. שוטף ושואב בו זמנית עם אפליקציה מושלמת בעברית.</p>
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-3 text-sm text-stone-700 font-medium">
                    <div className="bg-amber-100 p-1 rounded-full"><Check className="w-3 h-3 text-amber-700"/></div>
                    מיכל מים משולב חכם
                  </div>
                  <div className="flex items-center gap-3 text-sm text-stone-700 font-medium">
                    <div className="bg-amber-100 p-1 rounded-full"><Check className="w-3 h-3 text-amber-700"/></div>
                    ניווט LiDAR מתקדם
                  </div>
                  <div className="flex items-center gap-3 text-sm text-stone-700 font-medium">
                    <div className="bg-amber-100 p-1 rounded-full"><Check className="w-3 h-3 text-amber-700"/></div>
                    עוצמת שאיבה אדירה
                  </div>
                </div>
                <a 
                  href="#" 
                  className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold text-center hover:bg-amber-700 transition flex items-center justify-center gap-2 shadow-xl shadow-amber-200"
                >
                  לצפייה במחיר באלי אקספרס
                </a>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 hover:border-amber-200 transition duration-300 flex flex-col">
              <div className="h-56 bg-white relative overflow-hidden">
                 <div className="absolute inset-0 bg-stone-100 flex items-center justify-center text-stone-400 group-hover:scale-105 transition duration-500">
                   {/* PLACEHOLDER */}
                   <span className="text-4xl opacity-20">🖼️</span>
                </div>
                <div className="absolute top-4 right-4 bg-stone-800 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">פרימיום</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-stone-800">Dreame L10s Pro</h3>
                <p className="text-stone-500 text-sm mb-6">מערכת AI לזיהוי מכשולים - מושלם לבתים עם ילדים או בלאגן.</p>
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-3 text-sm text-stone-700">
                    <div className="bg-green-100 p-1 rounded-full"><Check className="w-3 h-3 text-green-600"/></div>
                    זיהוי גרביים וכבלים
                  </div>
                  <div className="flex items-center gap-3 text-sm text-stone-700">
                    <div className="bg-green-100 p-1 rounded-full"><Check className="w-3 h-3 text-green-600"/></div>
                    זוג מגבים מסתובבים (שפשוף)
                  </div>
                  <div className="flex items-center gap-3 text-sm text-stone-700">
                    <div className="bg-green-100 p-1 rounded-full"><Check className="w-3 h-3 text-green-600"/></div>
                    הרמת מקרצפות על שטיח
                  </div>
                </div>
                <a 
                  href="#" 
                  className="w-full bg-stone-800 text-white py-4 rounded-xl font-bold text-center hover:bg-stone-900 transition flex items-center justify-center gap-2 shadow-lg shadow-stone-200"
                >
                  לצפייה במחיר באלי אקספרס
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section (Updated Content & Style) --- */}
      <section className="py-20 bg-amber-50" id="faq">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">שאלות נפוצות</h2>
            <p className="text-stone-600">כל מה שצריך לדעת לפני שבוחרים את העוזר החדש שלכם</p>
          </div>
          
          <div className="space-y-4">
            {/* Loop through schema to generate UI automatically or manual layout */}
            {faqSchema.mainEntity.map((item, index) => (
              <details key={index} className="group bg-white rounded-2xl border border-stone-200 shadow-sm open:ring-2 open:ring-amber-100 open:border-amber-300 transition-all duration-200">
                <summary className="flex items-center justify-between p-6 font-bold cursor-pointer list-none text-lg text-stone-800 hover:text-amber-700 transition">
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-5 h-5 text-amber-500" />
                    {item.name}
                  </div>
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-stone-400" />
                </summary>
                <div className="px-6 pb-6 pt-0 mr-9 text-stone-600 leading-relaxed border-t border-transparent group-open:border-stone-100 group-open:pt-4">
                  {item.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 text-sm border-b border-stone-800 pb-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <span className="text-2xl">🤖</span> רובוט.פרו
            </h4>
            <p className="leading-relaxed mb-6">
              המדריך המקצועי והאובייקטיבי לבחירת שואב רובוטי שוטף לדירות בישראל. אנחנו כאן כדי לעזור לכם לחסוך זמן וכסף.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">ניווט מהיר</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-amber-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-amber-500 rounded-full"></span> דף הבית</a></li>
              <li><a href="#guide" className="hover:text-amber-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-amber-500 rounded-full"></span> מדריך קנייה</a></li>
              <li><a href="#comparison" className="hover:text-amber-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-amber-500 rounded-full"></span> השוואת דגמים</a></li>
              <li><a href="#faq" className="hover:text-amber-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-amber-500 rounded-full"></span> שאלות נפוצות</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">קטגוריות</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-amber-500 transition">רובוטים לדירות קטנות</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">רובוטים לבעלי חיים</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">רובוטים עד 1000 ש"ח</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">תחזוקה וטיפים</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">גילוי נאות</h4>
            <p className="leading-relaxed bg-stone-800/50 p-4 rounded-xl border border-stone-800">
              חלק מהקישורים באתר הם קישורי אפילייט (Aliexpress). רכישה דרכם עשויה להקנות לנו עמלה קטנה ללא תוספת עלות מצדכם. הכנסות אלו מסייעות לנו לתחזק את האתר.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center text-stone-600">
          <p>&copy; 2024 רובוט.פרו | כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  );
}