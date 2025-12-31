import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, Target, Clock } from 'lucide-react';

import DockNavbar from '@/components/sections/navbar/DockNavbar';
import Footer from '@/components/sections/footer/default';
import { Section } from '@/components/ui/section';
import ResponsiveGalaxy from '@/src/components/ReactBits/Backgrounds/ResponsiveGalaxy';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import SpotlightCard from '@/src/components/ReactBits/Cards/SpotlightCard';

import { getPublishedSurgicalGuides } from '@/lib/content/surgical-guides';

export const metadata: Metadata = {
  title: 'Surgical Guide Protocols | Titan Surgical',
  description: 'Complete surgical guide protocols for all major implant systems including Straumann, Nobel Biocare, Zimmer Biomet. Step-by-step procedures, drill sequences, and troubleshooting.',
  keywords: [
    'surgical guide protocol',
    'guided implant surgery',
    'straumann surgical guide',
    'nobel biocare surgical guide',
    'implant drill sequence',
    'guided surgery workflow'
  ],
};

export default function SurgicalGuidesPage() {
  const guides = getPublishedSurgicalGuides();
  
  // Group by manufacturer/type for display
  const implantSystemGuides = guides.filter(g => g.implant_system);
  const protocolGuides = guides.filter(g => !g.implant_system && g.slug.includes('protocol'));
  const workflowGuides = guides.filter(g => g.slug.includes('workflow'));

  return (
    <main className="relative min-h-screen bg-black pt-24">
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
        
        <Section className="py-12">
          <div className="mx-auto max-w-6xl">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-black sm:text-5xl md:text-6xl">
                <BlurText text="SURGICAL GUIDE" delay={80} direction="top" className="justify-center" />
                <BlurText
                  text="PROTOCOLS"
                  delay={80}
                  direction="top"
                  className="justify-center [&_span]:bg-gradient-to-r [&_span]:from-blue-500 [&_span]:via-purple-500 [&_span]:to-cyan-400 [&_span]:bg-clip-text [&_span]:text-transparent"
                />
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                Complete guided surgery protocols for all major implant systems. 
                Step-by-step procedures, drill sequences, specifications, and troubleshooting.
              </p>
            </div>

            {/* Stats */}
            <div className="mb-12 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-lg border border-gray-700/50 bg-gray-900/30 p-4">
                <div className="text-3xl font-bold text-blue-400">{guides.length}</div>
                <div className="text-sm text-gray-400">Protocols</div>
              </div>
              <div className="rounded-lg border border-gray-700/50 bg-gray-900/30 p-4">
                <div className="text-3xl font-bold text-purple-400">{implantSystemGuides.length}</div>
                <div className="text-sm text-gray-400">Implant Systems</div>
              </div>
              <div className="rounded-lg border border-gray-700/50 bg-gray-900/30 p-4">
                <div className="text-3xl font-bold text-cyan-400">{workflowGuides.length}</div>
                <div className="text-sm text-gray-400">Software Workflows</div>
              </div>
            </div>

            {/* All Guides Grid */}
            <div className="grid gap-4 md:grid-cols-2">
              {guides.map((guide) => (
                <Link key={guide.slug} href={`/surgical-guides/${guide.slug}`}>
                  <SpotlightCard
                    className="h-full border border-gray-700/50 bg-gray-900/30 p-6 transition-all hover:border-blue-500/50"
                    spotlightColor="rgba(59, 130, 246, 0.15)"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold text-white">
                          {guide.title}
                        </h3>
                        <p className="mb-4 text-sm text-gray-400 line-clamp-2">
                          {guide.meta_description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                          {guide.implant_system && (
                            <span className="flex items-center gap-1">
                              <Target className="size-3" />
                              {guide.implant_system}
                            </span>
                          )}
                          {guide.time_estimate && (
                            <span className="flex items-center gap-1">
                              <Clock className="size-3" />
                              {guide.time_estimate}
                            </span>
                          )}
                          {guide.difficulty && (
                            <span className="flex items-center gap-1 capitalize">
                              <FileText className="size-3" />
                              {guide.difficulty}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <ArrowRight className="size-5 text-gray-600 transition-colors group-hover:text-blue-400" />
                    </div>
                  </SpotlightCard>
                </Link>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="mt-12 rounded-lg border border-gray-700/50 bg-gray-900/30 p-8 text-center">
              <h3 className="mb-2 text-xl font-semibold text-white">More Protocols Coming</h3>
              <p className="text-gray-400">
                We&apos;re adding protocols for BioHorizons, Osstem, Hiossen, MegaGen, MIS, and more. 
                Check back regularly for updates.
              </p>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
    </main>
  );
}
