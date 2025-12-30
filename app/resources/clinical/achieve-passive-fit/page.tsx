import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Achieve Passive Fit Full Arch | Insta-Bar',
  description: 'Complete workflow for guaranteed passive seating',
  keywords: ['achieve passive fit', 'full arch passive', 'framework seating'],
};

export default function AchievePassiveFitPage() {
  return (
    <GuideTemplate
      slug="achieve-passive-fit"
      title="How to Achieve Passive Fit Full Arch"
      description="Complete workflow for guaranteed passive seating"
      category="clinical"
    />
  );
}
