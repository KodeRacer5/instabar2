import '@/app/globals.css';

import type { Metadata } from 'next';
import Script from 'next/script';

import { ThemeProvider } from '@/components/contexts/theme-provider';
import BackToTop from '@/components/ui/back-to-top';
import { dmSans, inter, spaceGrotesk, syne } from '@/lib/fonts';

import { siteConfig } from '../config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.meta.home.title,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'implant verification jig',
    'full arch verification',
    'passive fit verification',
    'All-on-4 verification jig',
    'All-on-6 verification',
    'All-on-X verification system',
    'metal verification jig',
    'implant indexing device',
    'inter-implant relationship',
    'Sheffield test',
  ],
  authors: [
    {
      name: 'Insta-Bar',
      url: siteConfig.url,
    },
  ],
  creator: 'Insta-Bar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.meta.home.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.meta.home.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
};

// SiteNavigationElement schema for Google sitelinks
const siteNavSchema = {
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: 'Main Navigation',
  hasPart: [
    {
      '@type': 'SiteNavigationElement',
      name: 'Home',
      url: 'https://insta-bar.com/',
    },
    {
      '@type': 'SiteNavigationElement',
      name: 'Product',
      url: 'https://insta-bar.com/product',
    },
    {
      '@type': 'SiteNavigationElement',
      name: 'How It Works',
      url: 'https://insta-bar.com/how-it-works',
    },
    {
      '@type': 'SiteNavigationElement',
      name: 'Resources',
      url: 'https://insta-bar.com/resources',
    },
    {
      '@type': 'SiteNavigationElement',
      name: 'Contact',
      url: 'https://insta-bar.com/contact',
    },
  ],
};

// Organization schema
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Insta-Bar',
  url: 'https://insta-bar.com',
  logo: 'https://insta-bar.com/images/logo.png',
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Diego',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'dark', backgroundColor: '#000000' }} className="dark">
      <head>
        <style dangerouslySetInnerHTML={{ __html: 'html,body{background:#000!important}' }} />
      </head>
      <body
        className={`${inter.variable} ${syne.variable} ${dmSans.variable} ${spaceGrotesk.variable} bg-black antialiased`}
        style={{ backgroundColor: '#000000' }}
      >
        <ThemeProvider>
          {children}
          <BackToTop threshold={400} showProgress={true} />
        </ThemeProvider>
      </body>
    </html>
  );
}
