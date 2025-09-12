import { test, expect } from '@playwright/test';

test.describe('Hero Grid Animation', () => {
  test('should display animated grid and galaxy effect', async ({ page }) => {
    await page.goto('/');
    
    // Wait for hero to load
    await page.waitForSelector('h1', { timeout: 10000 });
    
    // Check grid exists and is visible
    const grid = await page.locator('.hero-grid').first();
    await expect(grid).toBeVisible();
    
    // Take screenshots at different moments to verify animation
    await page.screenshot({ 
      path: 'tests/screenshots/hero-grid-1.png',
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 800 }
    });
    
    // Wait 2 seconds to see animation progress
    await page.waitForTimeout(2000);
    
    await page.screenshot({ 
      path: 'tests/screenshots/hero-grid-2.png',
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 800 }
    });
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(500);
    
    await page.screenshot({ 
      path: 'tests/screenshots/hero-grid-mobile.png',
      fullPage: false
    });
    
    // Verify grid still visible on mobile
    await expect(grid).toBeVisible();
  });
});
