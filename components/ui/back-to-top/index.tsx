'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  threshold?: number;
  showProgress?: boolean;
}

export default function BackToTop({ 
  threshold = 400,
  showProgress = true 
}: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Show/hide based on threshold
      setIsVisible(scrollY > threshold);
      
      // Calculate scroll progress (0-100)
      if (showProgress && docHeight > 0) {
        setScrollProgress(Math.min((scrollY / docHeight) * 100, 100));
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold, showProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG circle parameters for progress ring
  const size = 52;
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            type: 'spring', 
            stiffness: 400, 
            damping: 25 
          }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Back to top"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Button container */}
          <div className="relative flex items-center justify-center w-[52px] h-[52px] rounded-full bg-black/80 border border-white/20 backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:border-blue-500/50 transition-all duration-300">
            
            {/* Progress ring SVG */}
            {showProgress && (
              <svg
                className="absolute inset-0 -rotate-90"
                width={size}
                height={size}
              >
                {/* Background circle */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth={strokeWidth}
                />
                {/* Progress circle */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-150 ease-out"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            )}
            
            {/* Arrow icon */}
            <ArrowUp 
              className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300 relative z-10" 
              strokeWidth={2.5}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
