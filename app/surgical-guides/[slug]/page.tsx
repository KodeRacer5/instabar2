import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ProtocolTemplate from '@/components/templates/protocol-template';
import { surgicalGuides, getSurgicalGuideBySlug } from '@/lib/content/surgical-guides';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all published guides
export async function generateStaticParams() {
  return surgicalGuides
    .filter(guide => guide.published)
    .map(guide => ({
      slug: guide.slug,
    }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getSurgicalGuideBySlug(slug);
  
  if (!guide) {
    return {
      title: 'Guide Not Found | Titan Surgical',
    };
  }
  
  return {
    title: `${guide.title} | Titan Surgical`,
    description: guide.meta_description,
    keywords: [
      guide.primary_keyword,
      guide.implant_system,
      guide.manufacturer,
      'surgical guide',
      'guided surgery protocol',
      ...guide.planning_software,
    ].filter(Boolean) as string[],
    openGraph: {
      title: guide.title,
      description: guide.meta_description,
      type: 'article',
      url: `https://surgicalimplantguides.com/surgical-guides/${guide.slug}`,
    },
  };
}

export default async function SurgicalGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getSurgicalGuideBySlug(slug);
  
  if (!guide || !guide.published) {
    notFound();
  }
  
  return <ProtocolTemplate guide={guide} />;
}
