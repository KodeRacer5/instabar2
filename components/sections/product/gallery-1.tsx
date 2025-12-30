'use client';

import { Section } from '@/components/ui/section';
import ImageMarquee from '@/src/components/ReactBits/Components/ImageMarquee';

const galleryImages = [
  { src: '/images/product/1-insta bar case.png', alt: 'Insta-Bar verification case' },
  { src: '/images/product/2-insta bar case.png', alt: 'Insta-Bar case components' },
  { src: '/images/product/3-insta bar case.png', alt: 'Insta-Bar case setup' },
  { src: '/images/product/4-insta bar case.png', alt: 'Insta-Bar case assembly' },
  {
    src: '/images/product/5-insta bar all-on-4 workflow.png',
    alt: 'Insta-Bar All-on-4 workflow step 1',
  },
  {
    src: '/images/product/6-insta bar all-on-4 workflow.png',
    alt: 'Insta-Bar All-on-4 workflow step 2',
  },
  {
    src: '/images/product/7-insta bar all-on-4 workflow.png',
    alt: 'Insta-Bar All-on-4 workflow step 3',
  },
  {
    src: '/images/product/8-insta bar all-on-4 workflow.png',
    alt: 'Insta-Bar All-on-4 workflow step 4',
  },
  {
    src: '/images/product/9-insta bar all-on-4 workflow.png',
    alt: 'Insta-Bar All-on-4 workflow step 5',
  },
  {
    src: '/images/product/10-insta bar all-on-4 workflow.png',
    alt: 'Insta-Bar All-on-4 workflow step 6',
  },
  {
    src: '/images/product/11-insta bar all-on-4 workflow.png',
    alt: 'Insta-Bar All-on-4 workflow step 7',
  },
  {
    src: '/images/product/12-insta bar all-on-4 workflow.png',
    alt: 'Insta-Bar All-on-4 workflow step 8',
  },
  {
    src: '/images/product/13-insta bar all-on-4 workflow.png',
    alt: 'Insta-Bar All-on-4 workflow complete',
  },
];

export default function ProductGallery1() {
  return (
    <Section className="py-12 md:py-16">
      <ImageMarquee images={galleryImages} speed={40} direction="left" pauseOnHover={true} />
    </Section>
  );
}
