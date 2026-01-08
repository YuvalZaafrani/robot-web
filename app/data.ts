// נתונים מרכזיים לכל האתר - שינוי כאן ישפיע על הטבלה, דף הבית וההשוואה

export interface RobotModel {
  id: string;
  name: string;
  priceRange: string;
  ratingStars: number; // דירוג AliExpress (כוכבים)
  soldText: string; // למשל: "61" / "1000+"
  reviewsCount: number; // מספר ביקורות
  height: number; // ס"מ
  suction: number; // Pa
  noise: number; // dB
  waterTank: boolean; // האם שוטף
  station: 'ריקון' | 'שטיפה' | 'משולבת' | 'ללא';
  rating: number; // 1-10 לדירה קטנה
  scoreOverall: number; // 0-100
  scoreBreakdown: {
    height: number;
    noise: number;
    navigation: number;
    mop: number;
    station: number;
  };
  image: string; // נתיב תמונה ב-public
  affiliateLink: string;
  tags: string[]; // למשל: "מומלץ", "תקציב נמוך"
  shortDesc: string;
  bestFor: string;
  highlightBullets: string[];
}

export const robots: RobotModel[] = [
  {
    id: 'xiaomi-mijia-m30s',
    name: 'Xiaomi Mijia M30S',
    priceRange: 'מחיר משתנה (AliExpress)',
    ratingStars: 5,
    soldText: '61',
    reviewsCount: 8,
    height: 9.8,
    suction: 5500,
    noise: 62,
    waterTank: true,
    station: 'משולבת',
    rating: 9.2,
    scoreOverall: 92,
    scoreBreakdown: {
      height: 92,
      noise: 84,
      navigation: 90,
      mop: 92,
      station: 92
    },
    image: '/images/robots/xiaomi-mijia-m30s.png',
    affiliateLink: 'https://s.click.aliexpress.com/e/_c435PyGb',
    tags: ['מומלץ', '★ 5.0', '61 נמכרו'],
    shortDesc: 'דגם חזק עם תחנה משולבת – פתרון מצוין לדירה קטנה למי שרוצה מינימום התעסקות.',
    bestFor: 'דירות קטנות שרוצות תחנה משולבת בלי התעסקות',
    highlightBullets: [
      'תחנה משולבת לנוחות יומיומית',
      'ניווט חכם לניקיון יעיל בחלל צפוף',
      'מאזן טוב בין מחיר לביצועים'
    ]
  },
  {
    id: 'xiaomi-mijia-m40',
    name: 'Xiaomi Mijia M40',
    priceRange: 'מחיר משתנה (AliExpress)',
    ratingStars: 4.6,
    soldText: '430',
    reviewsCount: 74,
    height: 9.8,
    suction: 6000,
    noise: 61,
    waterTank: true,
    station: 'משולבת',
    rating: 9.4,
    scoreOverall: 94,
    scoreBreakdown: {
      height: 92,
      noise: 86,
      navigation: 94,
      mop: 93,
      station: 94
    },
    image: '/images/robots/xiaomi-mijia-m40.png',
    affiliateLink: 'https://s.click.aliexpress.com/e/_c31imWtl',
    tags: ['הכי מומלץ', '★ 4.6', '430 נמכרו'],
    shortDesc: 'שדרוג חזק במיוחד עם ניווט מתקדם – מיועד למי שרוצה “לקנות פעם אחת נכון”.',
    bestFor: 'דירות קטנות-בינוניות שרוצות ביצועים גבוהים',
    highlightBullets: [
      'ביצועי ניווט חזקים בחלל צפוף',
      'תחנה משולבת לנוחות מקסימלית',
      'מתאים גם לשגרה אינטנסיבית'
    ]
  },
  {
    id: 'abir-x8',
    name: 'ABIR X8',
    priceRange: 'מחיר משתנה (AliExpress)',
    ratingStars: 4.8,
    soldText: '1000+',
    reviewsCount: 296,
    height: 9.6,
    suction: 6500,
    noise: 64,
    waterTank: true,
    station: 'ללא',
    rating: 8.6,
    scoreOverall: 86,
    scoreBreakdown: {
      height: 93,
      noise: 78,
      navigation: 84,
      mop: 80,
      station: 70
    },
    image: '/images/robots/abir-x8.png',
    affiliateLink: 'https://s.click.aliexpress.com/e/_c4MfWglN',
    tags: ['תקציב', '★ 4.8', '1000+ נמכרו'],
    shortDesc: 'דגם משתלם במיוחד עם דירוג גבוה באלי־אקספרס. מתאים למי שרוצה כניסה חכמה לעולם הרובוטים.',
    bestFor: 'דירות קטנות שמחפשות Value בלי תחנה גדולה',
    highlightBullets: [
      'דירוג 4.8★ • 1000+ נמכרו • 296 ביקורות (AliExpress)',
      'מערכת ניווט/מיפוי לשגרה יומיומית',
      'מחיר נגיש ביחס לקטגוריה'
    ]
  }
];

export const siteConfig = {
  title: 'רובוט.פרו | המדריך לרובוט שואב לדירה קטנה',
  description: 'השוואות, ביקורות ומדריכים לבחירת הרובוט המושלם לחללים אורבניים.',
  contactEmail: 'support@robotpro.co.il'
};
