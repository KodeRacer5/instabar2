import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: "Why Your Verification Jig Doesn't Fit | Insta-Bar",
  description: 'Common causes and solutions for jig seating problems',
  keywords: ['jig doesnt fit', 'jig problems', 'seating issues'],
};

export default function JigDoesntFitPage() {
  return (
    <GuideTemplate
      slug="jig-doesnt-fit"
      title="Why Your Verification Jig Doesn't Fit"
      description="Common causes and solutions for jig seating problems"
      category="troubleshooting"
    />
  );
}
