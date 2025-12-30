import { Metadata } from 'next';

import HowItWorksPageClient from './client';

export const metadata: Metadata = {
  title: 'How Insta-Bar Works | Metal Verification Jig Workflow',
  description:
    'Three-step verification process. Attach, verify with Sheffield test, transfer to lab. No chairside luting required.',
};

export default function HowItWorksPage() {
  return <HowItWorksPageClient />;
}
