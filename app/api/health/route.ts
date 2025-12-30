/**
 * Health Check Endpoint
 * Used by Docker, Kubernetes, and load balancers
 *
 * GET /api/health
 */

import { NextResponse } from 'next/server';

export async function GET() {
  const healthcheck = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
  };

  try {
    // Add additional checks here:
    // - Database connection
    // - Redis connection
    // - External API availability

    return NextResponse.json(healthcheck, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 503 }
    );
  }
}
