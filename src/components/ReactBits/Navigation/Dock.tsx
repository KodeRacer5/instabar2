'use client';

import {
  motion,
  MotionValue,
  type SpringOptions,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';
import React, { useRef, useState } from 'react';

export type DockItemData = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
  gradient?: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  distance?: number;
  baseItemSize?: number;
  magnification?: number;
  spring?: SpringOptions;
};

type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  label: string;
  onClick?: () => void;
  gradient: string;
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  distance: number;
  baseItemSize: number;
  magnification: number;
};

function DockItem({
  children,
  className = '',
  label,
  onClick,
  gradient,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseItemSize };
    return val - rect.x - baseItemSize / 2;
  });

  const targetScale = useTransform(mouseDistance, [-distance, 0, distance], [1, magnification, 1]);
  const scale = useSpring(targetScale, spring);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex cursor-pointer flex-col items-center gap-2 ${className}`}
      tabIndex={0}
      role="button"
    >
      {/* Square icon container */}
      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/50 bg-gray-800/90 backdrop-blur-sm transition-all duration-200"
        style={{
          boxShadow: isHovered ? `0 0 40px rgba(59,130,246,0.4)` : `0 0 25px rgba(59,130,246,0.3)`,
        }}
      >
        {children}
      </div>

      {/* Label below */}
      <span className="max-w-16 truncate text-center text-xs font-medium text-white/80">
        {label}
      </span>
    </motion.div>
  );
}

type DockIconProps = {
  className?: string;
  children: React.ReactNode;
};

function DockIcon({ children, className = '' }: DockIconProps) {
  return <div className={`flex items-center justify-center ${className}`}>{children}</div>;
}

const defaultGradients = [
  'linear-gradient(135deg, #3b82f6, #22d3ee)',
  'linear-gradient(135deg, #8b5cf6, #ec4899)',
  'linear-gradient(135deg, #22d3ee, #14b8a6)',
  'linear-gradient(135deg, #3b82f6, #8b5cf6)',
  'linear-gradient(135deg, #8b5cf6, #3b82f6)',
];

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 1.6,
  distance = 100,
  baseItemSize = 48,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="flex w-full justify-end">
      <div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={`${className} flex items-start justify-end gap-8`}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            label={item.label}
            gradient={item.gradient || defaultGradients[index % defaultGradients.length]}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </div>
    </div>
  );
}
