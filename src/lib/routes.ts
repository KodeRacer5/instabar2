import { lazy } from 'react';

// Lazy-loaded page components
const StandardSystem = lazy(() => import('../pages/products/StandardSystem'));
const DigitalBundle = lazy(() => import('../pages/products/DigitalBundle'));
const ProfessionalKit = lazy(() => import('../pages/products/ProfessionalKit'));
const CoreTechnology = lazy(() => import('../pages/technology/CoreTechnology'));
const DigitalIntegration = lazy(() => import('../pages/technology/DigitalIntegration'));
const Specifications = lazy(() => import('../pages/technology/Specifications'));

export const routes = [
  {
    path: '/products',
    label: 'Products',
    children: [
      { path: 'standard-system', label: 'Standard System', component: StandardSystem },
      { path: 'digital-bundle', label: 'Digital Bundle', component: DigitalBundle },
      { path: 'professional-kit', label: 'Professional Kit', component: ProfessionalKit }
    ]
  },
  {
    path: '/technology',
    label: 'Technology',
    children: [
      { path: 'core', label: 'Core Technology', component: CoreTechnology },
      { path: 'digital-integration', label: 'Digital Integration', component: DigitalIntegration },
      { path: 'specifications', label: 'Technical Specifications', component: Specifications }
    ]
  }
];

export const getRouteTitle = (path: string): string => {
  // First check for exact matches
  for (const group of routes) {
    if (group.path === path) return group.label;
    
    for (const child of group.children) {
      const fullPath = `${group.path}/${child.path}`;
      if (fullPath === path) return child.label;
    }
  }

  // Default cases
  if (path === '/') return 'Home';
  return 'Not Found';
};