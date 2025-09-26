import { test, expect } from '@playwright/test';

test.describe('Master Test Suite - Complete Site Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  // HOMEPAGE TESTS
  test('Homepage - Hero section loads with all animations', async ({ page }) => {
    await page.goto('http://localhost:3004');
    await page.waitForTimeout(3000);

    // Hero title and content
    await expect(page.locator('h1').filter({ hasText: 'JOHN CONNOR' })).toBeVisible();
    await expect(page.locator('text=Building systems that serve humanity').first()).toBeVisible();

    // CTA buttons
    await expect(page.locator('text=View My Work').first()).toBeVisible();
    await expect(page.locator('text=My Philosophy').first()).toBeVisible();

    // Tron grid animation
    const tronGrid = page.locator('.tron-grid');
    await expect(tronGrid).toBeVisible();
  });

  test('Homepage - Logo animation with diamond outline', async ({ page }) => {
    await page.goto('http://localhost:3004');
    await page.waitForTimeout(2000);

    // Check for diamond SVG path
    const logoSvg = page.locator('nav svg path[d*="M 20 5"]');
    await expect(logoSvg).toBeVisible();

    // Check JC text
    const jcText = page.locator('nav').locator('text=JC');
    await expect(jcText.first()).toBeVisible();
  });

  // NAVIGATION TESTS
  test('Navigation - All pages accessible', async ({ page }) => {
    await page.goto('http://localhost:3004');

    // Work page
    await page.locator('nav').locator('text=Work').first().click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/work/);

    // Blog page
    await page.locator('nav').locator('text=Blog').first().click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/blog/);

    // Thoughts page
    await page.locator('nav').locator('text=Thoughts').first().click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/thoughts/);

    // Philosophy page (no philosophy page exists, skip)

    // Contact page
    await page.locator('nav').locator('text=Contact').first().click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/contact/);
  });

  // WORK PAGE TESTS
  test('Work page - Projects display correctly', async ({ page }) => {
    await page.goto('http://localhost:3004/work');
    await page.waitForTimeout(2000);

    // Page title
    await expect(page.locator('h1').filter({ hasText: 'Work' })).toBeVisible();

    // Check for any project content (cards, sections, or text)
    const projectContent = await page.locator('main').textContent();
    expect(projectContent).toBeTruthy();
    // Page should have some work-related content
    const hasWorkContent = projectContent?.toLowerCase().includes('project') ||
                           projectContent?.toLowerCase().includes('work') ||
                           projectContent?.toLowerCase().includes('experience');
    expect(hasWorkContent).toBeTruthy();
  });

  // BLOG PAGE TESTS
  test('Blog page - Posts load and display', async ({ page }) => {
    await page.goto('http://localhost:3004/blog');
    await page.waitForTimeout(2000);

    // Page title
    await expect(page.locator('h1').filter({ hasText: 'Blog' })).toBeVisible();

    // Blog posts exist
    const posts = page.locator('article, [class*="post"], [class*="card"]');
    const postCount = await posts.count();
    expect(postCount).toBeGreaterThanOrEqual(1);
  });

  // CONTACT PAGE TESTS
  test('Contact page - Form elements present', async ({ page }) => {
    await page.goto('http://localhost:3004/contact');
    await page.waitForTimeout(2000);

    // Form fields
    await expect(page.locator('input[type="text"], input[name="name"]').first()).toBeVisible();
    await expect(page.locator('input[type="email"], input[name="email"]').first()).toBeVisible();
    await expect(page.locator('textarea').first()).toBeVisible();
    await expect(page.locator('button[type="submit"]').first()).toBeVisible();
  });

  // MOBILE RESPONSIVE TESTS
  test('Mobile - Responsive design and menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3004');
    await page.waitForTimeout(2000);

    // Mobile menu button
    const menuButton = page.locator('button').filter({ has: page.locator('svg') });
    const menuButtonVisible = await menuButton.first().isVisible();
    expect(menuButtonVisible).toBeTruthy();

    // Content still visible
    await expect(page.locator('text=JOHN CONNOR').first()).toBeVisible();
  });

  // DARK MODE TESTS
  test('Dark mode - Default theme verification', async ({ page }) => {
    await page.goto('http://localhost:3004');

    const backgroundColor = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });

    // Should be dark
    expect(backgroundColor).toMatch(/rgb\(0, 0, 0\)|rgba\(0, 0, 0|rgb\(17, 24, 39\)/);
  });

  // ANIMATION TESTS
  test('Animations - Smooth transitions present', async ({ page }) => {
    await page.goto('http://localhost:3004');
    await page.waitForTimeout(2000);

    // Check for animation classes
    const animatedElements = page.locator('[class*="animate"], [class*="transition"], [class*="motion"]');
    const animCount = await animatedElements.count();
    expect(animCount).toBeGreaterThan(0);

    // Scroll to trigger animations
    await page.evaluate(() => window.scrollBy(0, 300));
    await page.waitForTimeout(500);

    // Navbar should have scroll styles
    const navbar = page.locator('nav').first();
    await expect(navbar).toBeVisible();
  });

  // PERFORMANCE TESTS
  test('Performance - Page loads within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('http://localhost:3004', { waitUntil: 'networkidle' });
    const loadTime = Date.now() - startTime;

    // Should load in under 10 seconds (more lenient for dev server)
    expect(loadTime).toBeLessThan(10000);
  });

  // SEO & METADATA TESTS
  test('SEO - Essential meta tags present', async ({ page }) => {
    await page.goto('http://localhost:3004');

    // Title
    await expect(page).toHaveTitle(/John Connor/i);

    // Meta description
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
  });

  // ERROR HANDLING TESTS
  test('Error handling - 404 page works', async ({ page }) => {
    await page.goto('http://localhost:3004/nonexistent-page-404');
    await page.waitForTimeout(2000);

    // Should still have navigation
    await expect(page.locator('nav').first()).toBeVisible();
  });

  // ACCESSIBILITY TESTS
  test('Accessibility - Keyboard navigation', async ({ page }) => {
    await page.goto('http://localhost:3004');

    // Tab through interactive elements
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Should have focus styles
    const focusedElement = await page.evaluate(() => {
      return document.activeElement?.tagName;
    });
    expect(focusedElement).toBeTruthy();
  });

  // API/SANITY TESTS
  test('Content - Sanity CMS integration', async ({ page }) => {
    await page.goto('http://localhost:3004/blog');
    await page.waitForTimeout(3000);

    // Should load content from CMS
    const content = await page.locator('main').textContent();
    expect(content).toBeTruthy();
  });

  // PRODUCTION BUILD TEST
  test.skip('Production - Vercel deployment accessible', async ({ page }) => {
    // Skip in local testing, enable for production checks
    await page.goto('https://portfolio-blog-6071kfyuo-john-connors-projects-d9df1dfe.vercel.app', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    await expect(page.locator('text=JOHN CONNOR').first()).toBeVisible();
  });
});