import React from 'react';

interface RatingPillProps {
  score: number; // 0-100
  className?: string;
}

export default function RatingPill({ score, className = '' }: RatingPillProps) {
  const getRatingColor = (s: number) => {
    if (s >= 90) return 'badge-accent';
    if (s >= 80) return 'badge-accent';
    if (s >= 70) return 'badge-warm';
    return 'badge-neutral';
  };

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-bold text-lg shadow-sm ${getRatingColor(score)} ${className}`}>
      <span>{score}</span>
      <span className="text-[10px] opacity-60 font-medium">/100</span>
    </div>
  );
}
