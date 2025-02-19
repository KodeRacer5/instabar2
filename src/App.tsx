import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Technology from './components/Technology';
import Products from './components/Products';
import Verification from './components/Verification';
import Resources from './components/Resources';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import { routes } from './lib/routes';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-light mb-4">Something went wrong</h2>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="btn-primary"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen">
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route
                path="/"
                element={
                  <main>
                    <Hero />
                    <Breadcrumbs />
                    <Features />
                    <Technology />
                    <Products />
                    <Verification />
                    <Resources />
                  </main>
                }
              />
              
              {routes.map((routeGroup) => 
                routeGroup.children.map((route) => (
                  <Route
                    key={`${routeGroup.path}/${route.path}`}
                    path={`${routeGroup.path}/${route.path}`}
                    element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <route.component />
                      </Suspense>
                    }
                  />
                ))
              )}

              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;