import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Section and Relute a Verification Jig | Insta-Bar',
  description: 'Cutting and rejoining technique for improved accuracy',
  keywords: ['section relute', 'cut jig', 'rejoin verification'],
};

export default function SectionRelutePage() {
  return (
    <GuideTemplate
      slug="section-relute"
      title="How to Section and Relute a Verification Jig"
      description="Cutting and rejoining technique for improved accuracy"
      category="clinical"
    />
  );
}
