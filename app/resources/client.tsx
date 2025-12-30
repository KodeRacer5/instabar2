'use client';

import { Printer, Search } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import DockNavbar from '@/components/sections/navbar/DockNavbar';
import { Input } from '@/components/ui/input';
import ResponsiveGalaxy from '@/src/components/ReactBits/Backgrounds/ResponsiveGalaxy';
import SpotlightCard from '@/src/components/ReactBits/Cards/SpotlightCard';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';

interface GuideItem {
  name: string;
  href: string;
}

interface Category {
  title: string;
  subtitle: string;
  count: number;
  items: GuideItem[];
}

// LEFT CARD: Clinical Procedures (19 links)
const categories: Category[] = [
  {
    title: 'DENTAL IMPLANT IMPRESSIONS',
    subtitle: 'Techniques & Protocols',
    count: 6,
    items: [
      { name: 'Full Arch', href: '/resources/clinical/full-arch-impression' },
      { name: 'Splint Copings', href: '/resources/clinical/splint-copings' },
      { name: 'Master Cast Transfer', href: '/resources/clinical/transfer-master-cast' },
      { name: 'Open Tray', href: '/resources/all-on-x/open-tray-technique' },
      { name: 'All-on-4', href: '/resources/all-on-x/all-on-4-impression' },
      { name: 'Full Arch Scan', href: '/resources/digital/scan-full-arch' },
    ],
  },
  {
    title: 'DENTAL IMPLANT VERIFICATION',
    subtitle: 'Procedures & Protocols',
    count: 6,
    items: [
      { name: 'Jig Fabrication', href: '/resources/clinical/make-verification-jig' },
      { name: 'Implant Position', href: '/resources/clinical/verify-implant-position' },
      { name: 'Passive Fit Check', href: '/resources/clinical/passive-fit' },
      { name: 'Digital Verification', href: '/resources/digital/verify-digital-accuracy' },
      { name: 'IOS Integration', href: '/resources/digital/ios-jig-combo' },
      { name: 'All-on-X Position', href: '/resources/all-on-x/all-on-x-verification' },
    ],
  },
  {
    title: 'DENTAL IMPLANT FIT',
    subtitle: 'Complication Prevention',
    count: 3,
    items: [
      { name: 'Passive Fit', href: '/resources/clinical/achieve-passive-fit' },
      { name: 'Remake Prevention', href: '/resources/clinical/avoid-remakes' },
      { name: 'Shrinkage Prevention', href: '/resources/clinical/avoid-shrinkage' },
    ],
  },
  {
    title: 'QUICK START GUIDES',
    subtitle: 'Getting Started Fast',
    count: 4,
    items: [
      { name: 'First Verification', href: '/resources/clinical/make-verification-jig' },
      { name: 'Check Your Fit', href: '/resources/clinical/passive-fit' },
      { name: 'Digital Workflow', href: '/resources/digital/verify-digital-accuracy' },
      { name: 'Product Setup', href: '/resources/docs/quick-start' },
    ],
  },
];

// RIGHT CARD: Reference & Resources (16 links)
const rightCategories: Category[] = [
  {
    title: 'DENTAL IMPLANT FRAMEWORKS',
    subtitle: 'Fabrication & Protocols',
    count: 5,
    items: [
      { name: 'Master Cast Pour', href: '/resources/lab/pour-master-cast' },
      { name: 'Analog Position', href: '/resources/lab/check-analog-position' },
      { name: 'Section & Relute', href: '/resources/clinical/section-relute' },
      { name: 'Framework Milling', href: '/resources/lab/fabricate-framework' },
      { name: 'Pre-Mill Try-In', href: '/resources/lab/test-before-milling' },
    ],
  },
  {
    title: 'DENTAL IMPLANT TROUBLESHOOTING',
    subtitle: 'Common Issues & Solutions',
    count: 3,
    items: [
      { name: 'Jig Fit Issues', href: '/resources/troubleshooting/jig-doesnt-fit' },
      { name: 'Framework Misfit', href: '/resources/troubleshooting/framework-wont-seat' },
      { name: 'Jig Flex', href: '/resources/troubleshooting/jig-flexes' },
    ],
  },
  {
    title: 'DENTAL IMPLANT COMPARISONS',
    subtitle: 'Product & Method Analysis',
    count: 4,
    items: [
      { name: 'Metal vs Resin', href: '/resources/compare/metal-vs-resin' },
      { name: 'vs Photogrammetry', href: '/resources/compare/vs-photogrammetry' },
      { name: 'vs iJIG/OPTISPLINT', href: '/resources/compare/vs-ijig-optisplint' },
      { name: 'vs PIC Dental', href: '/resources/compare/vs-pic-dental' },
    ],
  },
  {
    title: 'INSTA-BAR VERIFICATION',
    subtitle: 'Product Documentation',
    count: 4,
    items: [
      { name: 'Instructions', href: '/resources/docs/ifu' },
      { name: 'Quick Start', href: '/resources/docs/quick-start' },
      { name: 'Compatibility', href: '/resources/docs/compatibility' },
      { name: 'Sterilization', href: '/resources/docs/sterilization' },
    ],
  },
];

function CategorySection({
  category,
  filtered,
  index = 0,
}: {
  category: Category;
  filtered: GuideItem[];
  index?: number;
}) {
  if (filtered.length === 0) return null;

  return (
    <div className="py-4">
      <div className="mb-3 border-b border-gray-700/50 pb-2">
        <div className="flex items-center">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          <h2 className="font-heading text-sm font-bold tracking-wide text-gray-300 uppercase">
            {category.title}
          </h2>
        </div>
        <p className="mt-0.5 ml-4 text-xs text-gray-500">{category.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
        {filtered.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group font-body flex origin-left items-center gap-2 py-1 text-sm text-white transition-all duration-200 hover:scale-125 hover:text-blue-400 active:scale-100"
          >
            <span className="text-blue-500">●</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ResourcesClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || searchQuery.length > 0;

  const filterItems = (items: GuideItem[]) => {
    if (!searchQuery.trim()) return items;
    const query = searchQuery.toLowerCase();
    return items.filter((item) => item.name.toLowerCase().includes(query));
  };

  const filteredLeftCategories = useMemo(
    () => categories.map((cat) => ({ ...cat, filtered: filterItems(cat.items) })),
    [searchQuery]
  );

  const filteredRightCategories = useMemo(
    () => rightCategories.map((cat) => ({ ...cat, filtered: filterItems(cat.items) })),
    [searchQuery]
  );

  const totalVisible = useMemo(() => {
    return (
      filteredLeftCategories.reduce((sum, cat) => sum + cat.filtered.length, 0) +
      filteredRightCategories.reduce((sum, cat) => sum + cat.filtered.length, 0)
    );
  }, [filteredLeftCategories, filteredRightCategories]);

  return (
    <main className="relative min-h-screen bg-black pt-24">
      {/* Galaxy Background */}
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

      {/* Content */}
      <div className="relative z-10">
        <DockNavbar />
        <div className="container mx-auto px-4 py-8">
          <div className="mx-auto mb-8 max-w-6xl text-center">
            <h1 className="font-heading mb-4 text-4xl font-black sm:text-5xl md:text-6xl lg:text-7xl">
              <BlurText text="IMPLANT" delay={80} direction="top" className="justify-center" />
              <BlurText
                text="PROTOCOLS"
                delay={80}
                direction="top"
                className="justify-center [&_span]:bg-gradient-to-r [&_span]:from-blue-500 [&_span]:via-purple-500 [&_span]:to-cyan-400 [&_span]:bg-clip-text [&_span]:text-transparent"
              />
            </h1>
            <p className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-lg font-medium text-transparent sm:text-xl md:text-2xl">
              How-to guides for full-arch procedures & verification
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
                <Printer className="size-4" />
                <span>All guides are printer-friendly</span>
              </div>
            </div>
          </div>

          <div className="mx-auto mb-6 max-w-3xl">
            <div
              className="relative transition-transform duration-200"
              style={{
                transform: isActive ? 'scale(1.12)' : 'scale(1)',
                borderRadius: '0.5rem',
                boxShadow: isActive
                  ? '0 0 40px rgba(59, 130, 246, 0.5)'
                  : '0 0 0px rgba(59, 130, 246, 0)',
              }}
            >
              <div
                className="absolute top-1/2 left-5 z-10 -translate-y-1/2 transition-transform duration-200"
                style={{ transform: isActive ? 'scale(1.4)' : 'scale(1)' }}
              >
                <Search
                  className={`h-6 w-6 transition-colors duration-200 ${isActive ? 'text-blue-400' : 'text-gray-400'}`}
                />
              </div>
              <Input
                type="text"
                placeholder="Search protocols..."
                className="border-gray-700 bg-gray-900/50 py-7 pl-14 text-xl text-white ring-offset-transparent transition-colors duration-200 placeholder:text-gray-500 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>
            {searchQuery && (
              <p className="mt-2 text-center text-xs text-gray-500">
                {totalVisible} result{totalVisible !== 1 ? 's' : ''} found
              </p>
            )}
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Left Card: Clinical Procedures */}
            <SpotlightCard
              className="border border-blue-500/30 bg-gray-900/30 p-6 shadow-[0_0_25px_rgba(59,130,246,0.15)] backdrop-blur-sm"
              spotlightColor="rgba(59, 130, 246, 0.15)"
            >
              <div className="divide-y divide-gray-800/50">
                {filteredLeftCategories.map((cat, index) => (
                  <CategorySection
                    key={cat.title}
                    category={cat}
                    filtered={cat.filtered}
                    index={index}
                  />
                ))}
              </div>
            </SpotlightCard>

            {/* Right Card: Reference & Resources */}
            <SpotlightCard
              className="border border-blue-500/30 bg-gray-900/30 p-6 shadow-[0_0_25px_rgba(59,130,246,0.15)] backdrop-blur-sm"
              spotlightColor="rgba(59, 130, 246, 0.15)"
            >
              <div className="divide-y divide-gray-800/50">
                {filteredRightCategories.map((cat, index) => (
                  <CategorySection
                    key={cat.title}
                    category={cat}
                    filtered={cat.filtered}
                    index={index}
                  />
                ))}
              </div>
            </SpotlightCard>
          </div>

          {totalVisible === 0 && searchQuery && (
            <div className="mx-auto max-w-6xl py-8 text-center text-gray-500">
              No protocols found matching &quot;{searchQuery}&quot;
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
