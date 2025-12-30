'use client';

import { RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" style={{ colorScheme: 'dark', backgroundColor: '#000000' }} className="dark">
      <body style={{ backgroundColor: '#000000', margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ maxWidth: '32rem', textAlign: 'center' }}>
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ 
                fontSize: '6rem', 
                fontWeight: 900, 
                background: 'linear-gradient(90deg, #ef4444, #f97316, #eab308)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                500
              </span>
            </div>

            <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
              Critical Error
            </h1>

            <p style={{ fontSize: '1.125rem', color: '#9ca3af', marginBottom: '2rem' }}>
              A critical error occurred. Please refresh the page or return home.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <button
                onClick={() => reset()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  borderRadius: '0.75rem',
                  background: 'linear-gradient(90deg, #dc2626, #ea580c)',
                  padding: '0.75rem 1.5rem',
                  fontWeight: 500,
                  color: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                <RefreshCw size={20} />
                Try Again
              </button>
              <a
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '0.75rem 1.5rem',
                  fontWeight: 500,
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
              >
                <Home size={20} />
                Back to Home
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
