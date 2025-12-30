import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Verify All-on-X Implant Positions | Insta-Bar',
  description: 'Confirming spatial relationships before framework fabrication',
  keywords: ['all-on-x', 'all-on-6', 'verify positions'],
};

export default function AllOnXVerificationPage() {
  return (
    <GuideTemplate
      slug="all-on-x-verification"
      title="How to Verify All-on-X Implant Positions"
      description="Confirming spatial relationships before framework fabrication"
      category="all-on-x"
    />
  );
}
