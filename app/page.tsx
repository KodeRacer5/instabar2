'use client';

import Galaxy from '@/src/components/ReactBits/Backgrounds/Galaxy';

import Compatibility from '../components/sections/compatibility/default';
import CTA from '../components/sections/cta/default';
import Footer from '../components/sections/footer/default';
import Hero from '../components/sections/hero/default';
import HomeGallery from '../components/sections/home/gallery';
import DockNavbar from '../components/sections/navbar/DockNavbar';
import Problem from '../components/sections/problem/default';
import Solution from '../components/sections/solution/default';
import Workflow from '../components/sections/workflow/default';

export default function Home() {
  return (
    <main className="bg-background text-foreground relative min-h-screen w-full pt-24">
      {/* Galaxy Background */}
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

      {/* Content */}
      <div className="relative z-10">
        <DockNavbar />
        <Hero />
        <Problem />
        <HomeGallery />
        <Solution />
        <Workflow />
        <Compatibility />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
