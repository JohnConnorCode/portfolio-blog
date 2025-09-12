import { test, expect } from '@playwright/test';

test.describe('Full Site Test', () => {
  test('Homepage loads with all sections', async ({ page }) => {
    await page.goto('/');
    
    // Check hero section
    await expect(page.locator('h1')).toContainText('JOHN CONNOR');
    await expect(page.locator('.grid-animation')).toBeVisible();
    
    // Check navigation
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // Check CTA buttons
    await expect(page.locator('text=View My Work')).toBeVisible();
    await expect(page.locator('text=My Philosophy')).toBeVisible();
    
    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/homepage.png', fullPage: true });
  });

  test('Blog posts load and display content', async ({ page }) => {
    await page.goto('/blog');
    
    // Check blog listing
    await expect(page.locator('h1')).toContainText('WRITINGS');
    
    // Check if blog posts are listed
    await expect(page.locator('text=From Grants to Targeted Solutions')).toBeVisible();
    await expect(page.locator('text=Competitive Debate as the Revival')).toBeVisible();
    await expect(page.locator('text=Automation IS Coming')).toBeVisible();
    await expect(page.locator('text=From Vanity Metrics')).toBeVisible();
    
    // Click on first blog post
    await page.click('text=From Grants to Targeted Solutions');
    await page.waitForLoadState('networkidle');
    
    // Check blog post content
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=The Grant Theater Problem')).toBeVisible();
    
    await page.screenshot({ path: 'tests/screenshots/blog-post.png', fullPage: true });
  });

  test('Navigation works correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test Work page
    await page.click('nav >> text=Work');
    await expect(page).toHaveURL('/work');
    await expect(page.locator('h1')).toContainText('WORK');
    
    // Test Philosophy page
    await page.click('nav >> text=Philosophy');
    await expect(page).toHaveURL('/philosophy');
    await expect(page.locator('h1')).toContainText('PHILOSOPHY');
    
    // Test Blog page
    await page.click('nav >> text=Blog');
    await expect(page).toHaveURL('/blog');
    await expect(page.locator('h1')).toContainText('WRITINGS');
    
    // Test Contact page
    await page.click('nav >> text=Contact');
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('h1')).toContainText('CONTACT');
  });

  test('Responsive design works', async ({ page }) => {
    // Desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await page.screenshot({ path: 'tests/screenshots/desktop.png' });
    
    // Tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await page.screenshot({ path: 'tests/screenshots/tablet.png' });
    
    // Mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check mobile menu
    const mobileMenuButton = page.locator('button[aria-label="Toggle menu"]');
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      await expect(page.locator('nav a').first()).toBeVisible();
    }
    
    await page.screenshot({ path: 'tests/screenshots/mobile.png' });
  });

  test('Light and dark mode toggle', async ({ page }) => {
    await page.goto('/');
    
    // Test dark mode (default)
    await page.screenshot({ path: 'tests/screenshots/dark-mode.png' });
    
    // Switch to light mode
    await page.emulateMedia({ colorScheme: 'light' });
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Check light mode styles
    await page.screenshot({ path: 'tests/screenshots/light-mode.png' });
    
    // Verify grid is visible in light mode
    const grid = page.locator('.grid-animation');
    await expect(grid).toBeVisible();
  });

  test('Contact form exists', async ({ page }) => {
    await page.goto('/contact');
    
    // Check form fields
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
    
    await page.screenshot({ path: 'tests/screenshots/contact-form.png' });
  });

  test('Work page displays projects', async ({ page }) => {
    await page.goto('/work');
    
    await expect(page.locator('h1')).toContainText('WORK');
    
    // Check for project sections
    await expect(page.locator('text=FEATURED')).toBeVisible();
    
    await page.screenshot({ path: 'tests/screenshots/work-page.png' });
  });

  test('Philosophy page loads content', async ({ page }) => {
    await page.goto('/philosophy');
    
    await expect(page.locator('h1')).toContainText('PHILOSOPHY');
    await expect(page.locator('text=HUMAN-FIRST')).toBeVisible();
    
    await page.screenshot({ path: 'tests/screenshots/philosophy-page.png' });
  });

  test('Hero animations are working', async ({ page }) => {
    await page.goto('/');
    
    // Wait for animations
    await page.waitForTimeout(2000);
    
    // Check if animated elements are visible
    const heroTitle = page.locator('h1').first();
    await expect(heroTitle).toBeVisible();
    
    const heroDescription = page.locator('text=Building systems that serve humanity');
    await expect(heroDescription).toBeVisible();
    
    // Check grid animation
    const grid = page.locator('.grid-animation');
    if (await grid.count() > 0) {
      await expect(grid.first()).toBeVisible();
    }
  });

  test('All critical paths work', async ({ page }) => {
    // Test home -> work -> project flow
    await page.goto('/');
    await page.click('text=View My Work');
    await expect(page).toHaveURL('/work');
    
    // Test home -> philosophy flow
    await page.goto('/');
    await page.click('text=My Philosophy');
    await expect(page).toHaveURL('/philosophy');
    
    // Test blog navigation
    await page.goto('/blog');
    const firstPost = page.locator('article').first();
    if (await firstPost.count() > 0) {
      await firstPost.click();
      await expect(page.url()).toContain('/blog/');
    }
  });
});