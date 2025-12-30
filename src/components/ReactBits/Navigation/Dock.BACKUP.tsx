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
  panelHeight?: number;
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

  const targetScale = useTransform(mouseDistance, [-distance, 0, distance], [1, 1.1, 1]);
  const scale = useSpring(targetScale, spring);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative cursor-pointer ${className}`}
      tabIndex={0}
      role="button"
    >
      {/* Gradient border wrapper */}
      <div className="rounded-full p-[2px]" style={{ background: gradient }}>
        {/* Glass inner */}
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">
          {children}
          <span className="text-sm font-medium text-white">{label}</span>
        </div>
      </div>

      {/* Glow effect */}
      <div
        className="absolute inset-0 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-300"
        style={{
          background: gradient,
          opacity: isHovered ? 0.6 : 0,
        }}
      />
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
  'linear-gradient(135deg, #3b82f6, #06b6d4)', // Blue → Cyan (Home)
  'linear-gradient(135deg, #8b5cf6, #ec4899)', // Purple → Pink (Product)
  'linear-gradient(135deg, #06b6d4, #14b8a6)', // Cyan → Teal (How It Works)
  'linear-gradient(135deg, #f59e0b, #eab308)', // Orange → Yellow (Resources)
  'linear-gradient(135deg, #ec4899, #8b5cf6)', // Pink → Purple (Contact)
];

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 1.1,
  distance = 150,
  panelHeight = 70,
  baseItemSize = 50,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="flex w-full justify-center">
      <motion.div
        onMouseMove={({ pageX }) => mouseX.set(pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={`${className} flex w-3/4 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl`}
        style={{ height: panelHeight }}
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
      </motion.div>
    </div>
  );
}
