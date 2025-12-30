'use client';

import { Download, FileText } from 'lucide-react';
import { motion } from 'motion/react';

import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import SpotlightCard from '@/src/components/ReactBits/Cards/SpotlightCard';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

const downloads = [
  { name: 'Instructions for Use (IFU)', type: 'PDF', size: '2.4 MB' },
  { name: 'Quick Start Guide', type: 'PDF', size: '1.1 MB' },
  { name: 'Implant Compatibility Chart', type: 'PDF', size: '850 KB' },
  { name: 'Sterilization Protocol', type: 'PDF', size: '620 KB' },
];

export default function Downloads() {
  return (
    <Section>
      <div className="max-w-container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
            <GradientText
              colors={['#3b82f6', '#8b5cf6', '#22d3ee', '#3b82f6']}
              animationSpeed={6}
              className="inline"
            >
              Downloads
            </GradientText>
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl gap-4">
          {downloads.map((download, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SpotlightCard className="!p-4" spotlightColor="rgba(139, 92, 246, 0.25)">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-2">
                      <FileText className="size-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{download.name}</p>
                      <p className="text-sm text-gray-400">
                        {download.type} • {download.size}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-white hover:border-blue-500/50 hover:bg-white/10"
                  >
                    <Download className="mr-2 size-4" />
                    Download
                  </Button>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
