// ============================================================
// TITAN SURGICAL CONTENT REGISTRY
// ============================================================
// Central export for all content data
// ============================================================

export * from './types';
export * from './surgical-guides';

// Import all content arrays
import { surgicalGuides, getPublishedSurgicalGuides } from './surgical-guides';

// ============================================================
// UNIFIED CONTENT ACCESS
// ============================================================

export function getAllPublishedContent() {
  return {
    surgicalGuides: getPublishedSurgicalGuides(),
    // Add other content types as they are created:
    // fullArch: getPublishedFullArch(),
    // designSoftware: getPublishedDesignSoftware(),
    // etc.
  };
}

export function getAllPublishedRoutes() {
  const routes: Array<{ url: string; section: string }> = [];
  
  // Surgical guides
  getPublishedSurgicalGuides().forEach(guide => {
    routes.push({
      url: `/surgical-guides/${guide.slug}`,
      section: 'surgical-guides'
    });
  });
  
  // Add other sections as they are created
  
  return routes;
}

// For sitemap generation
export function getSitemapEntries() {
  return getAllPublishedRoutes().map(route => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));
}
