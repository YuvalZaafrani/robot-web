import React from 'react';
import Link from 'next/link';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  icon?: React.ReactNode;
}

export default function CTAButton({ children, href, onClick, variant = 'primary', className = '', icon }: CTAButtonProps) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
  };

  const content = (
    <>
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-[-4px]">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${variants[variant]} ${className} group`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${variants[variant]} ${className} group`}>
      {content}
    </button>
  );
}
