export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: 'clinical' | 'all-on-x' | 'digital' | 'lab' | 'troubleshooting' | 'compare' | 'docs';
  keywords: string[];
  href: string;
}

export const categories = {
  clinical: { title: 'Clinical How-To Guides', icon: '🔬', color: 'blue' },
  'all-on-x': { title: 'All-on-X Protocols', icon: '🦷', color: 'purple' },
  digital: { title: 'Digital Workflow', icon: '💻', color: 'cyan' },
  lab: { title: 'Lab Protocols', icon: '🔧', color: 'blue' },
  troubleshooting: { title: 'Troubleshooting', icon: '⚠️', color: 'red' },
  compare: { title: 'Comparisons', icon: '⚖️', color: 'purple' },
  docs: { title: 'Documentation', icon: '📋', color: 'gray' },
} as const;

export type CategoryKey = keyof typeof categories;

export const guides: Guide[] = [
  // CLINICAL GUIDES (10)
  {
    slug: 'full-arch-impression',
    title: 'How to Take a Full Arch Implant Impression',
    description: 'Step-by-step protocol for accurate multi-implant impressions',
    category: 'clinical',
    keywords: ['full arch impression', 'implant impression', 'multi-unit impression'],
    href: '/resources/clinical/full-arch-impression',
  },
  {
    slug: 'splint-copings',
    title: 'How to Splint Impression Copings',
    description: 'Techniques for rigid splinting without polymerization shrinkage',
    category: 'clinical',
    keywords: ['splint copings', 'impression splinting', 'pattern resin', 'GC Pattern'],
    href: '/resources/clinical/splint-copings',
  },
  {
    slug: 'make-verification-jig',
    title: 'How to Make a Verification Jig',
    description: 'Fabrication methods for conventional and metal verification jigs',
    category: 'clinical',
    keywords: ['verification jig', 'make jig', 'fabricate jig', 'resin jig'],
    href: '/resources/clinical/make-verification-jig',
  },
  {
    slug: 'verify-implant-position',
    title: 'How to Verify Implant Position',
    description: 'Confirming accurate implant spatial relationships',
    category: 'clinical',
    keywords: ['verify implant', 'implant position', 'spatial relationship'],
    href: '/resources/clinical/verify-implant-position',
  },
  {
    slug: 'passive-fit',
    title: 'How to Check Passive Fit (Sheffield Test)',
    description: 'One-screw test protocol to verify framework seating',
    category: 'clinical',
    keywords: ['passive fit', 'sheffield test', 'one screw test', 'framework fit'],
    href: '/resources/clinical/passive-fit',
  },
  {
    slug: 'avoid-shrinkage',
    title: 'How to Avoid Polymerization Shrinkage',
    description: 'Why resin jigs fail and how to eliminate the shrinkage variable',
    category: 'clinical',
    keywords: ['polymerization shrinkage', 'resin shrinkage', 'acrylic shrinkage'],
    href: '/resources/clinical/avoid-shrinkage',
  },
  {
    slug: 'section-relute',
    title: 'How to Section and Relute a Verification Jig',
    description: 'Cutting and rejoining technique for improved accuracy',
    category: 'clinical',
    keywords: ['section relute', 'cut jig', 'rejoin verification'],
    href: '/resources/clinical/section-relute',
  },
  {
    slug: 'transfer-master-cast',
    title: 'How to Transfer Implant Position to Master Cast',
    description: 'Accurate analog positioning from verification jig',
    category: 'clinical',
    keywords: ['transfer implant', 'master cast', 'analog position'],
    href: '/resources/clinical/transfer-master-cast',
  },
  {
    slug: 'achieve-passive-fit',
    title: 'How to Achieve Passive Fit Full Arch',
    description: 'Complete workflow for guaranteed passive seating',
    category: 'clinical',
    keywords: ['achieve passive fit', 'full arch passive', 'framework seating'],
    href: '/resources/clinical/achieve-passive-fit',
  },
  {
    slug: 'avoid-remakes',
    title: 'How to Avoid Full Arch Remakes',
    description: 'Preventing costly prosthetic failures',
    category: 'clinical',
    keywords: ['avoid remakes', 'prevent remake', 'full arch failure'],
    href: '/resources/clinical/avoid-remakes',
  },

  // ALL-ON-X PROTOCOLS (3)
  {
    slug: 'all-on-4-impression',
    title: 'How to Take an All-on-4 Impression',
    description: 'Complete workflow from implant-level to master cast',
    category: 'all-on-x',
    keywords: ['all-on-4', 'all on 4 impression', 'four implant'],
    href: '/resources/all-on-x/all-on-4-impression',
  },
  {
    slug: 'all-on-x-verification',
    title: 'How to Verify All-on-X Implant Positions',
    description: 'Confirming spatial relationships before framework fabrication',
    category: 'all-on-x',
    keywords: ['all-on-x', 'all-on-6', 'verify positions'],
    href: '/resources/all-on-x/all-on-x-verification',
  },
  {
    slug: 'open-tray-technique',
    title: 'How to Use Open Tray Technique (Multiple Implants)',
    description: 'Pick-up impression protocol for 4+ implant cases',
    category: 'all-on-x',
    keywords: ['open tray', 'pick-up impression', 'multiple implants'],
    href: '/resources/all-on-x/open-tray-technique',
  },

  // DIGITAL WORKFLOW (3)
  {
    slug: 'scan-full-arch',
    title: 'How to Scan Full Arch Implants',
    description: 'IOS scanning protocol for multi-implant cases',
    category: 'digital',
    keywords: ['scan implants', 'IOS', 'intraoral scanner', 'digital impression'],
    href: '/resources/digital/scan-full-arch',
  },
  {
    slug: 'verify-digital-accuracy',
    title: 'How to Verify Digital Impression Accuracy',
    description: 'Checking scan accuracy before committing to fabrication',
    category: 'digital',
    keywords: ['digital accuracy', 'scan verification', 'IOS accuracy'],
    href: '/resources/digital/verify-digital-accuracy',
  },
  {
    slug: 'ios-jig-combo',
    title: 'How to Combine IOS with Verification Jig',
    description: 'Hybrid workflow for digital-analog verification',
    category: 'digital',
    keywords: ['IOS jig', 'hybrid workflow', 'digital analog'],
    href: '/resources/digital/ios-jig-combo',
  },

  // LAB PROTOCOLS (4)
  {
    slug: 'pour-master-cast',
    title: 'How to Pour Master Cast from Verification Jig',
    description: 'Stone pouring technique for accurate analog positioning',
    category: 'lab',
    keywords: ['pour cast', 'master cast', 'stone pour', 'analog'],
    href: '/resources/lab/pour-master-cast',
  },
  {
    slug: 'check-analog-position',
    title: 'How to Check Analog Position Accuracy',
    description: 'Verification steps before framework design',
    category: 'lab',
    keywords: ['analog position', 'check analog', 'analog accuracy'],
    href: '/resources/lab/check-analog-position',
  },
  {
    slug: 'fabricate-framework',
    title: 'How to Fabricate Passive Framework',
    description: 'Design and milling considerations for passive fit',
    category: 'lab',
    keywords: ['fabricate framework', 'mill framework', 'passive framework'],
    href: '/resources/lab/fabricate-framework',
  },
  {
    slug: 'test-before-milling',
    title: 'How to Test Fit Before Milling Zirconia',
    description: 'Pre-milling verification to avoid costly remakes',
    category: 'lab',
    keywords: ['test fit', 'before milling', 'zirconia', 'PMMA try-in'],
    href: '/resources/lab/test-before-milling',
  },

  // TROUBLESHOOTING (3)
  {
    slug: 'jig-doesnt-fit',
    title: "Why Your Verification Jig Doesn't Fit",
    description: 'Common causes and solutions for jig seating problems',
    category: 'troubleshooting',
    keywords: ['jig doesnt fit', 'jig problems', 'seating issues'],
    href: '/resources/troubleshooting/jig-doesnt-fit',
  },
  {
    slug: 'framework-wont-seat',
    title: "Why Your Framework Won't Seat Passively",
    description: 'Diagnosing and correcting framework misfit',
    category: 'troubleshooting',
    keywords: ['framework misfit', 'wont seat', 'passive fit problem'],
    href: '/resources/troubleshooting/framework-wont-seat',
  },
  {
    slug: 'jig-flexes',
    title: 'Why Your Jig Flexes Under Torque',
    description: 'Material limitations and rigid alternatives',
    category: 'troubleshooting',
    keywords: ['jig flex', 'resin flex', 'torque', 'rigid jig'],
    href: '/resources/troubleshooting/jig-flexes',
  },

  // COMPARISONS (4)
  {
    slug: 'metal-vs-resin',
    title: 'Metal vs Resin Verification Jig',
    description: 'Side-by-side comparison of accuracy, rigidity, and workflow',
    category: 'compare',
    keywords: ['metal vs resin', 'jig comparison', 'steel vs acrylic'],
    href: '/resources/compare/metal-vs-resin',
  },
  {
    slug: 'vs-photogrammetry',
    title: 'Insta-Bar vs Photogrammetry',
    description: 'When to use each verification method',
    category: 'compare',
    keywords: ['photogrammetry', 'PIC dental', 'ICam4D', 'digital verification'],
    href: '/resources/compare/vs-photogrammetry',
  },
  {
    slug: 'vs-ijig-optisplint',
    title: 'Insta-Bar vs iJIG / OPTISPLINT',
    description: 'Comparing metal link verification systems',
    category: 'compare',
    keywords: ['iJIG', 'OPTISPLINT', 'comparison', 'alternative'],
    href: '/resources/compare/vs-ijig-optisplint',
  },
  {
    slug: 'vs-pic-dental',
    title: 'Insta-Bar vs PIC Dental',
    description: 'Photogrammetry alternative comparison',
    category: 'compare',
    keywords: ['PIC dental', 'photogrammetry alternative'],
    href: '/resources/compare/vs-pic-dental',
  },

  // DOCUMENTATION (4)
  {
    slug: 'ifu',
    title: 'Instructions for Use (IFU)',
    description: 'Complete usage guide for Insta-Bar system',
    category: 'docs',
    keywords: ['IFU', 'instructions', 'how to use'],
    href: '/resources/docs/ifu',
  },
  {
    slug: 'quick-start',
    title: 'Quick Start Guide',
    description: 'Get started with Insta-Bar in 5 minutes',
    category: 'docs',
    keywords: ['quick start', 'getting started', 'setup'],
    href: '/resources/docs/quick-start',
  },
  {
    slug: 'compatibility',
    title: 'Implant Compatibility Chart',
    description: 'Supported implant systems and interfaces',
    category: 'docs',
    keywords: ['compatibility', 'implant systems', 'Nobel', 'Straumann', 'Zimmer'],
    href: '/resources/docs/compatibility',
  },
  {
    slug: 'sterilization',
    title: 'Sterilization Protocol',
    description: 'Cleaning and autoclave instructions',
    category: 'docs',
    keywords: ['sterilization', 'autoclave', 'cleaning', 'disinfection'],
    href: '/resources/docs/sterilization',
  },
];

// Helper functions
export function getGuidesByCategory(category: CategoryKey): Guide[] {
  return guides.filter((guide) => guide.category === category);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getRelatedGuides(currentSlug: string, limit = 3): Guide[] {
  const current = getGuideBySlug(currentSlug);
  if (!current) return [];

  // First try same category, then other categories
  const sameCategory = guides.filter(
    (g) => g.category === current.category && g.slug !== currentSlug
  );
  const otherCategory = guides.filter((g) => g.category !== current.category);

  return [...sameCategory, ...otherCategory].slice(0, limit);
}

export function searchGuides(query: string): Guide[] {
  const q = query.toLowerCase();
  return guides.filter(
    (guide) =>
      guide.title.toLowerCase().includes(q) ||
      guide.description.toLowerCase().includes(q) ||
      guide.keywords.some((k) => k.toLowerCase().includes(q))
  );
}
