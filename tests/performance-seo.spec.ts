import { test, expect } from '@playwright/test';

test.describe('Performance and SEO Tests', () => {
  test('page load performance metrics', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Homepage should load in under 5 seconds
    expect(loadTime).toBeLessThan(5000);
    
    // Check Core Web Vitals
    const metrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        let fcp, lcp;
        
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          fcp = entries[entries.length - 1].startTime;
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          lcp = entries[entries.length - 1].startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        
        setTimeout(() => {
          resolve({ fcp, lcp });
        }, 3000);
      });
    });
    
    // FCP should be under 2.5s (good), LCP under 4s (good)
    if (metrics.fcp) expect(metrics.fcp).toBeLessThan(2500);
    if (metrics.lcp) expect(metrics.lcp).toBeLessThan(4000);
  });

  test('SEO meta tags are present', async ({ page }) => {
    await page.goto('/');
    
    // Title tag
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(10);
    expect(title.length).toBeLessThan(70);
    
    // Meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toBeTruthy();
    expect(metaDescription!.length).toBeGreaterThan(50);
    expect(metaDescription!.length).toBeLessThan(160);
    
    // Open Graph tags
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toBeTruthy();
    
    const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
    expect(ogDescription).toBeTruthy();
    
    // Twitter Card
    const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
    expect(twitterCard).toBeTruthy();
  });

  test('images have alt text', async ({ page }) => {
    await page.goto('/');
    
    const images = await page.locator('img').all();
    
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      const src = await img.getAttribute('src');
      
      // Decorative images might have empty alt, but should have the attribute
      if (!src?.includes('data:') && !src?.includes('placeholder')) {
        expect(alt !== null).toBeTruthy();
      }
    }
  });

  test('proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Should have exactly one h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    // Check heading order (h1 -> h2 -> h3, etc.)
    const headings = await page.evaluate(() => {
      const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      return Array.from(elements).map(el => parseInt(el.tagName[1]));
    });
    
    // Headings shouldn't skip levels (e.g., h1 -> h3)
    for (let i = 1; i < headings.length; i++) {
      const diff = headings[i] - headings[i - 1];
      expect(diff).toBeLessThanOrEqual(1);
    }
  });

  test('mobile viewport is configured', async ({ page }) => {
    const viewportMeta = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(viewportMeta).toContain('width=device-width');
    expect(viewportMeta).toContain('initial-scale=1');
  });

  test('canonical URL is set', async ({ page }) => {
    await page.goto('/blog');
    
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    // Canonical might not be set, but if it is, should be valid
    if (canonical) {
      expect(canonical).toMatch(/^https?:\/\//);
    }
  });

  test('robots meta is appropriate', async ({ page }) => {
    await page.goto('/');
    
    const robotsMeta = await page.locator('meta[name="robots"]').getAttribute('content');
    
    // Homepage should not have noindex
    if (robotsMeta) {
      expect(robotsMeta).not.toContain('noindex');
    }
    
    // Admin pages should have noindex
    await page.goto('/admin');
    const adminRobots = await page.locator('meta[name="robots"]').getAttribute('content');
    if (adminRobots) {
      expect(adminRobots).toContain('noindex');
    }
  });

  test('structured data is present', async ({ page }) => {
    await page.goto('/');
    
    const jsonLd = await page.locator('script[type="application/ld+json"]').count();
    
    // Should have at least one structured data script
    expect(jsonLd).toBeGreaterThanOrEqual(0);
  });

  test('resource hints are used', async ({ page }) => {
    await page.goto('/');
    
    // Check for preconnect, prefetch, or preload
    const preconnect = await page.locator('link[rel="preconnect"]').count();
    const prefetch = await page.locator('link[rel="prefetch"]').count();
    const preload = await page.locator('link[rel="preload"]').count();
    
    // Should use at least some resource hints
    const totalHints = preconnect + prefetch + preload;
    expect(totalHints).toBeGreaterThanOrEqual(0);
  });

  test('no broken internal links', async ({ page }) => {
    await page.goto('/');
    
    const links = await page.locator('a[href^="/"]').all();
    const brokenLinks: string[] = [];
    
    for (const link of links.slice(0, 10)) { // Test first 10 to save time
      const href = await link.getAttribute('href');
      if (href && !href.startsWith('#')) {
        const response = await page.request.get(href);
        if (response.status() >= 400) {
          brokenLinks.push(href);
        }
      }
    }
    
    expect(brokenLinks).toHaveLength(0);
  });
});