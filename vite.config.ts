import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          components: [
            './src/components/Hero.tsx',
            './src/components/Features.tsx',
            './src/components/Products.tsx',
            './src/components/Technology.tsx',
            './src/components/Resources.tsx',
            './src/components/CaseStudies.tsx',
            './src/components/Footer.tsx'
          ]
        }
      }
    },
    sourcemap: true,
    target: 'esnext',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    hmr: {
      overlay: true,
      protocol: 'ws'
    },
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    },
    watch: {
      usePolling: true,
      interval: 100
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    force: true
  },
  clearScreen: false
});