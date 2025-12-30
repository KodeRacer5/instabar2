'use client';

import {
  AlertTriangle,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  FileText,
  Lightbulb,
  Microscope,
  Monitor,
  Printer,
  Scale,
  Wrench,
  XCircle,
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Script from 'next/script';

import Footer from '@/components/sections/footer/default';
import DockNavbar from '@/components/sections/navbar/DockNavbar';
import GuideCard from '@/components/sections/resources/guide-card';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { getGuideContent } from '@/lib/guide-content';
import { categories, type CategoryKey, getRelatedGuides } from '@/lib/guides-data';
import Galaxy from '@/src/components/ReactBits/Backgrounds/Galaxy';
import BlurText from '@/src/components/ReactBits/TextAnimations/BlurText';
import GradientText from '@/src/components/ReactBits/TextAnimations/GradientText';

interface GuideTemplateProps {
  slug: string;
  title: string;
  description: string;
  category: CategoryKey;
}

const categoryIcons: Record<CategoryKey, React.ReactNode> = {
  clinical: <Microscope className="size-5 text-white" />,
  'all-on-x': <CircleDot className="size-5 text-white" />,
  digital: <Monitor className="size-5 text-white" />,
  lab: <Wrench className="size-5 text-white" />,
  troubleshooting: <AlertTriangle className="size-5 text-white" />,
  compare: <Scale className="size-5 text-white" />,
  docs: <FileText className="size-5 text-white" />,
};

const spotlightColors: Record<CategoryKey, string> = {
  clinical: 'rgba(59, 130, 246, 0.25)',
  'all-on-x': 'rgba(139, 92, 246, 0.25)',
  digital: 'rgba(34, 211, 238, 0.25)',
  lab: 'rgba(59, 130, 246, 0.25)',
  troubleshooting: 'rgba(239, 68, 68, 0.25)',
  compare: 'rgba(139, 92, 246, 0.25)',
  docs: 'rgba(107, 114, 128, 0.25)',
};

export default function GuideTemplate({ slug, title, description, category }: GuideTemplateProps) {
  const categoryInfo = categories[category];
  const relatedGuides = getRelatedGuides(slug, 3);
  const content = getGuideContent(slug);
  const lastUpdated = '2024-12-29'; // Can be made dynamic per guide

  const handlePrint = () => {
    window.print();
  };

  // Generate HowTo Schema for SEO (E-E-A-T)
  const howToSchema = content?.steps
    ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: title,
        description: description,
        step: content.steps.map((step, idx) => ({
          '@type': 'HowToStep',
          position: idx + 1,
          name: step.title,
          text: step.content,
        })),
        tool: content.whatYouNeed?.map((item) => ({
          '@type': 'HowToTool',
          name: item,
        })),
      }
    : null;

  // Generate BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Resources',
        item: 'https://insta-bar.com/resources',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: categoryInfo.title,
        item: `https://insta-bar.com/resources`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
      },
    ],
  };

  // Generate MedicalWebPage Schema for E-E-A-T
  const medicalPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: title,
    description: description,
    lastReviewed: lastUpdated,
    reviewedBy: {
      '@type': 'Organization',
      name: 'Insta-Bar',
      url: 'https://insta-bar.com',
    },
    specialty: {
      '@type': 'MedicalSpecialty',
      name: 'Dentistry',
    },
  };

  return (
    <>
      {/* SEO Schema Markup */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="medical-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalPageSchema) }}
      />
      {howToSchema && (
        <Script
          id="howto-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      <main className="bg-background text-foreground relative min-h-screen w-full pt-24 print:bg-white print:pt-0">
        {/* Print Header - Only visible when printing */}
        <div className="hidden print:block print:mb-6 print:border-b print:border-gray-300 print:pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-600">Insta-Bar</span>
              <span className="text-xs text-gray-500">™</span>
            </div>
            <span className="text-sm text-gray-500">insta-bar.com</span>
          </div>
        </div>

        <div className="fixed inset-0 z-0 print:hidden">
          <Galaxy
            hueShift={200}
            saturation={0.8}
            speed={0.3}
            starSpeed={0.3}
            glowIntensity={0.5}
            density={1.2}
            mouseInteraction={false}
            mouseRepulsion={false}
          />
        </div>
        <div className="relative z-10">
          <DockNavbar />

          <Section className="py-8 md:py-12">
            <div className="mx-auto max-w-3xl">
              {/* Breadcrumb */}
              <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400 print:text-black">
                <Link
                  href="/resources"
                  className="transition-colors hover:text-white print:text-black"
                >
                  Resources
                </Link>
                <ChevronRight className="size-4" />
                <Link
                  href="/resources"
                  className="transition-colors hover:text-white print:text-black"
                >
                  {categoryInfo.title}
                </Link>
                <ChevronRight className="size-4" />
                <span className="text-white print:text-black">{title}</span>
              </nav>

              {/* Header - Hero Style */}
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h1 className="mb-6 text-4xl leading-[1.1] font-black sm:text-5xl md:text-6xl lg:text-7xl print:text-black">
                  {title.toLowerCase().startsWith('how to') ? (
                    <>
                      <BlurText
                        text="How to"
                        delay={80}
                        direction="top"
                        className="text-cyan-400 print:!opacity-100 print:!filter-none"
                      />
                      <BlurText
                        text={title.slice(7)}
                        delay={80}
                        direction="top"
                        className="print:!opacity-100 print:!filter-none"
                      />
                    </>
                  ) : (
                    <BlurText
                      text={title}
                      delay={80}
                      direction="top"
                      className="print:!opacity-100 print:!filter-none"
                    />
                  )}
                </h1>
                <div className="mb-2 text-xl leading-[1.3] font-medium sm:text-2xl md:text-3xl print:text-gray-600">
                  <GradientText
                    colors={['#3b82f6', '#8b5cf6', '#22d3ee', '#3b82f6']}
                    animationSpeed={6}
                    className="inline print:!bg-none print:!text-gray-600"
                  >
                    {description}
                  </GradientText>
                </div>

                {/* Last Updated - E-E-A-T Signal */}
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 print:text-gray-600">
                  <Calendar className="size-4" />
                  <span>
                    Last reviewed:{' '}
                    {new Date(lastUpdated).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                {/* Back & Print Buttons */}
                <div className="mt-6 flex gap-3 print:hidden">
                  <Link href="/resources">
                    <Button
                      variant="outline"
                      className="border-gray-500/50 bg-white/10 text-white hover:border-gray-400/70 hover:bg-white/15"
                    >
                      <ArrowLeft className="mr-2 size-4" />
                      Back
                    </Button>
                  </Link>
                  <Button
                    onClick={handlePrint}
                    variant="outline"
                    className="border-blue-500/50 bg-white/10 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:border-blue-500/70 hover:bg-white/15 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                  >
                    <Printer className="mr-2 size-4" />
                    Print Guide
                  </Button>
                </div>
              </motion.header>

              {/* Content Sections - Wrapped in article for SEO */}
              <article className="space-y-12">
                {/* Overview */}
                <ContentSection title="Overview" delay={0.1}>
                  <p className="leading-relaxed text-gray-300 print:text-gray-700">
                    {content?.overview || 'Content coming soon.'}
                  </p>
                </ContentSection>

                {/* What You'll Need */}
                {content?.whatYouNeed && content.whatYouNeed.length > 0 && (
                  <ContentSection title="What You'll Need" delay={0.2}>
                    <ul className="space-y-2">
                      {content.whatYouNeed.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300 print:text-gray-700"
                        >
                          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-blue-400 print:text-blue-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </ContentSection>
                )}

                {/* Step-by-Step */}
                {content?.steps && content.steps.length > 0 && (
                  <ContentSection title="Step-by-Step" delay={0.3}>
                    <div className="space-y-6">
                      {content.steps.map((step, idx) => (
                        <div key={idx} className="relative pl-8">
                          <div className="absolute top-0 left-0 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-bold text-white print:bg-blue-600">
                            {idx + 1}
                          </div>
                          <h3 className="mb-2 font-semibold text-white print:text-black">
                            {step.title}
                          </h3>
                          <p className="leading-relaxed text-gray-300 print:text-gray-700">
                            {step.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ContentSection>
                )}

                {/* Tips & Best Practices */}
                {content?.tips && content.tips.length > 0 && (
                  <ContentSection title="Tips & Best Practices" delay={0.4}>
                    <ul className="space-y-3">
                      {content.tips.map((tip, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300 print:text-gray-700"
                        >
                          <Lightbulb className="mt-0.5 size-5 shrink-0 text-yellow-400 print:text-yellow-600" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </ContentSection>
                )}

                {/* Common Mistakes to Avoid */}
                {content?.mistakes && content.mistakes.length > 0 && (
                  <ContentSection title="Common Mistakes to Avoid" delay={0.5}>
                    <div className="space-y-4">
                      {content.mistakes.map((mistake, idx) => (
                        <div
                          key={idx}
                          className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 print:border-red-300 print:bg-red-50"
                        >
                          <div className="flex items-start gap-3">
                            <XCircle className="mt-0.5 size-5 shrink-0 text-red-400 print:text-red-600" />
                            <div>
                              <h4 className="mb-1 font-semibold text-white print:text-black">
                                {mistake.title}
                              </h4>
                              <p className="text-sm text-gray-300 print:text-gray-700">
                                {mistake.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ContentSection>
                )}

                {/* How Insta-Bar Helps */}
                {content?.instaBarHelps && (
                  <ContentSection title="How Insta-Bar Helps" delay={0.6}>
                    <div className="rounded-lg border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 print:border-blue-300 print:bg-blue-50">
                      <p className="leading-relaxed text-gray-300 print:text-gray-700">
                        {content.instaBarHelps}
                      </p>
                    </div>
                  </ContentSection>
                )}

                {/* Placeholder for guides without content */}
                {!content && (
                  <>
                    <ContentSection title="Overview" delay={0.1}>
                      <p className="text-gray-400 italic">
                        Content for this guide is being developed. Check back soon for detailed
                        information.
                      </p>
                    </ContentSection>
                  </>
                )}
              </article>
            </div>
          </Section>

          {/* Related Guides */}
          <Section className="py-12 print:hidden">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold text-white">Related Guides</h2>
              <div className="grid gap-3">
                {relatedGuides.map((guide, index) => (
                  <GuideCard
                    key={guide.slug}
                    icon={categoryIcons[guide.category]}
                    title={guide.title}
                    description={guide.description}
                    href={guide.href}
                    spotlightColor={spotlightColors[guide.category]}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </Section>

          {/* Bottom CTA */}
          <Section className="py-16 print:hidden">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                Ready to eliminate verification problems?
              </h2>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Link href="/product">See the Product</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </Section>

          <Footer />

          {/* Print Footer - Only visible when printing */}
          <div className="hidden print:block print:mt-8 print:border-t print:border-gray-300 print:pt-4">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>© 2025 Insta-Bar. All rights reserved.</span>
              <span>insta-bar.com</span>
            </div>
            <p className="mt-2 text-xs text-gray-400">
              This document is for informational purposes only. Always follow manufacturer guidelines and clinical best practices.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

function ContentSection({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="print:!transform-none print:!opacity-100"
    >
      <h2 className="mb-4 border-l-4 border-blue-500 pl-4 text-xl font-bold text-white print:border-blue-600 print:text-black">
        {title}
      </h2>
      <div className="pl-6">{children}</div>
    </motion.section>
  );
}
