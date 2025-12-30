'use client';

import { motion } from 'motion/react';

import { Section } from '@/components/ui/section';
import SpotlightCard from '@/src/components/ReactBits/Cards/SpotlightCard';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

const steps = [
  'Seat the verification jig on all implants',
  'Tighten ONE screw at the most distal position',
  'Examine the opposite end—any visible gap or lift indicates misfit',
  'Repeat from the other distal position',
  'Continue until all positions tested',
];

export default function SheffieldTest() {
  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-container mx-auto">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center">
            <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
              <BlurText
                text="The Sheffield"
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
                Test
              </GradientText>
            </h2>
          </div>
          <div className="text-muted-foreground mb-8 text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <BlurText
              text="The gold standard for verifying passive fit of implant frameworks."
              delay={30}
              direction="bottom"
              animateBy="words"
              className="inline-block"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SpotlightCard className="" spotlightColor="rgba(59, 130, 246, 0.3)">
              <h3 className="mb-6 text-lg font-bold text-white">How to Perform:</h3>
              <ol className="space-y-4">
                {steps.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-gray-300">{step}</span>
                  </motion.li>
                ))}
              </ol>
            </SpotlightCard>
          </motion.div>

          <div className="mt-8 text-left text-xl font-medium text-blue-300 sm:text-2xl md:text-3xl lg:text-4xl">
            <BlurText
              text="A rigid metal jig like Insta-Bar gives you confidence that any gap you see is real—not jig flex."
              delay={30}
              direction="bottom"
              animateBy="words"
              className="inline-block"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
