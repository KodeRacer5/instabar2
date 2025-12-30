import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: "Why Your Framework Won't Seat Passively | Insta-Bar",
  description: 'Diagnosing and correcting framework misfit',
  keywords: ['framework misfit', 'wont seat', 'passive fit problem'],
};

export default function FrameworkWontSeatPage() {
  return (
    <GuideTemplate
      slug="framework-wont-seat"
      title="Why Your Framework Won't Seat Passively"
      description="Diagnosing and correcting framework misfit"
      category="troubleshooting"
    />
  );
}
