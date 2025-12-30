'use client';

import { motion } from 'motion/react';

import SpotlightCard from '@/src/components/ReactBits/Cards/SpotlightCard';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

import { Section } from '../../ui/section';

export default function Problem() {
  const problems = [
    {
      title: 'Shrinkage',
      items: ['Acrylic shrinks 6-7% during curing', '80% of shrinkage within 17 minutes'],
    },
    {
      title: 'Process Error',
      items: [
        'Sectioning and re-luting introduces error',
        'Chairside luting adds time and variables',
      ],
    },
    {
      title: 'Flex Under Torque',
      items: ['No rigidity under load', 'Resin flexes under screw torque'],
    },
  ];

  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="mb-4">
            <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
              <BlurText
                text="The Problem with"
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
                Resin Verification Jigs
              </GradientText>
            </h2>
          </div>

          <div className="text-muted-foreground max-w-2xl text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <BlurText
              text="Conventional verification jigs fail before they leave your hands."
              delay={30}
              direction="bottom"
              animateBy="words"
              className="inline-block"
            />
          </div>

          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <SpotlightCard className="h-full" spotlightColor="rgba(239, 68, 68, 0.2)">
                  <div className="text-left">
                    <h3 className="text-foreground mb-3 text-lg font-semibold">{problem.title}</h3>
                    <ul className="space-y-2">
                      {problem.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 size-2 shrink-0 rounded-full bg-blue-600"></span>
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <div className="text-muted-foreground mt-6 max-w-xl text-left text-xl font-medium italic sm:text-2xl md:text-3xl lg:text-4xl">
            <BlurText
              text="When your jig flexes, your framework won't seat."
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
