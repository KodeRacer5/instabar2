'use client';

import { Link2, Search, Send } from 'lucide-react';
import { motion } from 'motion/react';

import SpotlightCard from '@/src/components/ReactBits/Cards/SpotlightCard';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

import { Section } from '../../ui/section';

export default function Workflow() {
  const steps = [
    {
      number: '01',
      title: 'Attach',
      description: 'Secure Insta-Bar links to multi-unit abutments with precision fit',
      icon: Link2,
    },
    {
      number: '02',
      title: 'Verify',
      description: 'Confirm passive fit with single-screw Sheffield test',
      icon: Search,
    },
    {
      number: '03',
      title: 'Transfer',
      description: 'Send verified positions to lab for framework fabrication',
      icon: Send,
    },
  ];

  return (
    <Section className="hidden py-16 md:block md:py-24">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col items-center gap-12 text-center">
          <div>
            <div className="mb-4">
              <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
                <BlurText
                  text="Three Steps to"
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
                  Verified Accuracy
                </GradientText>
              </h2>
            </div>
            <div className="mx-auto max-w-2xl text-center">
              <BlurText
                text="Simple, repeatable workflow."
                delay={30}
                direction="bottom"
                animateBy="words"
                className="font-space block justify-center text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl"
              />
              <BlurText
                text="Built for every full-arch case."
                delay={60}
                direction="bottom"
                animateBy="words"
                className="block justify-center font-sans text-lg font-light text-gray-400 sm:text-xl md:text-2xl lg:text-3xl"
              />
            </div>
          </div>

          <div className="grid w-full gap-8 sm:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                <SpotlightCard
                  className="flex h-full flex-col items-center text-center"
                  spotlightColor="rgba(139, 92, 246, 0.3)"
                >
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                    <step.icon className="size-8 text-white" />
                  </div>
                  <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                    Step {step.number}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground mt-2">{step.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
