import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'Insta-Bar vs PIC Dental | Insta-Bar',
  description: 'Photogrammetry alternative comparison',
  keywords: ['PIC dental', 'photogrammetry alternative'],
};

export default function VsPicDentalPage() {
  return (
    <GuideTemplate
      slug="vs-pic-dental"
      title="Insta-Bar vs PIC Dental"
      description="Photogrammetry alternative comparison"
      category="compare"
    />
  );
}
