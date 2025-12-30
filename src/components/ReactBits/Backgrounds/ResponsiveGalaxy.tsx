'use client';

import { useEffect, useState } from 'react';
import Galaxy from './Galaxy';

interface ResponsiveGalaxyProps {
  focal?: [number, number];
  rotation?: [number, number];
  starSpeed?: number;
  density?: number;
  hueShift?: number;
  disableAnimation?: boolean;
  speed?: number;
  mouseInteraction?: boolean;
  glowIntensity?: number;
  saturation?: number;
  mouseRepulsion?: boolean;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  repulsionStrength?: number;
  autoCenterRepulsion?: number;
  transparent?: boolean;
}

export default function ResponsiveGalaxy(props: ResponsiveGalaxyProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // SSR fallback
  if (!isClient) {
    return <StaticGradient hueShift={props.hueShift ?? 200} />;
  }

  // Mobile: static gradient (no WebGL)
  if (isMobile) {
    return <StaticGradient hueShift={props.hueShift ?? 200} />;
  }

  // Desktop: full Galaxy WebGL
  return <Galaxy {...props} />;
}

// Lightweight static gradient fallback
function StaticGradient({ hueShift }: { hueShift: number }) {
  // Map hueShift to gradient colors
  const getGradientColors = (hue: number) => {
    if (hue >= 180 && hue <= 220) {
      // Blue/Cyan range (default)
      return {
        bg: 'radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),radial-gradient(ellipse at 70% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),radial-gradient(ellipse at 50% 80%, rgba(34, 211, 238, 0.08) 0%, transparent 40%)',
        stars: 'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.4), transparent),radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.3), transparent),radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.5), transparent),radial-gradient(1px 1px at 60% 50%, rgba(255,255,255,0.2), transparent),radial-gradient(1px 1px at 10% 60%, rgba(255,255,255,0.35), transparent),radial-gradient(1px 1px at 90% 80%, rgba(255,255,255,0.25), transparent)',
      };
    }
    if (hue >= 0 && hue <= 30) {
      // Red/Orange range (error page)
      return {
        bg: 'radial-gradient(ellipse at 30% 20%, rgba(239, 68, 68, 0.15) 0%, transparent 50%),radial-gradient(ellipse at 70% 60%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)',
        stars: 'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.4), transparent),radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.5), transparent),radial-gradient(1px 1px at 60% 50%, rgba(255,255,255,0.2), transparent)',
      };
    }
    // Default blue
    return {
      bg: 'radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
      stars: 'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.4), transparent)',
    };
  };

  const colors = getGradientColors(hueShift);

  return (
    <div className="relative h-full w-full bg-black/95">
      {/* Gradient glow layers */}
      <div
        className="absolute inset-0"
        style={{ background: colors.bg }}
      />
      {/* Static stars */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: colors.stars,
          backgroundSize: '200px 200px',
        }}
      />
      {/* Subtle animated shimmer */}
      <div
        className="absolute inset-0 animate-pulse opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          animationDuration: '4s',
        }}
      />
    </div>
  );
}
