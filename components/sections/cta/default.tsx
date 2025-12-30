'use client';

import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'motion/react';

import { siteConfig } from '@/config/site';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

import { Button } from '../../ui/button';
import { Section } from '../../ui/section';

export default function CTA() {
  return (
    <Section className="relative overflow-hidden">
      <div className="max-w-container mx-auto">
        {/* Glowing container */}
        <div className="group/cta relative">
          {/* Animated glow border - medium intensity */}
          <div
            className="absolute -inset-[2px] rounded-2xl opacity-60 blur-sm transition-opacity duration-500 group-hover/cta:opacity-80"
            style={{
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #22d3ee, #8b5cf6, #3b82f6)',
              backgroundSize: '300% 100%',
              animation: 'gradient-shift 4s ease infinite',
            }}
          />

          {/* Outer glow pulse - medium intensity */}
          <div
            className="absolute -inset-[6px] rounded-2xl opacity-30 blur-xl"
            style={{
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #22d3ee, #8b5cf6, #3b82f6)',
              backgroundSize: '300% 100%',
              animation: 'gradient-shift 4s ease infinite, glow-pulse 2s ease-in-out infinite',
            }}
          />

          {/* Content container */}
          <div className="relative z-10 rounded-2xl bg-gray-900/80 px-8 py-16 backdrop-blur-sm md:px-12 md:py-20">
            <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
              <div className="mb-4">
                <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
                  <BlurText
                    text="Stop Guessing."
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
                    Start Verifying.
                  </GradientText>
                </h2>
              </div>

              <div className="mx-auto max-w-lg text-center">
                <BlurText
                  text="Get verified implant positions."
                  delay={30}
                  direction="bottom"
                  animateBy="words"
                  className="font-space block justify-center text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl"
                />
                <BlurText
                  text="Before committing to final framework fabrication."
                  delay={60}
                  direction="bottom"
                  animateBy="words"
                  className="block justify-center font-sans text-lg font-light text-gray-400 sm:text-xl md:text-2xl lg:text-3xl"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-center gap-4"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500"
                  asChild
                >
                  <a href={siteConfig.nav.product}>
                    View Product Details
                    <ArrowRightIcon className="ml-2 size-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:border-blue-500/50 hover:bg-white/10"
                  asChild
                >
                  <a href={siteConfig.nav.contact}>Contact Us</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </Section>
  );
}
