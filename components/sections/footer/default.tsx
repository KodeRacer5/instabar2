import { siteConfig } from '@/config/site';

import { Footer, FooterBottom, FooterColumn, FooterContent } from '../../ui/footer';
import { ModeToggle } from '../../ui/mode-toggle';

const columns = [
  {
    title: 'Product',
    links: [
      { text: 'Standard System', href: siteConfig.nav.product },
      { text: 'Professional Kit', href: siteConfig.nav.product },
      { text: 'Specifications', href: siteConfig.nav.product },
    ],
  },
  {
    title: 'Learn',
    links: [
      { text: 'How It Works', href: siteConfig.nav.howItWorks },
      { text: 'Resources', href: siteConfig.nav.resources },
      { text: 'FAQs', href: siteConfig.nav.resources },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'Contact', href: siteConfig.nav.contact },
      { text: 'Distributors', href: siteConfig.nav.contact },
    ],
  },
];

const policies = [
  { text: 'Privacy Policy', href: '/privacy' },
  { text: 'Terms of Use', href: '/terms' },
];

export default function FooterSection() {
  return (
    <footer className="bg-background w-full px-4">
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">
                  <span className="text-primary">Insta-Bar</span>
                  <span className="text-muted-foreground ml-0.5 text-xs">™</span>
                </h3>
              </div>
              <p className="text-muted-foreground mt-2 text-sm">
                Metal verification for full-arch implants.
              </p>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>© 2025 Insta-Bar. All rights reserved.</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a
                  key={index}
                  href={policy.href}
                  className="hover:text-foreground transition-colors"
                >
                  {policy.text}
                </a>
              ))}
              <ModeToggle />
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
