'use client';

import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

import { Section } from '@/components/ui/section';
import Footer from '@/components/sections/footer/default';
import DockNavbar from '@/components/sections/navbar/DockNavbar';
import Galaxy from '@/src/components/ReactBits/Backgrounds/Galaxy';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';

// Major Implant Manufacturers
const implantManufacturers = [
  {
    name: 'Nobel Biocare',
    url: 'https://www.nobelbiocare.com',
    description: 'Global leader in implant dentistry since 1965',
  },
  {
    name: 'Straumann',
    url: 'https://www.straumann.com',
    description: 'Premium dental implant solutions',
  },
  {
    name: 'ZimVie (Zimmer Biomet Dental)',
    url: 'https://www.zimvie.com/en/dental.html',
    description: 'Comprehensive implant portfolio',
  },
  {
    name: 'Dentsply Sirona (Astra Tech)',
    url: 'https://www.dentsplysirona.com/en-us/discover/discover-by-brand/astra-tech-implant-system.html',
    description: 'Astra Tech Implant System with lifetime warranty',
  },
  {
    name: 'BioHorizons',
    url: 'https://www.biohorizons.com',
    description: 'Laser-Lok technology innovator',
  },
  {
    name: 'Neodent',
    url: 'https://www.straumann.com/neodent',
    description: 'Accessible implant solutions by Straumann',
  },
  {
    name: 'MIS Implants',
    url: 'https://www.mis-implants.com',
    description: 'Simplifying implant dentistry',
  },
  {
    name: 'Osstem',
    url: 'https://en.osstem.com',
    description: 'Global leader from South Korea',
  },
  {
    name: 'Hiossen',
    url: 'https://hiossen.com',
    description: 'Pennsylvania-manufactured implant systems',
  },
  {
    name: 'MegaGen',
    url: 'https://www.megagenamerica.com',
    description: 'AnyRidge implant system innovator',
  },
  {
    name: 'Keystone Dental',
    url: 'https://keystonedental.com',
    description: 'Prima and Genesis implant systems',
  },
  {
    name: 'Implant Direct',
    url: 'https://www.implantdirect.com',
    description: 'Cost-effective implant solutions by Envista',
  },
  {
    name: 'Neoss',
    url: 'https://www.neoss.com',
    description: 'NeossONE unified platform system',
  },
];

// Aftermarket Component Suppliers
const aftermarketSuppliers = [
  {
    name: 'DESS Dental',
    url: 'https://www.dessdental.com',
    description: 'Compatible abutments for 32+ implant systems',
  },
  {
    name: 'DESS USA',
    url: 'https://www.dess-usa.com',
    description: '#1 supplier of compatible precision components',
  },
  {
    name: 'Glidewell Inclusive',
    url: 'https://glidewelldental.com/solutions/implant-solutions/implant-and-biologics/inclusive-prosthetic-components',
    description: 'FDA-cleared compatible prosthetic components',
  },
  {
    name: 'Glidewell Direct',
    url: 'https://glidewelldirect.com/collections/implants',
    description: 'Implants and components direct to dentists',
  },
];

// Major Dental Suppliers
const dentalSuppliers = [
  {
    name: 'Henry Schein Dental',
    url: 'https://www.henryschein.com/us-en/dental/default.aspx',
    description: 'Comprehensive dental supplies and implant products',
  },
  {
    name: 'Henry Schein Implants',
    url: 'https://www.henryschein.com/dental-implants.aspx',
    description: 'Full selection of implants and abutments',
  },
  {
    name: 'Patterson Dental',
    url: 'https://www.pattersondental.com',
    description: 'Dental supplies, equipment and technology',
  },
  {
    name: 'Zahn Dental (Henry Schein)',
    url: 'https://www.henryschein.com/us-en/zahn/digitaldentistry/dess-dental-smart-solutions.aspx',
    description: 'DESS compatible components distributor',
  },
];

export default function PartnersPageClient() {
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

        <Section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                <BlurText text="Compatible Implant Systems" delay={50} direction="top" className="text-white" />
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-400"
              >
                Insta-Bar verification system works with all major implant platforms and aftermarket components
              </motion.p>
            </div>

            {/* Major Implant Manufacturers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="mb-6 text-2xl font-semibold text-white">Implant Manufacturers</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {implantManufacturers.map((manufacturer, index) => (
                  <motion.a
                    key={manufacturer.name}
                    href={manufacturer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
                  >
                    <div>
                      <h3 className="text-base font-semibold text-white">{manufacturer.name}</h3>
                      <p className="text-sm text-gray-400">{manufacturer.description}</p>
                    </div>
                    <ExternalLink className="size-4 shrink-0 text-gray-400" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Aftermarket Component Suppliers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="mb-6 text-2xl font-semibold text-white">Aftermarket Component Suppliers</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {aftermarketSuppliers.map((supplier, index) => (
                  <motion.a
                    key={supplier.name}
                    href={supplier.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    className="flex items-center justify-between rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 transition-colors hover:bg-blue-500/10"
                  >
                    <div>
                      <h3 className="text-base font-semibold text-white">{supplier.name}</h3>
                      <p className="text-sm text-gray-400">{supplier.description}</p>
                    </div>
                    <ExternalLink className="size-4 shrink-0 text-blue-400" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Major Dental Suppliers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="mb-6 text-2xl font-semibold text-white">Dental Supply Distributors</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {dentalSuppliers.map((supplier, index) => (
                  <motion.a
                    key={supplier.name}
                    href={supplier.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    className="flex items-center justify-between rounded-xl border border-purple-500/20 bg-purple-500/5 p-5 transition-colors hover:bg-purple-500/10"
                  >
                    <div>
                      <h3 className="text-base font-semibold text-white">{supplier.name}</h3>
                      <p className="text-sm text-gray-400">{supplier.description}</p>
                    </div>
                    <ExternalLink className="size-4 shrink-0 text-purple-400" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-12 text-center"
            >
              <p className="mb-4 text-gray-400">
                Don't see your implant system? Contact us for compatibility information.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </Section>

        <Footer />
      </div>
    </main>
  );
}
