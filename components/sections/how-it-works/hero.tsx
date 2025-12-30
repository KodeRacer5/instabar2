'use client';

import { Section } from '@/components/ui/section';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

export default function HowItWorksHero() {
  return (
    <Section>
      <div className="max-w-container mx-auto">
        <div className="mb-4">
          <h1 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
            <BlurText
              text="How Insta-Bar"
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
              Works
            </GradientText>
          </h1>
        </div>
        <p className="text-lg text-gray-400 sm:text-xl md:text-2xl">
          The verification system that eliminates shrinkage
        </p>
      </div>
    </Section>
  );
}
