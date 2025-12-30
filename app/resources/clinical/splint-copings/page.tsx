import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Splint Impression Copings | Insta-Bar',
  description: 'Techniques for rigid splinting without polymerization shrinkage',
  keywords: ['splint copings', 'impression splinting', 'pattern resin', 'GC Pattern'],
};

export default function SplintCopingsPage() {
  return (
    <GuideTemplate
      slug="splint-copings"
      title="How to Splint Impression Copings"
      description="Techniques for rigid splinting without polymerization shrinkage"
      category="clinical"
    />
  );
}
