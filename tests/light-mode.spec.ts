import { test } from '@playwright/test';

test.describe('Light Mode Visual Testing', () => {
  test('should display hero section with good contrast in light mode', async ({ page }) => {
    // Set light color scheme preference
    await page.emulateMedia({ colorScheme: 'light' });
    
    // Navigate to homepage
    await page.goto('/');
    
    // Wait for hero content to load
    await page.waitForSelector('h1', { timeout: 10000 });
    
    // Take screenshot of hero section
    await page.screenshot({ 
      path: 'tests/screenshots/light-mode-hero-fixed.png',
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 800 }
    });
    
    // Check grid visibility
    const grid = await page.locator('.absolute.-left-1\\/2.-right-1\\/2.-bottom-1\\/2').first();
    const gridStyles = await grid.evaluate(el => window.getComputedStyle(el));
    console.log('Grid opacity in light mode:', gridStyles);
    
    // Check text contrast
    const title = await page.locator('h1').first();
    const titleColor = await title.evaluate(el => window.getComputedStyle(el).color);
    console.log('Title color in light mode:', titleColor);
    
    // Take full page screenshot
    await page.screenshot({ 
      path: 'tests/screenshots/light-mode-full-fixed.png',
      fullPage: true
    });
  });
});
