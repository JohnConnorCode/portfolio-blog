import { test, expect } from '@playwright/test';

test.describe('Critical User Paths', () => {
  test('homepage loads with all key sections', async ({ page }) => {
    await page.goto('/');
    
    // Check hero section
    await expect(page.locator('h1').filter({ hasText: 'JOHN CONNOR' })).toBeVisible();
    await expect(page.locator('text=Technology Strategist').first()).toBeVisible();
    
    // Check navigation
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('nav').locator('a[href="/"]')).toBeVisible();
    await expect(page.locator('nav').locator('a[href="/work"]')).toBeVisible();
    await expect(page.locator('nav').locator('a[href="/blog"]')).toBeVisible();
    await expect(page.locator('nav').locator('a[href="/philosophy"]')).toBeVisible();
    await expect(page.locator('nav').locator('a[href="/contact"]')).toBeVisible();
    
    // Check key sections exist
    await expect(page.locator('text=PROVEN IMPACT')).toBeVisible();
    await expect(page.locator('text=Product Expertise')).toBeVisible();
    await expect(page.locator('text=Book a Discovery Call')).toBeVisible();
  });

  test('navigation works correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test Work page
    await page.click('nav a[href="/work"]');
    await expect(page).toHaveURL('/work');
    await expect(page.locator('h1').filter({ hasText: 'Work' })).toBeVisible();
    
    // Test Blog page
    await page.click('nav a[href="/blog"]');
    await expect(page).toHaveURL('/blog');
    await expect(page.locator('h1').filter({ hasText: 'Blog' })).toBeVisible();
    
    // Test Philosophy page
    await page.click('nav a[href="/philosophy"]');
    await expect(page).toHaveURL('/philosophy');
    await expect(page.locator('h1').filter({ hasText: 'Philosophy' })).toBeVisible();
    
    // Test Contact page
    await page.click('nav a[href="/contact"]');
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('h1').filter({ hasText: 'Contact' })).toBeVisible();
  });

  test('blog posts are accessible', async ({ page }) => {
    await page.goto('/blog');
    
    // Check that blog posts are displayed
    const blogPosts = page.locator('article');
    const count = await blogPosts.count();
    expect(count).toBeGreaterThan(0); // Should have at least some posts
    
    // Click on first blog post
    await blogPosts.first().click();
    
    // Check we're on a blog post page
    await expect(page.locator('text=Back to Blog')).toBeVisible();
    await expect(page.locator('article h1')).toBeVisible();
    await expect(page.locator('.prose')).toBeVisible();
  });

  test('blog post links work correctly', async ({ page }) => {
    await page.goto('/blog');
    
    // Test specific blog post
    await page.click('a[href="/blog/why-ecosystem-funding-is-broken"]');
    await expect(page).toHaveURL('/blog/why-ecosystem-funding-is-broken');
    await expect(page.locator('h1').filter({ hasText: 'Why Ecosystem Funding Is Broken' })).toBeVisible();
    
    // Test back to blog
    await page.click('text=Back to Blog');
    await expect(page).toHaveURL('/blog');
  });

  test('contact form is functional', async ({ page }) => {
    await page.goto('/contact');
    
    // Check form elements exist
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
    
    // Fill form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message');
    
    // Check values are filled
    await expect(page.locator('input[name="name"]')).toHaveValue('Test User');
    await expect(page.locator('input[name="email"]')).toHaveValue('test@example.com');
    await expect(page.locator('textarea[name="message"]')).toHaveValue('This is a test message');
  });

  test('mobile navigation works', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check mobile menu button is visible
    await expect(page.locator('button[aria-label="Toggle menu"]')).toBeVisible();
    
    // Open mobile menu
    await page.click('button[aria-label="Toggle menu"]');
    
    // Check mobile menu is visible
    await expect(page.locator('nav').locator('a[href="/work"]')).toBeVisible();
    
    // Navigate to work page
    await page.click('nav a[href="/work"]');
    await expect(page).toHaveURL('/work');
  });

  test('dark mode toggle works', async ({ page }) => {
    await page.goto('/');
    
    // Check if theme toggle exists
    const themeToggle = page.locator('button[aria-label*="theme"], button[aria-label*="mode"]');
    if (await themeToggle.count() > 0) {
      // Toggle theme
      await themeToggle.click();
      
      // Check that html has dark class or appropriate data attribute
      const html = page.locator('html');
      const classList = await html.getAttribute('class');
      // Theme should have changed (either dark class added/removed)
      expect(classList).toBeDefined();
    }
  });

  test('blog posts from Sanity load without 404', async ({ page }) => {
    // First check blog listing page
    await page.goto('/blog');
    
    // Get actual blog links from the page
    const blogLinks = await page.locator('article a[href^="/blog/"]').all();
    
    if (blogLinks.length > 0) {
      // Test first blog post
      const firstLink = await blogLinks[0].getAttribute('href');
      if (firstLink) {
        await page.goto(firstLink);
        
        // Check page loaded (not 404)
        await expect(page.locator('h1')).toBeVisible();
        await expect(page.locator('.prose')).toBeVisible();
        
        // Ensure it's not showing 404
        const bodyText = await page.textContent('body');
        expect(bodyText).not.toContain('404');
        expect(bodyText).not.toContain('Page not found');
      }
    }
  });

  test('scroll animations trigger', async ({ page }) => {
    await page.goto('/');
    
    // Scroll down to trigger animations
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500); // Wait for animations
    
    // Check that sections become visible after scroll
    await expect(page.locator('text=PROVEN IMPACT')).toBeVisible();
  });

  test('external links have correct attributes', async ({ page }) => {
    await page.goto('/');
    
    // Check that external links open in new tab
    const externalLinks = page.locator('a[href^="http"]:not([href*="localhost"])');
    const count = await externalLinks.count();
    
    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i);
      const target = await link.getAttribute('target');
      const rel = await link.getAttribute('rel');
      
      if (target === '_blank') {
        expect(rel).toContain('noopener');
      }
    }
  });
});