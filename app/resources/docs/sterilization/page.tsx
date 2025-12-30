import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'Sterilization Protocol | Insta-Bar',
  description: 'Cleaning and autoclave instructions',
  keywords: ['sterilization', 'autoclave', 'cleaning', 'disinfection'],
};

export default function SterilizationPage() {
  return (
    <GuideTemplate
      slug="sterilization"
      title="Sterilization Protocol"
      description="Cleaning and autoclave instructions"
      category="docs"
    />
  );
}
