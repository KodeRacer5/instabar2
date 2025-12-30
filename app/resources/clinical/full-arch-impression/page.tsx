import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Take a Full Arch Implant Impression | Insta-Bar',
  description: 'Step-by-step protocol for accurate multi-implant impressions',
  keywords: ['full arch impression', 'implant impression', 'multi-unit impression'],
};

export default function FullArchImpressionPage() {
  return (
    <GuideTemplate
      slug="full-arch-impression"
      title="How to Take a Full Arch Implant Impression"
      description="Step-by-step protocol for accurate multi-implant impressions"
      category="clinical"
    />
  );
}
