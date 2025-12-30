import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Avoid Full Arch Remakes | Insta-Bar',
  description: 'Preventing costly prosthetic failures',
  keywords: ['avoid remakes', 'prevent remake', 'full arch failure'],
};

export default function AvoidRemakesPage() {
  return (
    <GuideTemplate
      slug="avoid-remakes"
      title="How to Avoid Full Arch Remakes"
      description="Preventing costly prosthetic failures"
      category="clinical"
    />
  );
}
