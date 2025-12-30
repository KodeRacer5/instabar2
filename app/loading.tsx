'use client';

import { motion } from 'motion/react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="size-12 rounded-full border-4 border-blue-500/30 border-t-blue-500"
        />
        <span className="text-sm text-gray-400">Loading...</span>
      </motion.div>
    </div>
  );
}
