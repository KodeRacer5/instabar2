import { Metadata } from 'next';

import GuideTemplate from '@/components/templates/guide-template';

export const metadata: Metadata = {
  title: 'How to Transfer Implant Position to Master Cast | Insta-Bar',
  description: 'Accurate analog positioning from verification jig',
  keywords: ['transfer implant', 'master cast', 'analog position'],
};

export default function TransferMasterCastPage() {
  return (
    <GuideTemplate
      slug="transfer-master-cast"
      title="How to Transfer Implant Position to Master Cast"
      description="Accurate analog positioning from verification jig"
      category="clinical"
    />
  );
}
