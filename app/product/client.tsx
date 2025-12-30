'use client';

import Footer from '@/components/sections/footer/default';
import DockNavbar from '@/components/sections/navbar/DockNavbar';
import CompatibilityMatrix from '@/components/sections/product/compatibility-matrix';
import ProductCTA from '@/components/sections/product/cta';
import ProductGallery1 from '@/components/sections/product/gallery-1';
import ProductHero from '@/components/sections/product/hero';
import KitContents from '@/components/sections/product/kit-contents';
import ProductOverview from '@/components/sections/product/overview';
import Specifications from '@/components/sections/product/specifications';
import Galaxy from '@/src/components/ReactBits/Backgrounds/Galaxy';

export default function ProductPageClient() {
  return (
    <main className="bg-background text-foreground relative min-h-screen w-full pt-24">
      <div className="fixed inset-0 z-0">
        <Galaxy
          hueShift={200}
          saturation={0.8}
          speed={0.3}
          starSpeed={0.3}
          glowIntensity={0.5}
          density={1.2}
          mouseInteraction={false}
          mouseRepulsion={false}
        />
      </div>
      <div className="relative z-10">
        <DockNavbar />
        <ProductHero />
        <ProductOverview />
        <ProductGallery1 />
        <KitContents />
        <Specifications />
        <CompatibilityMatrix />
        <ProductCTA />
        <Footer />
      </div>
    </main>
  );
}
