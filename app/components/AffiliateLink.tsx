import React from 'react';

type AffiliateLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function AffiliateLink({ href, className, children }: AffiliateLinkProps) {
  return (
    <a href={href} target="_blank" rel="nofollow sponsored noopener" className={className}>
      {children}
    </a>
  );
}

