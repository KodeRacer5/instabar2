'use client';

import ContactForm from '@/components/sections/contact/form';
import ContactHero from '@/components/sections/contact/hero';
import ContactInfo from '@/components/sections/contact/info';
import Footer from '@/components/sections/footer/default';
import DockNavbar from '@/components/sections/navbar/DockNavbar';
import ResponsiveGalaxy from '@/src/components/ReactBits/Backgrounds/ResponsiveGalaxy';

export default function ContactPageClient() {
  return (
    <main className="bg-background text-foreground relative min-h-screen w-full pt-24">
      <div className="fixed inset-0 z-0">
        <ResponsiveGalaxy
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
        <ContactHero />
        <div className="max-w-container mx-auto grid gap-8 px-4 py-16 md:grid-cols-3">
          <div className="md:col-span-2">
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
        <Footer />
      </div>
    </main>
  );
}
