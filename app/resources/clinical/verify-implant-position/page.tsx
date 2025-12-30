import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Verify Implant Position | Insta-Bar',
  description: 'Confirming accurate implant spatial relationships',
  keywords: ['verify implant', 'implant position', 'spatial relationship'],
};

export default function VerifyImplantPositionPage() {
  return (
    <GuideTemplate
      slug="verify-implant-position"
      title="How to Verify Implant Position"
      description="Confirming accurate implant spatial relationships"
      category="clinical"
    />
  );
}
