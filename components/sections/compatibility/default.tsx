'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

import { Badge } from '../../ui/badge';
import { Section } from '../../ui/section';

export default function Compatibility() {
  const implantSystems = [
    { name: 'Nobel Biocare', url: 'https://www.nobelbiocare.com' },
    { name: 'Straumann', url: 'https://www.straumann.com' },
    { name: 'Zimmer Biomet', url: 'https://www.zimvie.com/en/dental.html' },
    { name: 'BioHorizons', url: 'https://www.biohorizons.com' },
    { name: 'Neodent', url: 'https://www.straumann.com/neodent' },
    { name: 'MIS', url: 'https://www.mis-implants.com' },
    { name: 'Osstem', url: 'https://en.osstem.com' },
  ];

  const protocols = ['All-on-4', 'All-on-6', 'All-on-X', 'Zygomatic'];

  return (
    <Section className="bg-muted/30">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="mb-4">
            <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
              <BlurText
                text="Multi-Platform"
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
                Compatible
              </GradientText>
            </h2>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <BlurText
              text="Works with major implant systems."
              delay={30}
              direction="bottom"
              animateBy="words"
              className="font-space block justify-center text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl"
            />
            <BlurText
              text="Full MUA compatibility."
              delay={60}
              direction="bottom"
              animateBy="words"
              className="block justify-center font-sans text-lg font-light text-gray-400 sm:text-xl md:text-2xl lg:text-3xl"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 flex flex-wrap justify-center gap-3"
          >
            {implantSystems.map((system, index) => (
              <motion.a
                key={index}
                href={system.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group relative rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-medium shadow-[0_0_15px_rgba(59,130,246,0.15)] backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
              >
                {/* Ambient glow effect - always visible */}
                <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-md transition-opacity duration-300 group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-cyan-500/30" />
                <span className="relative text-white transition-colors group-hover:text-white">
                  {system.name}
                </span>
              </motion.a>
            ))}
            <Link href="/partners">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.65 }}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center gap-2 rounded-lg border border-dashed border-blue-500/30 bg-background/50 px-6 py-3 text-blue-400 transition-all duration-300 hover:border-blue-500/60 hover:bg-blue-500/10 hover:text-blue-300"
              >
                + More Systems
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {protocols.map((protocol, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  {protocol}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* SEO-optimized internal link to partners page */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-6"
          >
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              View all compatible implant systems and suppliers
              <ArrowRight className="size-3" />
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
