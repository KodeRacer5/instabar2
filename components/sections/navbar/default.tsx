import { Menu } from 'lucide-react';
import Link from 'next/link';

import { siteConfig } from '@/config/site';

import { Button } from '../../ui/button';
import { Navbar as NavbarComponent, NavbarLeft, NavbarRight } from '../../ui/navbar';
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet';

const navLinks = [
  { text: 'Product', href: siteConfig.nav.product },
  { text: 'How It Works', href: siteConfig.nav.howItWorks },
  { text: 'Resources', href: siteConfig.nav.resources },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <span className="text-primary">Insta-Bar</span>
              <span className="text-muted-foreground text-xs">™</span>
            </Link>
            <nav className="hidden md:ml-8 md:flex md:gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </NavbarLeft>
          <NavbarRight>
            <Button variant="default" asChild>
              <a href={siteConfig.nav.contact}>Contact</a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <span>Insta-Bar™</span>
                  </Link>
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.text}
                    </a>
                  ))}
                  <a
                    href={siteConfig.nav.contact}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
