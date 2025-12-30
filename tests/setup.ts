import '@testing-library/jest-dom';

import { vi } from 'vitest';

// Global test setup
// Add any global mocks or setup here

// Example: Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Example: Mock next/image
vi.mock('next/image', () => ({
  default: (props: { alt?: string; [key: string]: unknown }) => {
    return null; // Simplified mock for type-check
  },
}));
