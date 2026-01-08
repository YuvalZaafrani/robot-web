import React from 'react';

interface AffiliateDisclosureProps {
  className?: string;
  variant?: 'minimal' | 'full';
}

export default function AffiliateDisclosure({ className = '', variant = 'minimal' }: AffiliateDisclosureProps) {
  const disclosureText =
    'גילוי נאות: חלק מהקישורים הם קישורי שותפים. ייתכן שנקבל עמלה ללא עלות נוספת עבורך.';

  if (variant === 'full') {
    return (
      <div className={`bg-surface-alt p-6 rounded-2xl border border-soft text-muted text-xs leading-relaxed ${className}`}>
        {disclosureText}
      </div>
    );
  }

  return (
    <p className={`text-[10px] text-muted italic leading-tight ${className}`}>
      {disclosureText}
    </p>
  );
}
