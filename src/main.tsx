import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance monitoring
import { performance } from './lib/performance';

// Initialize performance monitoring
performance.measurePageLoad();
performance.measureFirstContentfulPaint();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Report metrics after load
window.addEventListener('load', () => {
  performance.reportMetrics();
});