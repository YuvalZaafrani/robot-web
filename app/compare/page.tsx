'use client';
import React, { useState } from 'react';
// import { robots } from '@/lib/data'; // Un-comment in real project
// import Image from 'next/image'; // Un-comment in real project
import { Check, X } from 'lucide-react';

// Mock data for preview (same structure as lib/data.ts)
const robots = [
  {
    id: 'roborock-q7',
    name: 'Roborock Q7 Max',
    tag: 'הבחירה המומלצת',
    priceRange: '₪1,200 - ₪1,500',
    height: 9.6,
    suction: 4200,
    noise: 67, 
    waterTank: 350,
    mapping: 'LiDAR',
    dockingStation: false, 
    smallAptScore: 92,
    affiliateLink: 'https://s.click.aliexpress.com/e/_DBP...' 
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
    affiliateLink: 'https://s.click.aliexpress.com/e/_DC...' 
  },
  {
    id: 'xiaomi-s10',
    name: 'Xiaomi Robot Vacuum S10',
    tag: 'המשתלם ביותר',
    priceRange: '₪800 - ₪1,000',
    height: 9.5,
    suction: 4000,
    noise: 60,
    waterTank: 170,
    mapping: 'LDS',
    dockingStation: false,
    smallAptScore: 95,
    affiliateLink: 'https://s.click.aliexpress.com/e/_DD...' 
  }
];

export default function ComparePage() {
  const [sortBy, setSortBy] = useState<'price' | 'score' | 'height'>('score');

  // Logic to sort robots
  const sortedRobots = [...robots].sort((a, b) => {
    if (sortBy === 'score') return b.smallAptScore - a.smallAptScore;
    if (sortBy === 'height') return a.height - b.height; // Lower is better
    return a.priceRange.localeCompare(b.priceRange);
  });

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-4">השוואת דגמים</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            טבלה מפורטת שתעזור לכם להבין את ההבדלים הקטנים שעושים שינוי גדול בדירה קטנה.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-200 mb-8 flex items-center gap-4 max-w-fit mx-auto">
          <span className="text-sm font-bold text-stone-500">מיון לפי:</span>
          <button 
            onClick={() => setSortBy('score')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${sortBy === 'score' ? 'bg-amber-100 text-amber-800' : 'hover:bg-stone-100'}`}
          >
            ציון לדירה קטנה
          </button>
          <button 
            onClick={() => setSortBy('height')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${sortBy === 'height' ? 'bg-amber-100 text-amber-800' : 'hover:bg-stone-100'}`}
          >
            גובה (הכי נמוך)
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[900px] text-right">
            <thead className="bg-stone-900 text-stone-300">
              <tr>
                <th className="p-6 font-bold w-1/4">דגם</th>
                <th className="p-6 font-bold">מחיר משוער</th>
                <th className="p-6 font-bold">גובה</th>
                <th className="p-6 font-bold">רעש</th>
                <th className="p-6 font-bold">מיפוי</th>
                <th className="p-6 font-bold">ציון</th>
                <th className="p-6 font-bold">רכישה</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              {sortedRobots.map((robot) => (
                <tr key={robot.id} className="hover:bg-amber-50/30 transition duration-200">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                         {/* Using standard img for preview */}
                         <img 
                            src={`https://placehold.co/100x100/e7e5e4/a8a29e?text=Robot`} 
                            alt={robot.name} 
                            className="w-full h-full object-cover"
                          />
                      </div>
                      <div>
                        <div className="font-bold text-stone-900">{robot.name}</div>
                        {robot.tag && <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">{robot.tag}</span>}
                      </div>
                    </div>
                  </td>
                  <td className="p-6 font-medium">{robot.priceRange}</td>
                  <td className="p-6">
                    <div className="flex flex-col">
                      <span className="font-bold">{robot.height} ס"מ</span>
                      <span className="text-xs text-stone-400">
                        {robot.height < 9.6 ? 'מעולה לספות' : 'סטנדרטי'}
                      </span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="w-24 bg-stone-200 rounded-full h-1.5 mb-1">
                      <div 
                        className={`h-1.5 rounded-full ${robot.noise < 65 ? 'bg-green-500' : 'bg-amber-500'}`} 
                        style={{ width: `${(robot.noise / 80) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs">{robot.noise} dB</span>
                  </td>
                  <td className="p-6 text-sm">{robot.mapping}</td>
                  <td className="p-6">
                    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm ${
                      robot.smallAptScore >= 90 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {robot.smallAptScore}
                    </span>
                  </td>
                  <td className="p-6">
                    <a 
                      href={robot.affiliateLink} 
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="bg-stone-900 hover:bg-amber-600 text-white text-xs px-4 py-2 rounded-lg font-bold transition whitespace-nowrap"
                    >
                      קנה עכשיו
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className="mt-6 text-center text-xs text-stone-400">
          * הנתונים נאספו מאתרי היצרן ועשויים להשתנות. הקישורים הינם קישורי שותפים.
        </p>
      </div>
    </div>
  );
}
