'use client';

import { BookOpen, Cog, Home, Mail, Package } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

import type { DockItemData } from '@/src/components/ReactBits/Navigation/Dock';
import Dock from '@/src/components/ReactBits/Navigation/Dock';

export default function DockNavbar() {
  const router = useRouter();
  const pathname = usePathname();

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

  const mobileNavItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Package, label: 'Product', href: '/product' },
    { icon: Cog, label: 'Workflow', href: '/how-it-works' },
    { icon: BookOpen, label: 'Resources', href: '/resources' },
    { icon: Mail, label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Desktop Dock - hidden on mobile */}
      <header className="fixed top-0 right-0 left-0 z-50 hidden px-4 pt-4 md:block print:hidden">
        <Dock items={navItems} />
      </header>

      {/* Mobile Mini Dock - visible only on mobile */}
      <header className="fixed top-0 right-0 left-0 z-50 flex justify-center px-2 pt-3 md:hidden print:hidden">
        <nav className="flex items-start gap-3">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <button
                key={item.href}
                onClick={() => router.push(item.href)}
                className="flex flex-col items-center gap-1"
                aria-label={item.label}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border bg-gray-800/90 backdrop-blur-sm transition-all duration-200 ${
                    isActive ? 'border-blue-500/70' : 'border-blue-500/50'
                  }`}
                  style={{
                    boxShadow: isActive
                      ? '0 0 30px rgba(59,130,246,0.4)'
                      : '0 0 20px rgba(59,130,246,0.25)',
                  }}
                >
                  <Icon className={`size-4 ${isActive ? 'text-white' : 'text-white/80'}`} />
                </div>
                <span className="text-[10px] font-medium text-white/70">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </header>
    </>
  );
}
