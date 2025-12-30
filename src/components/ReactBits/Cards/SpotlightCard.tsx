'use client';

import React, { useRef } from 'react';

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = '' }) => {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={divRef}
      className={`relative overflow-hidden rounded-2xl border border-white/10 p-8 transition-colors duration-500 hover:border-blue-500/50 ${className}`}
      style={{
        background: 'rgba(17, 24, 39, 0.5)',
        boxShadow:
          'inset 0 0 30px rgba(79, 70, 229, 0.1), inset 0 0 60px rgba(59, 130, 246, 0.05), 0 0 40px rgba(139, 92, 246, 0.15)',
      }}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
