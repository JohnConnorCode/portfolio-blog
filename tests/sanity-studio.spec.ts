import { test, expect } from '@playwright/test';

test.describe('Sanity Studio Tests', () => {
  test('Studio route loads without errors', async ({ page }) => {
    const response = await page.goto('/studio');
    expect(response?.status()).toBeLessThan(400);
    
    // Check for Sanity Studio elements or login
    await page.waitForTimeout(3000); // Wait for client-side JS
    
    // Check if redirected to login or studio loads
    const url = page.url();
    expect(url).toContain('/studio');
  });

  test('Studio has correct meta tags', async ({ page }) => {
    await page.goto('/studio');
    
    // Check that studio page has proper setup
    const title = await page.title();
    expect(title).toBeTruthy();
  });

  test('Studio assets load correctly', async ({ page }) => {
    const failedRequests: string[] = [];
    
    page.on('requestfailed', request => {
      failedRequests.push(request.url());
    });
    
    await page.goto('/studio');
    await page.waitForTimeout(2000);
    
    // No critical assets should fail
    const criticalFailures = failedRequests.filter(url => 
      url.includes('sanity') || url.includes('studio')
    );
    expect(criticalFailures).toHaveLength(0);
  });

  test('Sanity schemas are properly configured', async ({ page }) => {
    await page.goto('/studio');
    await page.waitForTimeout(3000);
    
    // Check console for schema errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.waitForTimeout(2000);
    
    // Check for schema-related errors
    const schemaErrors = consoleErrors.filter(error => 
      error.toLowerCase().includes('schema') || 
      error.toLowerCase().includes('type')
    );
    
    expect(schemaErrors).toHaveLength(0);
  });
});