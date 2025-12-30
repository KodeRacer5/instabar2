import { Metadata } from 'next';

import PartnersPageClient from './client';

export const metadata: Metadata = {
  title: 'Compatible Implant Systems | Insta-Bar',
  description:
    'Insta-Bar works with leading implant manufacturers including Nobel Biocare, Straumann, Zimmer Biomet, and more.',
};

export default function PartnersPage() {
  return <PartnersPageClient />;
}
