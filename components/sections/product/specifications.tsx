'use client';

import { motion } from 'motion/react';

import { Section } from '@/components/ui/section';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

const specs = [
  { label: 'Material', value: '316L Stainless Steel (surgical grade)' },
  { label: 'Link Lengths', value: '6mm to 28mm' },
  { label: 'Tolerance', value: '±0.01mm' },
  { label: 'Maximum Angulation', value: '70°' },
  { label: 'Surface Finish', value: 'Polished' },
  { label: 'Screw Interface', value: 'Compatible with standard MUA hex' },
  { label: 'Sterilization', value: 'Autoclavable (1,000+ cycles)' },
  { label: 'Temperature Range', value: '-20°C to 180°C' },
  { label: 'Reusability', value: 'Links and connectors reusable' },
  { label: 'Configurations', value: '4, 5, 6+ implant setups' },
  { label: 'Corrosion Resistance', value: 'Grade 7' },
];

export default function Specifications() {
  return (
    <Section>
      <div className="max-w-container mx-auto">
        <div className="mb-12 text-center">
          <div className="mb-4">
            <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
              <BlurText
                text="Technical"
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
                Specifications
              </GradientText>
            </h2>
          </div>
          <div className="text-muted-foreground mx-auto max-w-2xl text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <BlurText
              text="Engineered for precision, built to last"
              delay={30}
              direction="bottom"
              animateBy="words"
              className="inline-block"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-2xl"
        >
          <div className="bg-card/80 border-border/50 overflow-hidden rounded-2xl border backdrop-blur-sm">
            <div className="overflow-x-auto">
            <table className="w-full min-w-[400px]">
              <tbody>
                {specs.map((spec, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    className={index !== specs.length - 1 ? 'border-border/50 border-b' : ''}
                  >
                    <td className="px-6 py-4 font-medium text-white">{spec.label}</td>
                    <td className="text-muted-foreground px-6 py-4 text-right">{spec.value}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
