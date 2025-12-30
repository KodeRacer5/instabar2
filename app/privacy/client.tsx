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
    title: 'Information We Collect',
    content: `We collect information you provide directly, including name, email address, phone number, and professional credentials when you contact us, request a quote, or create an account. We also collect usage data such as IP address, browser type, and pages visited through cookies and similar technologies.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use collected information to process orders and inquiries, provide customer support, send product updates and marketing communications (with consent), improve our website and services, and comply with legal obligations.`,
  },
  {
    title: 'Information Sharing',
    content: `We do not sell your personal information. We may share data with service providers who assist our operations, business partners for order fulfillment, and legal authorities when required by law.`,
  },
  {
    title: 'Data Security',
    content: `We implement industry-standard security measures including encryption, secure servers, and access controls to protect your information. However, no method of transmission over the Internet is 100% secure.`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to access, correct, or delete your personal data. You may opt out of marketing communications at any time. To exercise these rights, contact us at info@insta-bar.com.`,
  },
  {
    title: 'Cookies',
    content: `We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.`,
  },
  {
    title: 'Changes to This Policy',
    content: `We may update this privacy policy periodically. Changes will be posted on this page with an updated effective date.`,
  },
  {
    title: 'Contact Us',
    content: `For questions about this privacy policy or our data practices, please contact us at info@insta-bar.com.`,
  },
];

export default function PrivacyPageClient() {
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
                  text="Privacy"
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
                  Policy
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
                  <SpotlightCard className="" spotlightColor="rgba(59, 130, 246, 0.2)">
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
