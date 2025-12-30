export const siteConfig = {
  name: 'Insta-Bar',
  url: 'https://insta-bar.com',
  ogImage: 'https://insta-bar.com/og.jpg',
  description:
    'Prefabricated stainless steel verification for full-arch implants. No resin shrinkage. No luting. Validates implant positions for All-on-4, All-on-X cases.',
  links: {
    contact: '/contact',
  },
  nav: {
    product: '/product',
    howItWorks: '/how-it-works',
    resources: '/resources',
    contact: '/contact',
  },
  navItems: [
    { name: 'Product', href: '/product' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ],
  meta: {
    home: {
      title: 'Insta-Bar | Metal Verification for Full-Arch Implants',
      description:
        'Prefabricated stainless steel verification for full-arch implants. No resin shrinkage. No luting.',
    },
    product: {
      title: 'Product | Insta-Bar',
      description: 'Explore Insta-Bar verification system kits, specifications, and compatibility.',
    },
    howItWorks: {
      title: 'How It Works | Insta-Bar',
      description:
        'Learn the three-step workflow: Attach, Verify, Transfer. Metal vs resin comparison.',
    },
    resources: {
      title: 'Resources | Insta-Bar',
      description: 'Downloads, FAQs, case examples, and training materials for Insta-Bar.',
    },
    contact: {
      title: 'Contact | Insta-Bar',
      description: 'Get in touch with our team for orders, support, or distributor inquiries.',
    },
  },
  compatibility: [
    'Nobel Biocare',
    'Straumann',
    'Zimmer Biomet',
    'BioHorizons',
    'Neodent',
    'MIS',
    'Osstem',
  ],
  protocols: ['All-on-4', 'All-on-6', 'All-on-X', 'Zygomatic'],
};

export type SiteConfig = typeof siteConfig;
