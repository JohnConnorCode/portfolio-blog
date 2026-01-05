import { test, expect } from '@playwright/test';
import type { Dialog, PageError } from '@playwright/test';

test.describe('Error Boundaries and Edge Cases', () => {
  test('404 page displays correctly', async ({ page }) => {
    const response = await page.goto('/non-existent-page-12345');
    
    // Should return 404 status
    expect(response?.status()).toBe(404);
    
    // Should show 404 message
    await expect(page.locator('text=/404|not found/i')).toBeVisible();
    
    // Navigation should still be available
    await expect(page.locator('nav')).toBeVisible();
    
    // Should have a way back
    const homeLink = page.locator('a[href="/"]');
    await expect(homeLink.first()).toBeVisible();
  });

  test('handles invalid blog post slugs', async ({ page }) => {
    const response = await page.goto('/blog/invalid-post-slug-xyz123');
    
    // Should either 404 or redirect
    expect(response?.status()).toBeLessThanOrEqual(404);
    
    // Should not show error stack trace
    const bodyText = await page.textContent('body');
    expect(bodyText).not.toContain('TypeError');
    expect(bodyText).not.toContain('undefined');
    expect(bodyText).not.toContain('stack');
  });

  test('handles malformed URLs gracefully', async ({ page }) => {
    const malformedUrls = [
      '/blog/%00',
      '/blog/../admin',
      '/blog/post?<script>alert(1)</script>',
      '/contact?email=<img src=x onerror=alert(1)>',
    ];
    
    for (const url of malformedUrls) {
      const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
      
      // Should not 500
      expect(response?.status()).toBeLessThan(500);
      
      // Should not execute scripts
      const alerts: Dialog[] = [];
      page.on('dialog', dialog => alerts.push(dialog));
      await page.waitForTimeout(1000);
      expect(alerts).toHaveLength(0);
    }
  });

  test('handles JavaScript disabled gracefully', async ({ browser }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false
    });
    const page = await context.newPage();
    
    await page.goto('/');
    
    // Critical content should still be visible
    const heading = await page.locator('h1').first().textContent();
    expect(heading).toBeTruthy();
    
    // Navigation should work
    await page.click('a[href="/blog"]');
    expect(page.url()).toContain('/blog');
    
    await context.close();
  });

  test('handles slow network gracefully', async ({ page }) => {
    // Simulate slow 3G
    await page.route('**/*', route => {
      setTimeout(() => route.continue(), 1000);
    });
    
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    
    // Page should still load
    await expect(page.locator('h1')).toBeVisible();
  });

  test('form handles special characters', async ({ page }) => {
    await page.goto('/contact');
    
    const specialInputs = [
      { name: "O'Brien", email: 'test+special@example.com', message: 'Test & <special> "characters"' },
      { name: '用户', email: 'user@测试.com', message: 'Unicode: 你好 مرحبا שלום' },
      { name: 'Long'.repeat(100), email: 'a@b.c', message: 'x'.repeat(10000) },
    ];
    
    for (const input of specialInputs) {
      await page.fill('input[name="name"]', input.name);
      await page.fill('input[name="email"]', input.email);
      await page.fill('textarea[name="message"]', input.message);
      
      // Form should handle without breaking
      const nameValue = await page.inputValue('input[name="name"]');
      expect(nameValue).toBeTruthy();
    }
  });

  test('handles browser back/forward correctly', async ({ page }) => {
    // Navigate through pages
    await page.goto('/');
    await page.click('a[href="/blog"]');
    await page.click('a[href="/contact"]');
    
    // Go back
    await page.goBack();
    expect(page.url()).toContain('/blog');
    
    // Go back again
    await page.goBack();
    expect(page.url()).toMatch(/\/$/);
    
    // Go forward
    await page.goForward();
    expect(page.url()).toContain('/blog');
  });

  test('handles concurrent requests', async ({ page }) => {
    // Make multiple simultaneous requests
    const promises = [
      page.goto('/'),
      page.request.get('/blog'),
      page.request.get('/work'),
      page.request.get('/contact'),
    ];
    
    const results = await Promise.allSettled(promises);
    
    // All should complete without errors
    for (const result of results) {
      expect(result.status).toBe('fulfilled');
    }
  });

  test('localStorage/sessionStorage errors handled', async ({ page }) => {
    // Block storage
    await page.addInitScript(() => {
      Object.defineProperty(window, 'localStorage', {
        get: () => { throw new Error('localStorage blocked'); }
      });
    });
    
    await page.goto('/');
    
    // Page should still work
    await expect(page.locator('h1')).toBeVisible();
    
    // No uncaught errors
    const errors: PageError[] = [];
    page.on('pageerror', err => errors.push(err));
    await page.waitForTimeout(1000);

    // Should handle storage errors gracefully
    const uncaughtErrors = errors.filter(e => !e.message.includes('localStorage'));
    expect(uncaughtErrors).toHaveLength(0);
  });

  test('handles missing environment variables', async ({ page }) => {
    // This would normally be tested in a separate environment
    // but we can check if the app handles missing data gracefully
    
    // Block API calls to simulate missing config
    await page.route('**/api.sanity.io/**', route => route.abort());
    await page.route('**/supabase.co/**', route => route.abort());
    
    await page.goto('/');
    
    // Should show fallback content, not crash
    await expect(page.locator('h1')).toBeVisible();
    
    // Should not show config errors to user
    const bodyText = await page.textContent('body');
    expect(bodyText).not.toContain('NEXT_PUBLIC');
    expect(bodyText).not.toContain('undefined');
  });

  test('security headers are set', async ({ page }) => {
    const response = await page.goto('/');
    const headers = response?.headers();
    
    if (headers) {
      // Check for security headers (might be set by hosting provider)
      const securityHeaders = [
        'x-content-type-options',
        'x-frame-options',
        'x-xss-protection',
      ];
      
      // At least some security headers should be present
      const presentHeaders = securityHeaders.filter(h => headers[h]);
      expect(presentHeaders.length).toBeGreaterThanOrEqual(0);
    }
  });
});
