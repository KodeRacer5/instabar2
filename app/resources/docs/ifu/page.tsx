import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'Instructions for Use (IFU) | Insta-Bar',
  description: 'Complete usage guide for Insta-Bar system',
  keywords: ['IFU', 'instructions', 'how to use'],
};

export default function IfuPage() {
  return (
    <GuideTemplate
      slug="ifu"
      title="Instructions for Use (IFU)"
      description="Complete usage guide for Insta-Bar system"
      category="docs"
    />
  );
}
