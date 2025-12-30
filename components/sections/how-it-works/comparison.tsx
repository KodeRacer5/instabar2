'use client';

import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

import { Section } from '@/components/ui/section';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

const comparisons = [
  { factor: 'Shrinkage', metal: 'None', resin: '6-7% volumetric' },
  { factor: 'Flex under torque', metal: 'Rigid', resin: 'Flexes' },
  { factor: 'Chairside luting', metal: 'Not required', resin: 'Required' },
  { factor: 'Sectioning', metal: 'Not required', resin: 'Often required' },
  { factor: 'Time to verify', metal: 'Immediate', resin: 'Wait for cure + re-lute' },
  { factor: 'Re-verification', metal: 'Same jig', resin: 'Must remake' },
];

export default function Comparison() {
  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
            <BlurText
              text="Why Metal Beats"
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
              Resin
            </GradientText>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md"
          style={{
            background: 'rgba(17, 24, 39, 0.5)',
            boxShadow: 'inset 0 0 30px rgba(79, 70, 229, 0.1), 0 0 40px rgba(139, 92, 246, 0.1)',
          }}
        >
          <table className="w-full">
            <thead className="border-b border-white/10 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-white">Factor</th>
                <th className="px-6 py-4 text-left font-semibold">
                  <span className="flex items-center gap-2 text-blue-400">
                    <CheckCircle2 className="size-4" />
                    Insta-Bar (Metal)
                  </span>
                </th>
                <th className="px-6 py-4 text-left font-semibold">
                  <span className="flex items-center gap-2 text-red-400">
                    <XCircle className="size-4" />
                    Conventional (Resin)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr
                  key={index}
                  className={index !== comparisons.length - 1 ? 'border-b border-white/5' : ''}
                >
                  <td className="px-6 py-4 font-medium text-white">{row.factor}</td>
                  <td className="px-6 py-4 text-blue-400">{row.metal}</td>
                  <td className="px-6 py-4 text-gray-400">{row.resin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </Section>
  );
}
