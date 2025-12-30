'use client';

import { motion } from 'motion/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Section } from '@/components/ui/section';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

const faqs = [
  {
    q: 'How is Insta-Bar different from a conventional verification jig?',
    a: 'Insta-Bar uses prefabricated stainless steel links instead of resin. This eliminates shrinkage and flex, giving you a truly rigid verification.',
  },
  {
    q: 'Do I need to lute the sections together chairside?',
    a: 'No. Insta-Bar links connect mechanically—no luting, no curing, no waiting.',
  },
  {
    q: "What if my verification jig doesn't fit?",
    a: 'If Insta-Bar shows a gap, your master cast or implant positions need attention. The metal jig itself is dimensionally stable, so you can trust what you see.',
  },
  {
    q: 'Is Insta-Bar compatible with my implant system?',
    a: 'Insta-Bar works with any system using standard multi-unit abutments, including Nobel, Straumann, Zimmer, BioHorizons, Neodent, MIS, Osstem, and others.',
  },
  {
    q: 'Can I reuse Insta-Bar components?',
    a: 'Yes. The stainless steel links and connectors are autoclavable and reusable across cases.',
  },
  {
    q: 'How does this compare to photogrammetry systems?',
    a: 'Photogrammetry (PIC, ICam) captures positions digitally but requires $15-25K equipment. Insta-Bar provides physical verification at a fraction of the cost.',
  },
  {
    q: 'What about OPTISPLINT or iJIG?',
    a: 'Both still require chairside luting with resin, introducing the same shrinkage variable they claim to eliminate. Insta-Bar is pure metal—no resin involved.',
  },
];

export default function FAQ() {
  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
            <BlurText
              text="Frequently Asked"
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
              Questions
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
            boxShadow: 'inset 0 0 30px rgba(79, 70, 229, 0.1)',
          }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                <AccordionTrigger className="px-6 text-left text-white hover:text-blue-400">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </Section>
  );
}
