'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

import SpotlightCard from '@/src/components/ReactBits/Cards/SpotlightCard';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

import { Section } from '../../ui/section';

export default function Solution() {
  const benefits = [
    { title: 'Dimensionally Stable', desc: 'No shrinkage, no flex' },
    { title: 'Reusable System', desc: 'Autoclavable links, use across multiple cases' },
    { title: 'Validates Accuracy', desc: 'Confirms master cast before framework' },
    { title: 'Universal Protocol', desc: 'Works with All-on-4, All-on-6, All-on-X' },
  ];

  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="mb-4">
            <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
              <BlurText
                text="Rigid. Metal."
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
                Verified.
              </GradientText>
            </h2>
          </div>

          <div className="text-muted-foreground max-w-2xl text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <BlurText
              text="Insta-Bar uses prefabricated stainless steel links to capture inter-implant relationships with absolute precision."
              delay={30}
              direction="bottom"
              animateBy="words"
              className="inline-block"
            />
          </div>

          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              >
                <SpotlightCard className="h-full" spotlightColor="rgba(59, 130, 246, 0.3)">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-2">
                      <CheckCircle2 className="size-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-foreground font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground mt-1 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-xl text-center">
            <BlurText
              text="One jig. Verified positions."
              delay={30}
              direction="bottom"
              animateBy="words"
              className="font-space block justify-center text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl"
            />
            <BlurText
              text="Confident prosthetics."
              delay={60}
              direction="bottom"
              animateBy="words"
              className="block justify-center font-sans text-lg font-light text-gray-400 sm:text-xl md:text-2xl lg:text-3xl"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
