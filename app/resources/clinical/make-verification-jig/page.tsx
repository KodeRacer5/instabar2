import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Make a Verification Jig | Insta-Bar',
  description: 'Fabrication methods for conventional and metal verification jigs',
  keywords: ['verification jig', 'make jig', 'fabricate jig', 'resin jig'],
};

export default function MakeVerificationJigPage() {
  return (
    <GuideTemplate
      slug="make-verification-jig"
      title="How to Make a Verification Jig"
      description="Fabrication methods for conventional and metal verification jigs"
      category="clinical"
    />
  );
}
