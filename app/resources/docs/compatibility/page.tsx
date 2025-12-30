import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'Implant Compatibility Chart | Insta-Bar',
  description: 'Supported implant systems and interfaces',
  keywords: ['compatibility', 'implant systems', 'Nobel', 'Straumann', 'Zimmer'],
};

export default function CompatibilityPage() {
  return (
    <GuideTemplate
      slug="compatibility"
      title="Implant Compatibility Chart"
      description="Supported implant systems and interfaces"
      category="docs"
    />
  );
}
