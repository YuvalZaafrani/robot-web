import React from 'react';

interface ProgressBarProps {
  label: string;
  value: number; // 0-100
  color?: string;
  className?: string;
}

export default function ProgressBar({
  label,
  value,
  color = 'bg-[rgb(var(--accent-rgb))]',
  className = '',
}: ProgressBarProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-center text-sm font-medium">
        <span className="text-main">{label}</span>
        <span className="text-muted">{value}%</span>
      </div>
      <div className="w-full h-2 bg-[rgba(var(--text-rgb),0.10)] rounded-full overflow-hidden shadow-inner">
        <div 
          className={`h-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
