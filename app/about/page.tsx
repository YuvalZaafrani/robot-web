import React from 'react';
import { Mail, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-stone-900 mb-8">אודות רובוט.פרו</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 space-y-6 text-stone-700 leading-relaxed">
          <p>
            ברוכים הבאים! האתר הוקם מתוך צורך אישי. כשחיפשתי רובוט לדירת ה-50 מ"ר שלי בתל אביב, הלכתי לאיבוד בין המפרטים. כולם דיברו על "וילה" ו"קומות", ואף אחד לא דיבר על איך הרובוט מסתדר בין הכיסאות בפינת האוכל הצפופה.
          </p>
          
          <h2 className="text-xl font-bold text-stone-900 pt-4">איך אנחנו בוחרים?</h2>
          <p>
            ההמלצות באתר מבוססות על שקלול של: מפרט טכני (בדגש על גובה ורעש), ביקורות משתמשים מאומתות מרחבי הרשת, ויחס תמורה למחיר.
          </p>

          <div className="bg-stone-100 p-6 rounded-xl border border-stone-200 mt-6">
            <h3 className="font-bold flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-stone-600"/> גילוי נאות ושקיפות
            </h3>
            <p className="text-sm">
              האתר משתמש בקישורי "אפילייט" (Affiliate) לאלי-אקספרס. המשמעות היא שאם תקנו דרך הקישור, נקבל עמלה קטנה (על חשבון המוכר, לא על חשבונכם). זה עוזר לנו לתחזק את האתר ולהישאר באוויר.
            </p>
          </div>

          <h2 className="text-xl font-bold text-stone-900 pt-4">נגישות וצור קשר</h2>
          <p>
            אנו עושים מאמץ להפוך את האתר לנגיש לכולם (תמיכה בקורא מסך, ניגודיות צבעים, ניווט מקלדת). אם נתקלתם בבעיה, אנא ספרו לנו.
          </p>
          
          <a href="mailto:contact@robot.pro" className="inline-flex items-center gap-2 text-amber-700 font-bold hover:underline mt-2">
            <Mail className="w-5 h-5"/> contact@robot.pro
          </a>
        </div>
      </div>
    </div>
  );
}
