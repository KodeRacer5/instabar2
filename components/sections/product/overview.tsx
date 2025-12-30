'use client';

import { CheckCircle2, Shield, Target, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

import { Section } from '@/components/ui/section';
import SpotlightCard from '@/src/components/ReactBits/Cards/SpotlightCard';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

const features = [
  {
    icon: Shield,
    title: 'Surgical-Grade Steel',
    desc: '316L stainless steel links eliminate polymerization shrinkage completely',
  },
  {
    icon: Zap,
    title: 'Immediate Verification',
    desc: 'No chairside luting, sectioning, or waiting—verify positions instantly',
  },
  {
    icon: Target,
    title: 'Precision Tolerance',
    desc: '±0.01mm accuracy ensures framework passive fit every time',
  },
  {
    icon: CheckCircle2,
    title: 'Universal Compatibility',
    desc: 'Works with Nobel, Straumann, Zimmer, and all major implant systems',
  },
];

export default function ProductOverview() {
  return (
    <Section className="py-16 md:py-24">
      {/* Heading - left aligned, same width as content below */}
      <div className="mb-12 flex justify-center px-6">
        <div className="w-[1350px] text-left">
          <div className="mb-6">
            <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
              <BlurText text="What It" delay={100} direction="top" className="inline text-white" />
              <span className="inline"> </span>
              <GradientText
                colors={['#3b82f6', '#8b5cf6', '#22d3ee', '#3b82f6']}
                animationSpeed={6}
                className="inline"
              >
                Is
              </GradientText>
            </h2>
          </div>

          <div className="text-muted-foreground text-left text-xl leading-relaxed sm:text-2xl md:text-3xl lg:text-4xl">
            <BlurText
              text="Insta-Bar is a metal verification jig system that uses prefabricated stainless steel links instead of resin. The rigid metal construction eliminates shrinkage and flex, giving you verified implant positions before committing to final framework fabrication."
              delay={30}
              direction="bottom"
              animateBy="words"
              className="inline-block"
            />
          </div>
        </div>
      </div>

      {/* Layout A: Image Left + Cards Right - Full width */}
      <div className="flex flex-col items-center justify-center gap-8 px-6 lg:flex-row">
        {/* Large Product Image - hidden on mobile, shown on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden items-center justify-center lg:flex"
        >
          <div
            className="relative h-[750px] w-[850px]"
            style={{
              maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 90%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 90%)',
            }}
          >
            <Image
              src="/images/product/insta-bar-implant-verification-system-3.jpg"
              alt="Insta-Bar verification system components"
              fill
              className="object-contain"
              style={{ filter: 'brightness(0.7)' }}
            />
          </div>
        </motion.div>

        {/* Feature Cards - Right Side */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
            >
              <SpotlightCard className="" spotlightColor="rgba(59, 130, 246, 0.3)">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                    <feature.icon className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1">{feature.desc}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
