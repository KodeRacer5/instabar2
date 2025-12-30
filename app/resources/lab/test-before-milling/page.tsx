import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Test Fit Before Milling Zirconia | Insta-Bar',
  description: 'Pre-milling verification to avoid costly remakes',
  keywords: ['test fit', 'before milling', 'zirconia', 'PMMA try-in'],
};

export default function TestBeforeMillingPage() {
  return (
    <GuideTemplate
      slug="test-before-milling"
      title="How to Test Fit Before Milling Zirconia"
      description="Pre-milling verification to avoid costly remakes"
      category="lab"
    />
  );
}
