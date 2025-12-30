import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Check Analog Position Accuracy | Insta-Bar',
  description: 'Verification steps before framework design',
  keywords: ['analog position', 'check analog', 'analog accuracy'],
};

export default function CheckAnalogPositionPage() {
  return (
    <GuideTemplate
      slug="check-analog-position"
      title="How to Check Analog Position Accuracy"
      description="Verification steps before framework design"
      category="lab"
    />
  );
}
