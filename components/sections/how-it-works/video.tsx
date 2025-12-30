'use client';

import { Play } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

import { Section } from '@/components/ui/section';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';

interface VideoSectionProps {
  youtubeId?: string;
}

export default function VideoSection({ youtubeId = 'gW5-lTEs23A' }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4">
        {/* Outer Flex Container - 40/60 split, percentage-based */}
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-[4%]">
          {/* TEXT FLEX - 40% width, scales with container */}
          <div className="flex w-full min-w-0 flex-col justify-center lg:flex-[0_0_40%]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
                DEMONSTRATION
              </span>
            </motion.div>

            {/* Main Title - fluid sizing with clamp, no wrap */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 leading-[1.1] font-black"
              style={{ fontSize: 'clamp(1.5rem, 2vw + 0.5rem, 2.5rem)' }}
            >
              <span className="text-white">How Insta-Bar </span>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Works
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-lg leading-relaxed text-gray-400 sm:text-xl"
            >
              The verification system that eliminates shrinkage
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-8 h-1 w-16 origin-left rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            />

            {/* Secondary Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-3xl"
            >
              See It In{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Action
              </span>
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="leading-relaxed text-gray-500"
            >
              Watch how Insta-Bar delivers rigid metal verification in minutes. No resin shrinkage.
              No chairside luting. Just accurate, repeatable results.
            </motion.p>
          </div>

          {/* VIDEO FLEX - 60% width, scales with container */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex w-full flex-col justify-center lg:flex-[0_0_56%]"
          >
            {/* Hero label above video */}
            <div className="mb-6">
              <h1 className="text-3xl leading-tight font-black sm:text-4xl lg:text-5xl xl:text-6xl">
                <BlurText
                  text="▶ Watch the"
                  delay={100}
                  direction="top"
                  className="inline text-white"
                />
                <span className="inline"> </span>
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Demo
                </span>
              </h1>
            </div>

            {/* Glowing Frame Wrapper */}
            <div className="group relative">
              {/* Animated glow border */}
              <div
                className="absolute -inset-[2px] rounded-2xl opacity-75 blur-sm transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #22d3ee, #8b5cf6, #3b82f6)',
                  backgroundSize: '300% 100%',
                  animation: 'gradient-shift 4s ease infinite',
                }}
              />

              {/* Outer glow pulse */}
              <div
                className="absolute -inset-[6px] rounded-2xl opacity-40 blur-xl"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #22d3ee, #8b5cf6, #3b82f6)',
                  backgroundSize: '300% 100%',
                  animation: 'gradient-shift 4s ease infinite, glow-pulse 2s ease-in-out infinite',
                }}
              />

              {/* Video Container */}
              <div className="relative w-full overflow-hidden rounded-2xl bg-gray-900">
                {/* Aspect ratio container */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  {!isPlaying ? (
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="group/play absolute inset-0 h-full w-full cursor-pointer"
                      aria-label="Play video"
                    >
                      {/* Custom Thumbnail */}
                      <img
                        src="/images/product/instabarbackground.jpg"
                        alt="Insta-Bar verification system"
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover/play:bg-black/30" />

                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-white sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                          style={{
                            boxShadow:
                              '0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(139, 92, 246, 0.3)',
                          }}
                        >
                          <Play
                            className="ml-1 h-6 w-6 text-gray-900 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                            fill="currentColor"
                          />
                        </div>
                      </div>

                      {/* Watch label */}
                      <div className="absolute bottom-4 left-4">
                        <span className="rounded-lg border border-white/10 bg-black/50 px-3 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
                          Watch Demo
                        </span>
                      </div>
                    </button>
                  ) : (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      title="Insta-Bar Clinical Demonstration"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </Section>
  );
}
