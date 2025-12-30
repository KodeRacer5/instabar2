'use client';

import { RefreshCw, Home } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useEffect } from 'react';

import Footer from '@/components/sections/footer/default';
import DockNavbar from '@/components/sections/navbar/DockNavbar';
import Galaxy from '@/src/components/ReactBits/Backgrounds/Galaxy';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="bg-background text-foreground relative min-h-screen w-full pt-24">
      <div className="fixed inset-0 z-0">
        <Galaxy
          hueShift={0}
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
                  colors={['#ef4444', '#f97316', '#eab308', '#ef4444']}
                  animationSpeed={4}
                >
                  500
                </GradientText>
              </span>
            </motion.div>

            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              <BlurText text="Something Went Wrong" delay={100} direction="top" className="text-white" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-lg text-gray-400"
            >
              An unexpected error occurred. Please try again.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <button
                onClick={() => reset()}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
              >
                <RefreshCw className="size-5" />
                Try Again
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-medium text-white transition-colors hover:bg-white/5"
              >
                <Home className="size-5" />
                Back to Home
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
