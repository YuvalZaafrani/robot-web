import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'stone' | 'amber';
  className?: string;
}

export default function Badge({ children, variant = 'emerald', className = '' }: BadgeProps) {
  const variants = {
    emerald: 'badge-accent',
    stone: 'badge-neutral',
    amber: 'badge-warm',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
