'use client';

import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

import SpotlightCard from '@/src/components/ReactBits/Cards/SpotlightCard';

interface GuideCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  spotlightColor?: string;
  index?: number;
}

export default function GuideCard({
  icon,
  title,
  description,
  href,
  spotlightColor = 'rgba(59, 130, 246, 0.25)',
  index = 0,
}: GuideCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={href}>
        <SpotlightCard className="group cursor-pointer !p-4" spotlightColor={spotlightColor}>
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className="shrink-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-2">
                {icon}
              </div>
              <div className="min-w-0">
                <p className="truncate font-medium text-white">{title}</p>
                <p className="truncate text-sm text-gray-400">{description}</p>
              </div>
            </div>
            <ChevronRight className="size-5 shrink-0 text-gray-400 transition-colors group-hover:text-blue-400" />
          </div>
        </SpotlightCard>
      </Link>
    </motion.div>
  );
}
