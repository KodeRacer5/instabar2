'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

import { Section } from '@/components/ui/section';
import SpotlightCard from '@/src/components/ReactBits/Cards/SpotlightCard';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

const cases = [
  {
    title: 'All-on-4 Mandibular',
    details: [
      '4 implants, standard angulation',
      'Insta-Bar configured with 3 links',
      'Verified in under 5 minutes',
      'Framework seated passively at delivery',
    ],
  },
  {
    title: 'All-on-6 Maxillary with Zygomatic',
    details: [
      '4 standard + 2 zygomatic implants',
      'Extended link configuration',
      'Complex angulation verified',
      'No chairside adjustment needed at try-in',
    ],
  },
];

export default function CaseExamples() {
  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
            <BlurText text="Clinical" delay={100} direction="top" className="inline text-white" />
            <span className="inline"> </span>
            <GradientText
              colors={['#3b82f6', '#8b5cf6', '#22d3ee', '#3b82f6']}
              animationSpeed={6}
              className="inline"
            >
              Applications
            </GradientText>
          </h2>
        </div>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <SpotlightCard
                className="h-full"
                spotlightColor={index === 0 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(139, 92, 246, 0.3)'}
              >
                <h3 className="mb-4 text-xl font-bold text-white">{caseItem.title}</h3>
                <ul className="space-y-3">
                  {caseItem.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3 text-gray-300">
                      <div className="mt-0.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                        <CheckCircle2 className="size-4 text-white" />
                      </div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
