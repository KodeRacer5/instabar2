'use client';

import { ChevronDown } from 'lucide-react';

import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

export default function ProductHero() {
  return (
    <section className="relative w-full">
      <div
        className="relative w-full"
        style={{
          height: '56.25vw',
          maxHeight: '100vh',
          minHeight: '600px',
        }}
      >
        <div className="relative flex h-full w-full items-center">
          {/* Layer 1: Product Image (right side, masked) */}
          <div
            className="absolute top-1/2 right-0 -translate-y-1/2"
            style={{
              width: '55%',
              height: '100%',
              backgroundImage: `url(/images/product/14-insta%20bar%20all-on-4%20workflow.png)`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.9,
              filter: 'brightness(0.6)',
              zIndex: 1,
              maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 70%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 70%)',
            }}
          />

          {/* Layer 2: Text Gradient Overlay */}
          <div
            className="absolute inset-0 h-full w-full"
            style={{
              background:
                'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 35%, transparent 60%)',
              zIndex: 3,
            }}
          />

          {/* Layer 4: Content */}
          <div className="relative flex h-full w-full items-start pt-32" style={{ zIndex: 10 }}>
            <div className="w-full pr-6 pl-6 sm:pr-8 sm:pl-8 md:w-[60%] md:pr-0 md:pl-48 lg:w-[55%] lg:pl-[15rem] xl:pl-72">
              <div className="mb-4 sm:mb-5 md:mb-6">
                <h1 className="text-2xl leading-[1.1] font-black sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                  <BlurText
                    text="Insta-Bar Implant"
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
                    Verification System
                  </GradientText>
                </h1>
              </div>

              <div className="mb-6 lg:mb-8">
                <h2 className="text-base leading-[1.3] font-medium text-gray-300 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  <BlurText
                    text="Prefabricated stainless steel links for full-arch implant position verification. Zero shrinkage. Absolute precision."
                    delay={50}
                    direction="bottom"
                    animateBy="words"
                    className="inline-block"
                  />
                </h2>
              </div>
            </div>

            {/* Right side spacer */}
            <div className="hidden h-full md:block md:w-[40%] lg:w-[45%]" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce">
        <ChevronDown className="text-gray-600" size={20} />
      </div>
    </section>
  );
}
