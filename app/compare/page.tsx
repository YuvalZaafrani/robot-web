import CompareClient from './CompareClient';
import { pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'השוואת רובוט שואב שוטף לדירה קטנה | טבלה מסודרת + המלצות',
  description:
    'טבלה השוואתית ממוקדת לדירות קטנות: גובה, רעש, תחנה וציון שימושיות. כולל קישורים למחיר באלי-אקספרס וגילוי נאות.',
  path: '/compare',
});

export default function ComparePage() {
  return <CompareClient />;
}
