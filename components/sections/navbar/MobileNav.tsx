'use client';

import { AnimatePresence, motion } from 'motion/react';
import { BookOpen, Cog, Home, Mail, Menu, Package, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Package, label: 'Product', href: '/product' },
  { icon: Cog, label: 'Workflow', href: '/how-it-works' },
  { icon: BookOpen, label: 'Resources', href: '/resources' },
  { icon: Mail, label: 'Contact', href: '/contact' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[60] flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/50 bg-gray-800/90 backdrop-blur-sm transition-all duration-200 md:hidden print:hidden"
        style={{ boxShadow: '0 0 25px rgba(59,130,246,0.3)' }}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="size-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="size-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-[56] h-full w-72 border-l border-blue-500/20 bg-gray-900/95 backdrop-blur-md md:hidden"
            >
              <div className="flex h-full flex-col pt-20 px-6">
                {/* Nav Items */}
                <ul className="flex flex-col gap-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition-all duration-200 ${
                            isActive
                              ? 'bg-blue-500/20 text-white'
                              : 'text-white/70 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                              isActive
                                ? 'border-blue-500/50 bg-blue-500/20'
                                : 'border-white/10 bg-white/5'
                            }`}
                          >
                            <Icon className="size-5" />
                          </div>
                          <span className="text-base font-medium">{item.label}</span>
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Bottom branding */}
                <div className="mt-auto pb-8">
                  <p className="text-center text-xs text-white/40">
                    © {new Date().getFullYear()} Insta-Bar
                  </p>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
