import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Verify Digital Impression Accuracy | Insta-Bar',
  description: 'Checking scan accuracy before committing to fabrication',
  keywords: ['digital accuracy', 'scan verification', 'IOS accuracy'],
};

export default function VerifyDigitalAccuracyPage() {
  return (
    <GuideTemplate
      slug="verify-digital-accuracy"
      title="How to Verify Digital Impression Accuracy"
      description="Checking scan accuracy before committing to fabrication"
      category="digital"
    />
  );
}
