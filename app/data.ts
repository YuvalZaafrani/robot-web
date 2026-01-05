// Centralized data to ensure consistency across Home, Compare, and Article pages.

export interface RobotModel {
    id: string;
    name: string;
    tag?: string; // e.g., "המשתלם ביותר"
    priceRange: string;
    height: number; // in cm
    suction: number; // in Pa
    noise: number; // in dB
    waterTank: number; // in ml
    mapping: 'LiDAR' | 'LDS' | 'Camera' | 'Gyroscope' | 'LiDAR + AI';
    dockingStation: boolean;
    smallAptScore: number; // 0-100
    image: string; // Path to image in public folder
    affiliateLink: string; // Real AliExpress link
  }
  
  export const robots: RobotModel[] = [
    {
      id: 'roborock-q7',
      name: 'Roborock Q7 Max',
      tag: 'הבחירה המומלצת',
      priceRange: '₪1,200 - ₪1,500',
      height: 9.6,
      suction: 4200,
      noise: 67, // slightly louder
      waterTank: 350,
      mapping: 'LiDAR',
      dockingStation: false, // Base model
      smallAptScore: 92,
      image: '/images/roborock-q7.jpg',
      affiliateLink: 'https://s.click.aliexpress.com/e/_DBP...' // Replace with real link
    },
    {
      id: 'dreame-l10s',
      name: 'Dreame L10s Pro',
      tag: 'פרימיום',
      priceRange: '₪1,800 - ₪2,200',
      height: 9.7,
      suction: 5300,
      noise: 65,
      waterTank: 190,
      mapping: 'LiDAR + AI',
      dockingStation: false,
      smallAptScore: 88,
      image: '/images/dreame-l10s.jpg',
      affiliateLink: 'https://s.click.aliexpress.com/e/_DC...' // Replace with real link
    },
    {
      id: 'xiaomi-s10',
      name: 'Xiaomi Robot Vacuum S10',
      tag: 'המשתלם ביותר',
      priceRange: '₪800 - ₪1,000',
      height: 9.5,
      suction: 4000,
      noise: 60, // Quieter
      waterTank: 170,
      mapping: 'LDS',
      dockingStation: false,
      smallAptScore: 95,
      image: '/images/xiaomi-s10.jpg',
      affiliateLink: 'https://s.click.aliexpress.com/e/_DD...' // Replace with real link
    }
  ];
  
  export const navigationLinks = [
    { name: 'בית', href: '/' },
    { name: 'מדריך קנייה', href: '/guide' },
    { name: 'השוואת דגמים', href: '/compare' },
    { name: 'המדריך המלא', href: '/article' }, // New Article page
    { name: 'שאלות נפוצות', href: '/faq' },
    { name: 'אודות', href: '/about' },
  ];
