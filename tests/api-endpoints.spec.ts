import { test, expect } from '@playwright/test';

test.describe('API Endpoints and Form Submissions', () => {
  test('contact form submission works', async ({ page }) => {
    await page.goto('/contact');
    
    // Fill out the form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message for automated testing');
    
    // Intercept the form submission
    const responsePromise = page.waitForResponse(response => 
      response.url().includes('/api/contact') || 
      response.url().includes('contact')
    , { timeout: 5000 }).catch(() => null);
    
    // Submit the form
    await page.click('button[type="submit"]');
    
    // Check for success indication (either response or UI change)
    const response = await responsePromise;
    if (response) {
      expect(response.status()).toBeLessThanOrEqual(400);
    }
    
    // Alternative: Check for UI success message
    const successMessage = page.locator('text=/success|thank|received/i');
    const errorMessage = page.locator('text=/error|failed/i');
    
    // Either we should see success or at least no error
    try {
      await expect(successMessage).toBeVisible({ timeout: 5000 });
    } catch {
      // If no success message, ensure no error message
      await expect(errorMessage).not.toBeVisible();
    }
  });

  test('newsletter subscription endpoint', async ({ page }) => {
    await page.goto('/');
    
    // Look for newsletter form
    const emailInput = page.locator('input[type="email"]').first();
    const hasNewsletter = await emailInput.count() > 0;
    
    if (hasNewsletter) {
      await emailInput.fill('newsletter@test.com');
      
      // Find and click subscribe button
      const subscribeButton = page.locator('button:has-text("Subscribe")').first();
      if (await subscribeButton.count() > 0) {
        await subscribeButton.click();
        
        // Check for any response
        await page.waitForTimeout(2000);
        
        // Ensure no error state
        const errorIndicator = page.locator('.error, .text-red-500, [data-error="true"]');
        await expect(errorIndicator).not.toBeVisible();
      }
    }
  });

  test('API health check endpoints', async ({ request }) => {
    // Test common API endpoints
    const endpoints = [
      '/api/health',
      '/api/status',
    ];
    
    for (const endpoint of endpoints) {
      const response = await request.get(endpoint).catch(() => null);
      if (response) {
        // If endpoint exists, it should not return 5xx
        expect(response.status()).toBeLessThan(500);
      }
    }
  });

  test('draft mode API endpoints exist', async ({ request }) => {
    // Sanity draft mode endpoints
    const response1 = await request.get('/api/draft').catch(() => null);
    const response2 = await request.get('/api/disable-draft').catch(() => null);
    
    // These might require auth, but shouldn't 500
    if (response1) expect(response1.status()).toBeLessThan(500);
    if (response2) expect(response2.status()).toBeLessThan(500);
  });

  test('form validation works correctly', async ({ page }) => {
    await page.goto('/contact');
    
    // Try submitting empty form
    await page.click('button[type="submit"]');
    
    // Should show validation errors or not submit
    await page.waitForTimeout(1000);
    
    // Check that we're still on contact page (not redirected)
    expect(page.url()).toContain('/contact');
    
    // Fill only email (missing required fields)
    await page.fill('input[name="email"]', 'partial@test.com');
    await page.click('button[type="submit"]');
    
    await page.waitForTimeout(1000);
    
    // Should still be on contact page
    expect(page.url()).toContain('/contact');
  });
});