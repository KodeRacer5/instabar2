import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'Insta-Bar vs Photogrammetry | Insta-Bar',
  description: 'When to use each verification method',
  keywords: ['photogrammetry', 'PIC dental', 'ICam4D', 'digital verification'],
};

export default function VsPhotogrammetryPage() {
  return (
    <GuideTemplate
      slug="vs-photogrammetry"
      title="Insta-Bar vs Photogrammetry"
      description="When to use each verification method"
      category="compare"
    />
  );
}
