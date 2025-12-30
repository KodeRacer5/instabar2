/**
 * Environment Variable Validation
 * Based on Node.js Best Practices
 *
 * Validates all required environment variables at startup.
 * Fail fast if any are missing or invalid.
 *
 * Usage:
 * import { env } from '@/lib/env';
 * console.log(env.NODE_ENV);
 */

import { z } from 'zod';

/**
 * Server-side environment variables schema
 * These are NOT exposed to the browser
 */
const serverEnvSchema = z.object({
  // Node environment
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

  // Server
  PORT: z.string().default('3000'),

  // Database (uncomment when needed)
  // DATABASE_URL: z.string().url(),

  // Authentication (uncomment when needed)
  // NEXTAUTH_SECRET: z.string().min(32),
  // NEXTAUTH_URL: z.string().url(),

  // API Keys (uncomment when needed)
  // STRIPE_SECRET_KEY: z.string().startsWith('sk_'),
  // RESEND_API_KEY: z.string().startsWith('re_'),
});

/**
 * Client-side environment variables schema
 * These ARE exposed to the browser (must start with NEXT_PUBLIC_)
 */
const clientEnvSchema = z.object({
  // App
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),

  // Analytics (uncomment when needed)
  // NEXT_PUBLIC_GA_ID: z.string().optional(),
  // NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
});

/**
 * Combined schema
 */
const envSchema = serverEnvSchema.merge(clientEnvSchema);

/**
 * Type-safe environment object
 */
export type Env = z.infer<typeof envSchema>;

/**
 * Parse and validate environment variables
 */
function validateEnv(): Env {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors);

    // In development, show helpful message
    if (process.env.NODE_ENV !== 'production') {
      console.error('\n📝 Check your .env file against .env.example\n');
    }

    throw new Error('Invalid environment variables');
  }

  return parsed.data;
}

/**
 * Validated environment variables
 * Import this to access type-safe env vars
 */
export const env = validateEnv();

/**
 * Helper to check if we're in development
 */
export const isDevelopment = env.NODE_ENV === 'development';

/**
 * Helper to check if we're in production
 */
export const isProduction = env.NODE_ENV === 'production';

/**
 * Helper to check if we're in test
 */
export const isTest = env.NODE_ENV === 'test';
