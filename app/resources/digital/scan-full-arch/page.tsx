import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Scan Full Arch Implants | Insta-Bar',
  description: 'IOS scanning protocol for multi-implant cases',
  keywords: ['scan implants', 'IOS', 'intraoral scanner', 'digital impression'],
};

export default function ScanFullArchPage() {
  return (
    <GuideTemplate
      slug="scan-full-arch"
      title="How to Scan Full Arch Implants"
      description="IOS scanning protocol for multi-implant cases"
      category="digital"
    />
  );
}
