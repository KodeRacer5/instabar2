interface PerformanceMetrics {
  pageLoadTime: number | null;
  firstContentfulPaint: number | null;
  largestContentfulPaint: number | null;
  firstInputDelay: number | null;
  cumulativeLayoutShift: number | null;
  timeToInteractive: number | null;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    pageLoadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null,
    timeToInteractive: null
  };

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers() {
    if ('PerformanceObserver' in window) {
      // LCP Observer
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.largestContentfulPaint = lastEntry.startTime;
      });

      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID Observer
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          if (entry.name === 'first-input') {
            this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
          }
        });
      });

      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS Observer
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach(entry => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            this.metrics.cumulativeLayoutShift = clsValue;
          }
        });
      });

      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // TTI Observer (using Long Tasks as a proxy)
      const ttiObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const lastTask = entries[entries.length - 1];
          this.metrics.timeToInteractive = lastTask.startTime + lastTask.duration;
        }
      });

      ttiObserver.observe({ entryTypes: ['longtask'] });
    }
  }

  public measurePageLoad(): number | null {
    if (window.performance && window.performance.timing) {
      const timing = window.performance.timing;
      this.metrics.pageLoadTime = timing.loadEventEnd - timing.navigationStart;
      return this.metrics.pageLoadTime;
    }
    return null;
  }

  public measureFirstContentfulPaint(): number | null {
    if (window.performance && window.performance.getEntriesByType) {
      const paintMetrics = window.performance.getEntriesByType('paint');
      const fcpEntry = paintMetrics.find(entry => entry.name === 'first-contentful-paint');
      this.metrics.firstContentfulPaint = fcpEntry ? fcpEntry.startTime : null;
      return this.metrics.firstContentfulPaint;
    }
    return null;
  }

  public getAllMetrics(): PerformanceMetrics {
    return this.metrics;
  }

  public async reportMetrics() {
    const metrics = this.getAllMetrics();
    try {
      await fetch('/api/metrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(metrics)
      });
    } catch (error) {
      console.error('Failed to report metrics:', error);
    }
  }
}

export const performance = new PerformanceMonitor();