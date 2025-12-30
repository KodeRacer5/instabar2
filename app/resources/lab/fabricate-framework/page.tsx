import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Fabricate Passive Framework | Insta-Bar',
  description: 'Design and milling considerations for passive fit',
  keywords: ['fabricate framework', 'mill framework', 'passive framework'],
};

export default function FabricateFrameworkPage() {
  return (
    <GuideTemplate
      slug="fabricate-framework"
      title="How to Fabricate Passive Framework"
      description="Design and milling considerations for passive fit"
      category="lab"
    />
  );
}
