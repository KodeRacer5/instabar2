'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

import { Section } from '@/components/ui/section';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

const systems = [
  { name: 'Nobel Biocare', mua: 'Multi-unit' },
  { name: 'Straumann', mua: 'Variobase' },
  { name: 'Zimmer Biomet', mua: 'Encode' },
  { name: 'BioHorizons', mua: 'Laser-Lok' },
  { name: 'Neodent', mua: 'Grand Morse' },
  { name: 'MIS', mua: 'Conical' },
  { name: 'Osstem', mua: 'TS/SS' },
];

const protocols = ['All-on-4', 'All-on-6', 'All-on-X', 'Zygomatic'];

export default function CompatibilityMatrix() {
  return (
    <div className="hidden md:block">
    <Section className="py-16 md:py-24">
      <div className="max-w-container mx-auto">
        <div className="mb-12 text-center">
          <div className="mb-4">
            <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
              <BlurText
                text="Multi-Platform"
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
                Compatible
              </GradientText>
            </h2>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <BlurText
              text="Major implant systems supported."
              delay={30}
              direction="bottom"
              animateBy="words"
              className="font-space block justify-center text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl"
            />
            <BlurText
              text="Full-arch protocol ready."
              delay={60}
              direction="bottom"
              animateBy="words"
              className="block justify-center font-sans text-lg font-light text-gray-400 sm:text-xl md:text-2xl lg:text-3xl"
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Implant Systems Table */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-card/80 border-border/50 overflow-hidden rounded-2xl border backdrop-blur-sm">
              <div className="bg-primary/5 border-border/50 border-b px-6 py-4">
                <h3 className="font-semibold text-white">Implant Systems</h3>
              </div>
              <div className="overflow-x-auto">
              <table className="w-full min-w-[400px]">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-muted-foreground px-6 py-3 text-left text-sm font-medium">
                      System
                    </th>
                    <th className="text-muted-foreground px-6 py-3 text-left text-sm font-medium">
                      MUA Type
                    </th>
                    <th className="text-muted-foreground px-6 py-3 text-center text-sm font-medium">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {systems.map((system, index) => (
                    <tr
                      key={index}
                      className={index !== systems.length - 1 ? 'border-border/30 border-b' : ''}
                    >
                      <td className="px-6 py-3 font-medium text-white">{system.name}</td>
                      <td className="text-muted-foreground px-6 py-3">{system.mua}</td>
                      <td className="px-6 py-3 text-center">
                        <CheckCircle2 className="text-primary mx-auto size-5" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          </motion.div>

          {/* Protocols Supported */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="bg-card/80 border-border/50 flex-1 rounded-2xl border p-8 backdrop-blur-sm">
              <h3 className="mb-6 font-semibold text-white">Supported Protocols</h3>
              <div className="grid grid-cols-2 gap-4">
                {protocols.map((protocol, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="bg-primary/10 border-primary/20 rounded-xl border p-4 text-center"
                  >
                    <span className="text-primary font-semibold">{protocol}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-muted-foreground mt-6 text-sm">
                Compatible with any MUA-based full-arch protocol
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
    </div>
  );
}
