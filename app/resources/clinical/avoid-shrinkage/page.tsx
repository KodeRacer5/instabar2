import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Avoid Polymerization Shrinkage | Insta-Bar',
  description: 'Why resin jigs fail and how to eliminate the shrinkage variable',
  keywords: ['polymerization shrinkage', 'resin shrinkage', 'acrylic shrinkage'],
};

export default function AvoidShrinkagePage() {
  return (
    <GuideTemplate
      slug="avoid-shrinkage"
      title="How to Avoid Polymerization Shrinkage"
      description="Why resin jigs fail and how to eliminate the shrinkage variable"
      category="clinical"
    />
  );
}
