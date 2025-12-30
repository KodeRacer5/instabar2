import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'Metal vs Resin Verification Jig | Insta-Bar',
  description: 'Side-by-side comparison of accuracy, rigidity, and workflow',
  keywords: ['metal vs resin', 'jig comparison', 'steel vs acrylic'],
};

export default function MetalVsResinPage() {
  return (
    <GuideTemplate
      slug="metal-vs-resin"
      title="Metal vs Resin Verification Jig"
      description="Side-by-side comparison of accuracy, rigidity, and workflow"
      category="compare"
    />
  );
}
