'use client';

import { Building2, Package, Video, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

import { Section } from '@/components/ui/section';
import SpotlightCard from '@/src/components/ReactBits/Cards/SpotlightCard';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

const kits = [
  {
    name: 'Standard System',
    price: 'Starting Kit',
    items: [
      '28 surgical-grade 316L stainless steel verification links',
      'Link lengths: 6mm to 28mm',
      'Sterilization case',
      'Quick start guide',
      'Training manual',
      'Verification protocol guide',
    ],
    icon: Package,
    highlight: true,
  },
  {
    name: 'Digital Bundle',
    price: 'Optional Add-on',
    items: ['Complete 28-link system', 'Digital integration suite', 'Scanner compatibility kit'],
    icon: Wrench,
  },
  {
    name: 'Professional Kit',
    price: 'Extended',
    items: [
      'Extended link set for zygomatic cases',
      'Angled link adapters',
      'Desktop organizer',
      'Video training access',
    ],
    icon: Video,
  },
  {
    name: 'High Volume Lab',
    price: 'Contact Sales',
    items: [
      'Dual 84-link systems (168 total links)',
      'Advanced digital integration',
      'Extended team training program',
      'Priority 24/7 technical support',
    ],
    icon: Building2,
  },
];

export default function KitContents() {
  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-container mx-auto">
        <div className="mb-12 text-center">
          <div className="mb-4">
            <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
              <BlurText text="Kit" delay={100} direction="top" className="inline text-white" />
              <span className="inline"> </span>
              <GradientText
                colors={['#3b82f6', '#8b5cf6', '#22d3ee', '#3b82f6']}
                animationSpeed={6}
                className="inline"
              >
                Options
              </GradientText>
            </h2>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <BlurText
              text="Choose your system."
              delay={30}
              direction="bottom"
              animateBy="words"
              className="font-space block justify-center text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl"
            />
            <BlurText
              text="Fits your practice volume and workflow."
              delay={60}
              direction="bottom"
              animateBy="words"
              className="block justify-center font-sans text-lg font-light text-gray-400 sm:text-xl md:text-2xl lg:text-3xl"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {kits.map((kit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <SpotlightCard
                className={`h-full ${kit.highlight ? 'ring-1 ring-blue-500/30' : ''}`}
                spotlightColor={
                  kit.highlight ? 'rgba(59, 130, 246, 0.4)' : 'rgba(139, 92, 246, 0.25)'
                }
              >
                <div className="flex h-full flex-col">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                    <kit.icon className="size-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{kit.name}</h3>
                  <span className="mt-1 text-sm font-medium text-blue-400">{kit.price}</span>
                  <ul className="mt-4 flex-1 space-y-2">
                    {kit.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
