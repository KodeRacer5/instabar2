import { Metadata } from 'next';

import TermsPageClient from './client';

export const metadata: Metadata = {
  title: 'Terms of Use | Insta-Bar',
  description: 'Terms of use for Insta-Bar products and services. Read our terms and conditions.',
};

export default function TermsPage() {
  return <TermsPageClient />;
}
