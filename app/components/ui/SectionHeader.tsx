import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({ title, subtitle, centered = true, className = '' }: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : 'text-right'} mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-main mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
