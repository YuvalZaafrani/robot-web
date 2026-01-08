'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { robots } from '../data';
import AffiliateLink from '../components/AffiliateLink';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import RatingPill from '../components/ui/RatingPill';
import ProgressBar from '../components/ui/ProgressBar';
import Badge from '../components/ui/Badge';
import CTAButton from '../components/ui/CTAButton';
import AffiliateDisclosure from '../components/ui/AffiliateDisclosure';

export default function CompareClient() {
  type SortBy = 'rating' | 'height';
  const [sortBy, setSortBy] = useState<SortBy>('rating');
  const formatStars = (v: number) => (Number.isInteger(v) ? v.toFixed(0) : v.toFixed(1));

  const sortedRobots = [...robots].sort((a, b) => {
    if (sortBy === 'rating') return b.scoreOverall - a.scoreOverall;
    if (sortBy === 'height') return a.height - b.height;
    return 0;
  });

  return (
    <div className="min-h-screen pt-16 pb-24 bg-page">
      <div className="container-custom">
        <header className="mb-16">
          <SectionHeader 
            title="השוואת דגמים מלאה"
            subtitle="טבלה והשוואה חזותית המתמקדת בנתונים הקריטיים לדירות קטנות."
          />
        </header>

        {/* Controls */}
        <div className="flex justify-between items-center mb-8 bg-surface p-4 rounded-2xl border border-soft shadow-sm">
          <div className="text-sm font-bold text-main">
            {robots.length} דגמים נמצאו
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-muted italic">מיון לפי:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortBy)}
              className="bg-surface-alt border border-soft rounded-xl px-4 py-2 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent-rgb))] cursor-pointer transition-all text-main"
            >
              <option value="rating">ציון משוקלל (מומלץ)</option>
              <option value="height">גובה (הכי נמוך קודם)</option>
            </select>
          </div>
        </div>

        {/* Visual Cards View */}
        <div className="grid lg:grid-cols-1 gap-12 mb-20">
          {sortedRobots.map((robot) => (
            <Card key={robot.id} padding={false} className="flex flex-col lg:flex-row overflow-hidden shadow-md border border-soft">
              {/* Image Side */}
              <div className="lg:w-1/3 relative bg-surface-alt min-h-[300px]">
                <Image
                  src={robot.image}
                  alt={robot.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                  {robot.tags.map(tag => (
                    <Badge key={tag} variant={tag.includes('מומלץ') ? 'emerald' : 'stone'}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="absolute bottom-4 left-4">
                  <RatingPill score={robot.scoreOverall} />
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 p-8 lg:p-10 flex flex-col">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-3xl font-black text-main mb-2">{robot.name}</h3>
                    <p className="font-bold text-sm inline-block px-3 py-1 rounded-lg border border-soft bg-[rgba(var(--accent-rgb),0.12)] text-[rgb(var(--accent-hover-rgb))]">
                      {robot.bestFor}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-muted">
                      <span className="bg-surface-alt border border-soft px-3 py-1 rounded-full">★ {formatStars(robot.ratingStars)}</span>
                      <span className="bg-surface-alt border border-soft px-3 py-1 rounded-full">{robot.soldText} נמכרו</span>
                      <span className="bg-surface-alt border border-soft px-3 py-1 rounded-full">{robot.reviewsCount} ביקורות</span>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-2xl font-black text-main">{robot.priceRange}</div>
                    <p className="text-xs text-muted font-medium">מחיר משוער באלי-אקספרס</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 mb-8 flex-1">
                  {/* Scores Breakdown */}
                  <div className="space-y-4">
                    <ProgressBar label="התאמה לגובה רהיטים" value={robot.scoreBreakdown.height} />
                    <ProgressBar label="שקט ונוחות" value={robot.scoreBreakdown.noise} />
                    <ProgressBar label="ניווט ומיפוי" value={robot.scoreBreakdown.navigation} />
                    <ProgressBar label="איכות שטיפה" value={robot.scoreBreakdown.mop} />
                  </div>

                  {/* Highlights */}
                  <div className="bg-surface-alt p-6 rounded-2xl border border-soft">
                    <h4 className="font-bold text-main mb-4 text-sm uppercase tracking-wider">יתרונות מרכזיים:</h4>
                    <ul className="space-y-3">
                      {robot.highlightBullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted leading-tight font-medium">
                          <span className="text-[rgb(var(--accent-rgb))] mt-0.5">✓</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-soft mt-auto">
                  <AffiliateLink
                    href={robot.affiliateLink}
                    className="btn-accent px-12 w-full sm:w-auto"
                  >
                    בדיקת מחיר ב-AliExpress
                  </AffiliateLink>
                  <AffiliateDisclosure className="max-w-[300px]" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Technical Table View */}
        <div className="mb-20">
          <SectionHeader 
            title="מפרט טכני להשוואה"
            subtitle="השוואה יבשה של כל הנתונים הטכניים ראש בראש"
            centered={true}
          />
          <div className="overflow-x-auto bg-surface rounded-3xl shadow-sm border border-soft">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-surface-alt text-muted text-xs font-bold uppercase tracking-widest border-b border-soft">
                  <th className="p-6">דגם</th>
                  <th className="p-6">גובה (ס״מ)</th>
                  <th className="p-6">שאיבה (Pa)</th>
                  <th className="p-6">רעש (dB)</th>
                  <th className="p-6">סוג תחנה</th>
                  <th className="p-6">ציון</th>
                </tr>
              </thead>
              <tbody>
                {sortedRobots.map((robot) => (
                  <tr key={robot.id} className="border-b border-soft last:border-0 hover:bg-surface-alt/60 transition-colors">
                    <td className="p-6 font-bold text-main">{robot.name}</td>
                    <td className="p-6 text-muted font-medium">{robot.height}</td>
                    <td className="p-6 text-muted font-medium">{robot.suction}</td>
                    <td className="p-6 text-muted font-medium">{robot.noise}</td>
                    <td className="p-6 text-muted font-medium">{robot.station}</td>
                    <td className="p-6">
                      <span className="bg-surface-alt text-main px-2 py-1 rounded text-xs font-bold font-mono tracking-tighter border border-soft">
                        {robot.scoreOverall}/100
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <AffiliateDisclosure variant="full" className="mb-12" />

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <Link href="/article" className="font-bold hover:underline bg-surface px-4 py-2 rounded-xl border border-soft text-[rgb(var(--accent-hover-rgb))]">
              קראו את מאמר המדריך המלא
            </Link>
            <Link href="/faq" className="font-bold hover:underline bg-surface px-4 py-2 rounded-xl border border-soft text-[rgb(var(--accent-hover-rgb))]">
              שאלות נפוצות
            </Link>
          </div>
          <CTAButton href="/guide" variant="primary">
            חזרה למדריך הקנייה המקוצר
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

