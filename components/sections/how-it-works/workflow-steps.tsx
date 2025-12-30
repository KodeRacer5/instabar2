'use client';

import { CheckCircle, Search, Send, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

import { Section } from '@/components/ui/section';
import SpotlightCard from '@/src/components/ReactBits/Cards/SpotlightCard';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

const steps = [
  {
    number: '01',
    title: 'Preparation',
    icon: Wrench,
    items: [
      'Remove healing abutments or existing prosthetic',
      'Ensure multi-unit abutments are clean and accessible',
      'Select appropriate Insta-Bar link lengths based on inter-implant distances',
    ],
  },
  {
    number: '02',
    title: 'Attachment',
    icon: CheckCircle,
    items: [
      'Thread Insta-Bar links onto MUA interfaces',
      'Secure with titanium fixation screws',
      'Links connect to form rigid metal framework across arch',
    ],
  },
  {
    number: '03',
    title: 'Verification',
    icon: Search,
    items: [
      'Tighten single distal screw (Sheffield Test)',
      'Visually inspect opposite side for lift or gap',
      'Repeat from opposite distal—no lift = verified fit',
    ],
  },
  {
    number: '04',
    title: 'Transfer',
    icon: Send,
    items: [
      'Insta-Bar jig transfers to master cast',
      'Or: take open-tray impression with jig in place',
      'Lab receives verified spatial relationships',
    ],
  },
];

export default function WorkflowSteps() {
  return (
    <Section>
      <div className="max-w-container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
            <BlurText
              text="Step-by-Step"
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
              Workflow
            </GradientText>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <SpotlightCard
                className="h-full"
                spotlightColor={
                  index % 2 === 0 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(139, 92, 246, 0.3)'
                }
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                    <step.icon className="size-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-blue-400">Step {step.number}</span>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                </div>
                <ul className="ml-16 space-y-2">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                      {item}
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
