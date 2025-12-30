import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Take an All-on-4 Impression | Insta-Bar',
  description: 'Complete workflow from implant-level to master cast',
  keywords: ['all-on-4', 'all on 4 impression', 'four implant'],
};

export default function AllOn4ImpressionPage() {
  return (
    <GuideTemplate
      slug="all-on-4-impression"
      title="How to Take an All-on-4 Impression"
      description="Complete workflow from implant-level to master cast"
      category="all-on-x"
    />
  );
}
