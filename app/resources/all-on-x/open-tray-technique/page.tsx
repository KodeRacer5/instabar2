import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Use Open Tray Technique (Multiple Implants) | Insta-Bar',
  description: 'Pick-up impression protocol for 4+ implant cases',
  keywords: ['open tray', 'pick-up impression', 'multiple implants'],
};

export default function OpenTrayTechniquePage() {
  return (
    <GuideTemplate
      slug="open-tray-technique"
      title="How to Use Open Tray Technique (Multiple Implants)"
      description="Pick-up impression protocol for 4+ implant cases"
      category="all-on-x"
    />
  );
}
