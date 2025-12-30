'use client';

import { ChevronDown } from 'lucide-react';

import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

export default function ProductHero() {
  const scrollToContent = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full">
      {/* Desktop Layout */}
      <div
        className="relative hidden w-full md:block"
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
            <div className="w-[60%] pr-0 pl-48 lg:w-[55%] lg:pl-[15rem] xl:pl-72">
              <div className="mb-6">
                <h1 className="text-4xl leading-[1.1] font-black lg:text-5xl xl:text-6xl 2xl:text-7xl">
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

              <div className="mb-8">
                <h2 className="text-xl leading-[1.3] font-medium text-gray-300 lg:text-2xl xl:text-3xl">
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
            <div className="h-full w-[40%] lg:w-[45%]" />
          </div>
        </div>

        {/* Scroll Indicator - Desktop */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce cursor-pointer"
          aria-label="Scroll to content"
        >
          <ChevronDown className="text-gray-600 hover:text-gray-400 transition-colors" size={20} />
        </button>
      </div>

      {/* Mobile Layout */}
      <div className="relative flex flex-col md:hidden">
        {/* Mobile Product Image */}
        <div className="relative h-[35vh] w-full">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(/images/product/14-insta%20bar%20all-on-4%20workflow.png)`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.7,
              filter: 'brightness(0.7)',
              maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)',
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-32"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
            }}
          />
        </div>

        {/* Mobile Content */}
        <div className="relative z-10 -mt-16 px-6 pb-8">
          <div className="mb-4">
            <h1 className="text-2xl leading-[1.1] font-black sm:text-3xl">
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

          <div className="mb-6">
            <h2 className="text-base leading-[1.4] font-medium text-gray-300 sm:text-lg">
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
      </div>
    </section>
  );
}
