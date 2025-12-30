import type { Metadata } from 'next';

import ResourcesClient from './client';

export const metadata: Metadata = {
  title: 'How-To Full-Arch Dental Implant Procedures & Protocols | Insta-Bar',
  description:
    'Complete dental implant protocols: impression techniques, verification procedures, framework fabrication, passive fit, troubleshooting, and product comparisons.',
  keywords: [
    'dental implant protocols',
    'full arch impression',
    'verification jig',
    'passive fit',
    'implant framework',
    'dental implant troubleshooting',
    'All-on-4 impression',
    'dental lab protocols',
  ],
  openGraph: {
    title: 'How-To Full-Arch Dental Implant Procedures & Protocols | Insta-Bar',
    description:
      'Complete dental implant protocols: impression techniques, verification procedures, framework fabrication, passive fit, troubleshooting, and product comparisons.',
    type: 'website',
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
