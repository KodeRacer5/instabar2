import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'Quick Start Guide | Insta-Bar',
  description: 'Get started with Insta-Bar in 5 minutes',
  keywords: ['quick start', 'getting started', 'setup'],
};

export default function QuickStartPage() {
  return (
    <GuideTemplate
      slug="quick-start"
      title="Quick Start Guide"
      description="Get started with Insta-Bar in 5 minutes"
      category="docs"
    />
  );
}
