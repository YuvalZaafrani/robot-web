import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: boolean;
}

export default function Card({ children, className = '', padding = true }: CardProps) {
  return (
    <div className={`card-premium group ${padding ? 'p-8' : ''} ${className}`}>
      {children}
    </div>
  );
}
