'use client';

import React, { useEffect } from 'react';

interface LightBeamBackgroundProps {
  projectId?: string;
  height?: string;
  className?: string;
}

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

const LightBeamBackground: React.FC<LightBeamBackgroundProps> = ({
  projectId = '5lHoGfe3FLqHAGyFDn3C',
  height = '900px',
  className = '',
}) => {
  useEffect(() => {
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };

      const script = document.createElement('script');
      script.src =
        'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
      script.onload = function () {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };

      (document.head || document.body).appendChild(script);
    } else if (window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init();
    }

    return () => {};
  }, [projectId]);

  return (
    <div
      className={`absolute inset-0 w-full ${className}`}
      style={{
        zIndex: 5,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }}
    >
      <div
        data-us-project={projectId}
        style={{
          width: '100%',
          height: height,
          pointerEvents: 'auto',
          background: 'transparent',
        }}
      />
    </div>
  );
};

export default LightBeamBackground;
