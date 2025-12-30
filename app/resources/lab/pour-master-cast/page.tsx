import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Pour Master Cast from Verification Jig | Insta-Bar',
  description: 'Stone pouring technique for accurate analog positioning',
  keywords: ['pour cast', 'master cast', 'stone pour', 'analog'],
};

export default function PourMasterCastPage() {
  return (
    <GuideTemplate
      slug="pour-master-cast"
      title="How to Pour Master Cast from Verification Jig"
      description="Stone pouring technique for accurate analog positioning"
      category="lab"
    />
  );
}
