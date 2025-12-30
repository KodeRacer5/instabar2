'use client';

import { ChevronDown, Play } from 'lucide-react';

import { siteConfig } from '@/config/site';
import ClickSpark from '@/src/components/ReactBits/Animations/ClickSpark';
import Magnet from '@/src/components/ReactBits/Animations/Magnet';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

import { Button } from '../../ui/button';

export default function Hero() {
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
          {/* Layer 1: Product Image (right side) */}
          <div
            className="absolute top-1/2 right-0 -translate-y-1/2"
            style={{
              width: '55%',
              height: '100%',
              backgroundImage: `url(/images/product/instabarbackground.png)`,
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
                <h1 className="text-3xl leading-[1.1] font-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
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
                <h2 className="text-lg leading-[1.3] font-medium text-gray-300 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  <BlurText
                    text="No flex. No shrinkage. No guesswork."
                    delay={75}
                    direction="bottom"
                    animateBy="words"
                    className="inline-block"
                  />
                </h2>
              </div>

              <div className="flex flex-col items-start gap-6 sm:flex-row">
                <div className="inline-block">
                  <ClickSpark sparkColor="#3b82f6" sparkRadius={35} sparkCount={12}>
                    <Magnet padding={25} magnetStrength={1.2}>
                      <Button
                        className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-5 text-xl font-semibold text-white shadow-2xl shadow-blue-600/20 hover:from-blue-500 hover:to-purple-500"
                        asChild
                      >
                        <a href={siteConfig.nav.product}>Learn More</a>
                      </Button>
                    </Magnet>
                  </ClickSpark>
                </div>

                <div className="inline-block">
                  <Button
                    variant="outline"
                    className="border-blue-500/50 bg-white/10 px-10 py-5 text-xl font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:border-blue-500/70 hover:bg-white/15 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                    asChild
                  >
                    <a href={siteConfig.nav.howItWorks}>
                      <Play className="mr-2 size-5" />
                      Watch Video
                    </a>
                  </Button>
                </div>
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
