'use client';

import { motion } from 'motion/react';

import Footer from '@/components/sections/footer/default';
import DockNavbar from '@/components/sections/navbar/DockNavbar';
import ResponsiveGalaxy from '@/src/components/ReactBits/Backgrounds/ResponsiveGalaxy';
import SpotlightCard from '@/src/components/ReactBits/Cards/SpotlightCard';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing and using the Insta-Bar website and purchasing our products, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    title: 'Product Use',
    content: `Insta-Bar verification systems are intended for use by licensed dental professionals only. Users must follow all instructions for use (IFU) provided with the product. Improper use may result in inaccurate verification results.`,
  },
  {
    title: 'Professional Responsibility',
    content: `The dental professional is solely responsible for clinical decisions regarding patient treatment. Insta-Bar products are verification tools and do not replace professional clinical judgment. Users must verify product compatibility with their specific implant systems.`,
  },
  {
    title: 'Intellectual Property',
    content: `All content on this website, including text, graphics, logos, and images, is the property of Insta-Bar and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.`,
  },
  {
    title: 'Limitation of Liability',
    content: `Insta-Bar shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services. Our liability is limited to the purchase price of the product.`,
  },
  {
    title: 'Warranty',
    content: `Insta-Bar products are warranted against manufacturing defects for a period specified in the product documentation. This warranty does not cover damage from misuse, improper sterilization, or normal wear. Contact us for warranty claims.`,
  },
  {
    title: 'Returns and Refunds',
    content: `Unopened products may be returned within 30 days of purchase for a full refund. Opened or used products cannot be returned due to infection control requirements. Contact customer service to initiate a return.`,
  },
  {
    title: 'Governing Law',
    content: `These terms shall be governed by and construed in accordance with the laws of the United States. Any disputes shall be resolved in the appropriate courts of jurisdiction.`,
  },
  {
    title: 'Changes to Terms',
    content: `We reserve the right to modify these terms at any time. Continued use of our website and products after changes constitutes acceptance of the new terms.`,
  },
  {
    title: 'Contact',
    content: `For questions about these Terms of Use, please contact us at info@insta-bar.com.`,
  },
];

export default function TermsPageClient() {
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

        <section className="py-12 md:py-16">
          <div className="max-w-container mx-auto px-4">
            <div className="mb-12 text-center">
              <h1 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
                <BlurText
                  text="Terms of"
                  delay={100}
                  direction="top"
                  className="inline text-white"
                />
                <span className="inline"> </span>
                <GradientText
                  colors={['#3b82f6', '#8b5cf6', '#22d3ee', '#3b82f6']}
                  animationSpeed={6}
                  className="inline"
                >
                  Use
                </GradientText>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-gray-400"
              >
                Last updated: December 2024
              </motion.p>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SpotlightCard className="" spotlightColor="rgba(139, 92, 246, 0.2)">
                    <h2 className="mb-3 text-xl font-bold text-white">{section.title}</h2>
                    <p className="leading-relaxed text-gray-300">{section.content}</p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
