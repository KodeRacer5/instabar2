import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Check Passive Fit (Sheffield Test) | Insta-Bar',
  description: 'One-screw test protocol to verify framework seating',
  keywords: ['passive fit', 'sheffield test', 'one screw test', 'framework fit'],
};

export default function PassiveFitPage() {
  return (
    <GuideTemplate
      slug="passive-fit"
      title="How to Check Passive Fit (Sheffield Test)"
      description="One-screw test protocol to verify framework seating"
      category="clinical"
    />
  );
}
