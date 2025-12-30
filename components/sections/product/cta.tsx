'use client';

import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'motion/react';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { siteConfig } from '@/config/site';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

export default function ProductCTA() {
  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-container mx-auto">
        {/* Glowing container - medium intensity */}
        <div className="group/cta relative">
          {/* Animated glow border */}
          <div
            className="absolute -inset-[2px] rounded-3xl opacity-60 blur-sm transition-opacity duration-500 group-hover/cta:opacity-80"
            style={{
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #22d3ee, #8b5cf6, #3b82f6)',
              backgroundSize: '300% 100%',
              animation: 'gradient-shift 4s ease infinite',
            }}
          />

          {/* Outer glow pulse */}
          <div
            className="absolute -inset-[6px] rounded-3xl opacity-30 blur-xl"
            style={{
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #22d3ee, #8b5cf6, #3b82f6)',
              backgroundSize: '300% 100%',
              animation: 'gradient-shift 4s ease infinite, glow-pulse 2s ease-in-out infinite',
            }}
          />

          {/* Content container */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 overflow-hidden rounded-3xl p-8 backdrop-blur-md md:p-12"
            style={{
              background:
                'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(17, 24, 39, 0.9), rgba(139, 92, 246, 0.1))',
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.1),_transparent_50%)]" />

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <div className="mb-4">
                <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
                  <BlurText
                    text="Ready to Verify with"
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
                    Confidence?
                  </GradientText>
                </h2>
              </div>

              <div className="mb-8 text-center">
                <BlurText
                  text="Contact us for pricing and availability."
                  delay={30}
                  direction="bottom"
                  animateBy="words"
                  className="font-space block justify-center text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl"
                />
                <BlurText
                  text="Schedule a demonstration today."
                  delay={60}
                  direction="bottom"
                  animateBy="words"
                  className="block justify-center font-sans text-lg font-light text-gray-400 sm:text-xl md:text-2xl lg:text-3xl"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col justify-center gap-4 sm:flex-row"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500"
                  asChild
                >
                  <a href={siteConfig.nav.contact}>
                    Request Quote
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:border-blue-500/50 hover:bg-white/10"
                  asChild
                >
                  <a href={siteConfig.links.email}>
                    <Mail className="mr-2 size-4" />
                    Email Us
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
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
