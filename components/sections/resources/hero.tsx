'use client';

import { Section } from '@/components/ui/section';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

export default function ResourcesHero() {
  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-container mx-auto text-center">
        <div className="mb-4">
          <h1 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl">
            <GradientText
              colors={['#3b82f6', '#8b5cf6', '#22d3ee', '#3b82f6']}
              animationSpeed={6}
              className="inline"
            >
              Resources
            </GradientText>
          </h1>
        </div>
        <div className="text-muted-foreground mx-auto max-w-2xl text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          <BlurText
            text="Downloads, FAQs, and clinical guidance for Insta-Bar verification"
            delay={30}
            direction="bottom"
            animateBy="words"
            className="inline-block"
          />
        </div>
      </div>
    </Section>
  );
}
