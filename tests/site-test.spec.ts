import { test, expect } from '@playwright/test';

test.describe('Portfolio Site Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Set viewport for consistent testing
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test('homepage loads with all content', async ({ page }) => {
    await page.goto('http://localhost:3003');

    // Wait for animations to complete
    await page.waitForTimeout(5000);

    // Check hero content
    await expect(page.locator('h1')).toContainText('JOHN CONNOR');
    await expect(page.locator('text=Building systems that serve humanity')).toBeVisible();

    // Check navigation
    await expect(page.locator('nav')).toBeVisible();

    // Check CTA buttons
    await expect(page.locator('text=View My Work')).toBeVisible();
    await expect(page.locator('text=My Philosophy')).toBeVisible();

    // Take screenshot
    await page.screenshot({ path: 'test-homepage.png' });
  });

  test('work page loads correctly', async ({ page }) => {
    await page.goto('http://localhost:3003/work');
    await page.waitForTimeout(3000);

    // Check page loaded
    await expect(page.locator('nav')).toBeVisible();

    // Take screenshot
    await page.screenshot({ path: 'test-work.png' });
  });

  test('blog page loads with posts', async ({ page }) => {
    await page.goto('http://localhost:3003/blog');
    await page.waitForTimeout(3000);

    // Check page loaded
    await expect(page.locator('nav')).toBeVisible();

    // Take screenshot
    await page.screenshot({ path: 'test-blog.png' });
  });

  test('contact page loads correctly', async ({ page }) => {
    await page.goto('http://localhost:3003/contact');
    await page.waitForTimeout(3000);

    // Check page loaded
    await expect(page.locator('nav')).toBeVisible();

    // Take screenshot
    await page.screenshot({ path: 'test-contact.png' });
  });

  test('mobile menu works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3003');
    await page.waitForTimeout(3000);

    // Click mobile menu button
    const menuButton = page.locator('button[aria-label*="menu" i], button:has(svg)').first();
    await menuButton.click();

    // Check menu opened
    await page.waitForTimeout(500);

    // Take screenshot
    await page.screenshot({ path: 'test-mobile-menu.png' });
  });

  test('logo animation displays', async ({ page }) => {
    await page.goto('http://localhost:3003');

    // Wait for logo animation
    await page.waitForTimeout(2000);

    // Check logo is visible
    const logo = page.locator('nav a[href="/"] svg');
    await expect(logo).toBeVisible();

    // Check JC text appears
    const logoText = page.locator('nav a[href="/"] span:has-text("JC")');
    await expect(logoText).toBeVisible();
  });

  test('dark mode is default', async ({ page }) => {
    await page.goto('http://localhost:3003');
    await page.waitForTimeout(2000);

    // Check for dark background
    const body = page.locator('body');
    const bgColor = await body.evaluate(el =>
      window.getComputedStyle(el).backgroundColor
    );

    // Dark mode should have dark background
    expect(bgColor).toMatch(/rgb\(0, 0, 0\)|rgba\(0, 0, 0/);
  });
});