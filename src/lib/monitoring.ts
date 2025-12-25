// Monitoring and error tracking with Sentry integration
import * as Sentry from "@sentry/nextjs";

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

interface ErrorLog {
  message: string
  stack?: string
  component?: string
  timestamp: string
  url?: string
  userAgent?: string
}

interface PerformanceMetric {
  name: string
  value: number
  timestamp: string
}

class MonitoringService {
  private errors: ErrorLog[] = []
  private metrics: PerformanceMetric[] = []
  
  // Log errors
  logError(error: Error, component?: string) {
    const errorLog: ErrorLog = {
      message: error.message,
      stack: error.stack,
      component,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined
    }
    
    this.errors.push(errorLog)
    
    // In development, log to console
    if (process.env.NODE_ENV === 'development') {
      console.error('🚨 Error tracked:', errorLog)
    }
    
    // In production, send to Sentry
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error, {
        tags: { component },
        extra: { ...errorLog }
      })
    }
  }
  
  // Track performance metrics
  trackMetric(name: string, value: number) {
    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: new Date().toISOString()
    }
    
    this.metrics.push(metric)
    
    // Log slow performance
    if (name === 'page_load' && value > 3000) {
      console.warn(`⚠️ Slow page load: ${value}ms`)
    }
  }
  
  // Track page views
  trackPageView(path: string) {
    if (typeof window !== 'undefined') {
      // Send to Sentry as breadcrumb for session tracking
      Sentry.addBreadcrumb({
        category: 'navigation',
        message: `Page view: ${path}`,
        level: 'info',
      })

      // Send to Google Analytics if configured
      if (process.env.NODE_ENV === 'production' && typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
          page_path: path,
        })
      }
    }
  }
  
  // Get error report
  getErrorReport() {
    return {
      totalErrors: this.errors.length,
      recentErrors: this.errors.slice(-10),
      errorsByComponent: this.groupErrorsByComponent()
    }
  }
  
  // Get performance report
  getPerformanceReport() {
    return {
      averagePageLoad: this.calculateAverageMetric('page_load'),
      slowestPages: this.getSlowPages(),
      metrics: this.metrics.slice(-50)
    }
  }
  
  private groupErrorsByComponent() {
    const grouped: Record<string, number> = {}
    this.errors.forEach(error => {
      const component = error.component || 'unknown'
      grouped[component] = (grouped[component] || 0) + 1
    })
    return grouped
  }
  
  private calculateAverageMetric(name: string): number {
    const relevantMetrics = this.metrics.filter(m => m.name === name)
    if (relevantMetrics.length === 0) return 0
    
    const sum = relevantMetrics.reduce((acc, m) => acc + m.value, 0)
    return Math.round(sum / relevantMetrics.length)
  }
  
  private getSlowPages(): PerformanceMetric[] {
    return this.metrics
      .filter(m => m.name === 'page_load')
      .sort((a, b) => b.value - a.value)
      .slice(0, 5)
  }
}

// Export singleton instance
export const monitoring = new MonitoringService()

// Web Vitals tracking
interface WebVitalMetric {
  name: string
  value: number
}

export function reportWebVitals(metric: WebVitalMetric) {
  // Log Core Web Vitals
  switch (metric.name) {
    case 'FCP': // First Contentful Paint
    case 'LCP': // Largest Contentful Paint
    case 'CLS': // Cumulative Layout Shift
    case 'FID': // First Input Delay
    case 'TTFB': // Time to First Byte
      monitoring.trackMetric(metric.name, Math.round(metric.value))
      
      // Warn if metrics are poor
      if (metric.name === 'LCP' && metric.value > 2500) {
        console.warn(`⚠️ Poor LCP: ${metric.value}ms (should be < 2500ms)`)
      }
      if (metric.name === 'FID' && metric.value > 100) {
        console.warn(`⚠️ Poor FID: ${metric.value}ms (should be < 100ms)`)
      }
      if (metric.name === 'CLS' && metric.value > 0.1) {
        console.warn(`⚠️ Poor CLS: ${metric.value} (should be < 0.1)`)
      }
      break
  }
}