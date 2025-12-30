import { Metadata } from 'next';

import ContactPageClient from './client';

export const metadata: Metadata = {
  title: 'Contact Insta-Bar | Pricing & Distributor Inquiries',
  description: 'Request a quote, schedule a demo, or inquire about distributor opportunities.',
};

export default function ContactPage() {
  return <ContactPageClient />;
}
