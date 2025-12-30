'use client';

import Footer from '@/components/sections/footer/default';
import Comparison from '@/components/sections/how-it-works/comparison';
import SheffieldTest from '@/components/sections/how-it-works/sheffield-test';
import VideoSection from '@/components/sections/how-it-works/video';
import WorkflowSteps from '@/components/sections/how-it-works/workflow-steps';
import DockNavbar from '@/components/sections/navbar/DockNavbar';
import Galaxy from '@/src/components/ReactBits/Backgrounds/Galaxy';

export default function HowItWorksPageClient() {
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
        <VideoSection />
        <WorkflowSteps />
        <Comparison />
        <SheffieldTest />
        <Footer />
      </div>
    </main>
  );
}
