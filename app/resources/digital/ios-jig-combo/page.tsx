import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Combine IOS with Verification Jig | Insta-Bar',
  description: 'Hybrid workflow for digital-analog verification',
  keywords: ['IOS jig', 'hybrid workflow', 'digital analog'],
};

export default function IosJigComboPage() {
  return (
    <GuideTemplate
      slug="ios-jig-combo"
      title="How to Combine IOS with Verification Jig"
      description="Hybrid workflow for digital-analog verification"
      category="digital"
    />
  );
}
