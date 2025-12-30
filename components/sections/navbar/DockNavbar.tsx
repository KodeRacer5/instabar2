'use client';

import { BookOpen, Cog, Home, Mail, Package } from 'lucide-react';
import { useRouter } from 'next/navigation';

import type { DockItemData } from '@/src/components/ReactBits/Navigation/Dock';
import Dock from '@/src/components/ReactBits/Navigation/Dock';
import MobileNav from './MobileNav';

export default function DockNavbar() {
  const router = useRouter();

  const navItems: DockItemData[] = [
    {
      icon: <Home className="size-6 text-white" />,
      label: 'Home',
      onClick: () => router.push('/'),
      gradient: 'linear-gradient(135deg, #3b82f6, #22d3ee)',
    },
    {
      icon: <Package className="size-6 text-white" />,
      label: 'Product',
      onClick: () => router.push('/product'),
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    },
    {
      icon: <Cog className="size-6 text-white" />,
      label: 'Workflow',
      onClick: () => router.push('/how-it-works'),
      gradient: 'linear-gradient(135deg, #22d3ee, #14b8a6)',
    },
    {
      icon: <BookOpen className="size-6 text-white" />,
      label: 'Resources',
      onClick: () => router.push('/resources'),
      gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    },
    {
      icon: <Mail className="size-6 text-white" />,
      label: 'Contact',
      onClick: () => router.push('/contact'),
      gradient: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
    },
  ];

  return (
    <>
      {/* Desktop Dock - hidden on mobile */}
      <header className="fixed top-0 right-0 left-0 z-50 hidden px-4 pt-4 md:block print:hidden">
        <Dock items={navItems} />
      </header>

      {/* Mobile Navigation */}
      <MobileNav />
    </>
  );
}
