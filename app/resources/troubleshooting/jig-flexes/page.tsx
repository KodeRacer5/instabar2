import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'Why Your Jig Flexes Under Torque | Insta-Bar',
  description: 'Material limitations and rigid alternatives',
  keywords: ['jig flex', 'resin flex', 'torque', 'rigid jig'],
};

export default function JigFlexesPage() {
  return (
    <GuideTemplate
      slug="jig-flexes"
      title="Why Your Jig Flexes Under Torque"
      description="Material limitations and rigid alternatives"
      category="troubleshooting"
    />
  );
}
