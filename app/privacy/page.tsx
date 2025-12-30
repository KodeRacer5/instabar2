import { Metadata } from 'next';

import PrivacyPageClient from './client';

export const metadata: Metadata = {
  title: 'Privacy Policy | Insta-Bar',
  description:
    'Privacy policy for Insta-Bar. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
