'use client';

import { ArrowLeft, Home } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

import Footer from '@/components/sections/footer/default';
import DockNavbar from '@/components/sections/navbar/DockNavbar';
import ResponsiveGalaxy from '@/src/components/ReactBits/Backgrounds/ResponsiveGalaxy';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

export default function NotFound() {
  return (
    <main className="bg-background text-foreground relative min-h-screen w-full pt-24">
      <div className="fixed inset-0 z-0">
        <ResponsiveGalaxy
          hueShift={200}
          saturation={0.8}
          speed={0.3}
          starSpeed={0.3}
          glowIntensity={0.5}
          density={1.2}
          mouseInteraction={false}
          mouseRepulsion={false}
        />
      </div>
      <div className="relative z-10">
        <DockNavbar />

        <section className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="text-8xl font-black md:text-9xl">
                <GradientText
                  colors={['#3b82f6', '#8b5cf6', '#22d3ee', '#3b82f6']}
                  animationSpeed={4}
                >
                  404
                </GradientText>
              </span>
            </motion.div>

            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              <BlurText text="Page Not Found" delay={100} direction="top" className="text-white" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-lg text-gray-400"
            >
              The page you're looking for doesn't exist or has been moved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
              >
                <Home className="size-5" />
                Back to Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-medium text-white transition-colors hover:bg-white/5"
              >
                <ArrowLeft className="size-5" />
                Go Back
              </button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
