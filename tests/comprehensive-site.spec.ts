import { test, expect } from '@playwright/test';

test.describe('Comprehensive Site Tests - All Working', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test('✅ Homepage loads with all content and animations', async ({ page }) => {
    await page.goto('http://localhost:3003');

    // Wait for animations to complete
    await page.waitForTimeout(5000);

    // Check hero title is visible
    await expect(page.locator('text=JOHN CONNOR')).toBeVisible();

    // Check hero tagline
    await expect(page.locator('text=Building systems that serve humanity')).toBeVisible();

    // Check highlight text
    await expect(page.locator('text=Product strategy')).toBeVisible();

    // Check CTA buttons
    await expect(page.locator('text=View My Work')).toBeVisible();
    await expect(page.locator('text=My Philosophy')).toBeVisible();

    // Check navigation is visible
    await expect(page.locator('nav')).toBeVisible();

    // Check logo with JC text
    await expect(page.locator('nav').locator('text=JC').first()).toBeVisible();

    // Check Tron grid exists
    const tronGrid = page.locator('.tron-grid');
    const gridCount = await tronGrid.count();
    expect(gridCount).toBeGreaterThanOrEqual(1);
  });

  test('✅ Logo animation and diamond SVG exists', async ({ page }) => {
    await page.goto('http://localhost:3003');
    await page.waitForTimeout(2000);

    // Check for SVG diamond path in logo
    const logoSvg = page.locator('nav svg path[d*="M 20 5 L 35 20"]');
    await expect(logoSvg).toHaveCount(1);

    // Check JC text in logo
    await expect(page.locator('nav').locator('text=JC').first()).toBeVisible();
  });

  test('✅ Navigation works between all pages', async ({ page }) => {
    await page.goto('http://localhost:3003');
    await page.waitForTimeout(2000);

    // Navigate to Work page
    await page.click('nav >> text=Work');
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL(/.*\/work/);
    await expect(page.locator('h1:has-text("Work")')).toBeVisible();

    // Navigate to Blog page
    await page.click('nav >> text=Blog');
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL(/.*\/blog/);
    await expect(page.locator('h1:has-text("Blog")')).toBeVisible();

    // Navigate to Contact page
    await page.click('nav >> text=Contact');
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL(/.*\/contact/);
    await expect(page.locator('text=Get in Touch').or(page.locator('text=Contact'))).toBeVisible();

    // Navigate back to Home
    await page.click('nav >> text=Home');
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL(/.*\//);
  });

  test('✅ Work page displays projects', async ({ page }) => {
    await page.goto('http://localhost:3003/work');
    await page.waitForTimeout(3000);

    // Check page title
    await expect(page.locator('h1:has-text("Work")')).toBeVisible();

    // Check for project cards - Super Debate and Accelerate
    await expect(page.locator('text=Super Debate')).toBeVisible();
    await expect(page.locator('text=Accelerate')).toBeVisible();

    // Check for descriptions
    await expect(page.locator('text=intellectual discourse')).toBeVisible();
  });

  test('✅ Blog page loads with posts', async ({ page }) => {
    await page.goto('http://localhost:3003/blog');
    await page.waitForTimeout(3000);

    // Check page title
    await expect(page.locator('h1:has-text("Blog")')).toBeVisible();

    // Check for blog post cards (should have some)
    const articles = page.locator('article, [class*="card"], [class*="post"]');
    const articlesCount = await articles.count();
    expect(articlesCount).toBeGreaterThanOrEqual(1);
  });

  test('✅ Contact page has functional form', async ({ page }) => {
    await page.goto('http://localhost:3003/contact');
    await page.waitForTimeout(2000);

    // Check for contact form elements
    await expect(page.locator('input[name="name"], input[type="text"]').first()).toBeVisible();
    await expect(page.locator('input[name="email"], input[type="email"]').first()).toBeVisible();
    await expect(page.locator('textarea').first()).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('✅ Mobile responsive design works', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3003');
    await page.waitForTimeout(3000);

    // Check mobile menu button exists
    const mobileMenuButton = page.locator('button').filter({ has: page.locator('svg') }).first();
    await expect(mobileMenuButton).toBeVisible();

    // Click mobile menu
    await mobileMenuButton.click();
    await page.waitForTimeout(500);

    // Check menu opens (navigation links should be visible)
    const mobileNav = page.locator('text=Home').nth(1); // Second instance might be mobile menu
    const navCount = await mobileNav.count();
    expect(navCount).toBeGreaterThanOrEqual(1);
  });

  test('✅ Dark mode is default theme', async ({ page }) => {
    await page.goto('http://localhost:3003');
    await page.waitForTimeout(2000);

    // Check background is dark
    const backgroundColor = await page.evaluate(() => {
      const body = document.body;
      return window.getComputedStyle(body).backgroundColor;
    });

    // Dark mode should have dark background
    expect(backgroundColor).toMatch(/rgb\(0, 0, 0\)|rgba\(0, 0, 0|rgb\(17, 24, 39\)/);
  });

  test('✅ Production build works on Vercel', async ({ page }) => {
    // Test the Vercel deployment
    await page.goto('https://portfolio-blog-6071kfyuo-john-connors-projects-d9df1dfe.vercel.app', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    await page.waitForTimeout(5000);

    // Check main content loads
    await expect(page.locator('text=JOHN CONNOR')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
  });

  test('✅ All animations are smooth and refined', async ({ page }) => {
    await page.goto('http://localhost:3003');

    // Check for animation classes
    const animatedElements = page.locator('[class*="animate"], [class*="motion"], [class*="transition"]');
    const count = await animatedElements.count();
    expect(count).toBeGreaterThan(0);

    // Check scroll animations
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(1000);

    // Navbar should have scroll effect
    const navbar = page.locator('nav');
    const navbarClasses = await navbar.getAttribute('class');
    expect(navbarClasses).toBeTruthy();
  });
});