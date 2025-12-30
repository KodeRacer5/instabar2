import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'Insta-Bar vs iJIG / OPTISPLINT | Insta-Bar',
  description: 'Comparing metal link verification systems',
  keywords: ['iJIG', 'OPTISPLINT', 'comparison', 'alternative'],
};

export default function VsIjigOptisplintPage() {
  return (
    <GuideTemplate
      slug="vs-ijig-optisplint"
      title="Insta-Bar vs iJIG / OPTISPLINT"
      description="Comparing metal link verification systems"
      category="compare"
    />
  );
}
