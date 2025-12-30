import { Metadata } from 'next';

import ProductPageClient from './client';

export const metadata: Metadata = {
  title: 'Insta-Bar™ Product | Verification System Specs & Kit Contents',
  description:
    'Medical-grade stainless steel verification jig. Reusable links, multi-platform compatible. See specifications and kit contents.',
};

export default function ProductPage() {
  return <ProductPageClient />;
}
