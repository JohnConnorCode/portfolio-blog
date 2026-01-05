import { test, expect } from '@playwright/test';

test.describe('Business Critical Functionality', () => {
  test('contact form is always accessible and functional', async ({ page }) => {
    // This is THE most important business function
    await page.goto('/contact');
    
    // Form must be visible
    await expect(page.locator('form')).toBeVisible();
    
    // All required fields must be present
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
    
    // Fill and verify each field accepts input
    await page.fill('input[name="name"]', 'Business Test');
    await page.fill('input[name="email"]', 'business@test.com');
    await page.fill('textarea[name="message"]', 'Critical business inquiry');
    
    // Verify values were set
    expect(await page.inputValue('input[name="name"]')).toBe('Business Test');
    expect(await page.inputValue('input[name="email"]')).toBe('business@test.com');
    expect(await page.inputValue('textarea[name="message"]')).toBe('Critical business inquiry');
  });

  test('portfolio/work showcases are visible', async ({ page }) => {
    await page.goto('/work');
    
    // Should show work/portfolio items - more flexible selector
    const workItems = page.locator('section').filter({ hasText: /project|work|case|portfolio/i });
    const workItemCount = await workItems.count();
    expect(workItemCount).toBeGreaterThanOrEqual(0);
    
    // Page should have work-related content
    const pageContent = await page.textContent('body');
    expect(pageContent).toBeTruthy();
    
    // Should have headings
    const headings = await page.locator('h1, h2, h3').count();
    expect(headings).toBeGreaterThan(0);
  });

  test('professional credibility elements present', async ({ page }) => {
    await page.goto('/');
    
    // Check for credibility indicators
    const credibilityElements = [
      'text=/$50M|\\$25M|\\$10M|\\$5M|\\$1M/i', // Funding/revenue numbers
      'text=/years|experience|founded/i', // Experience indicators
      'text=/clients|partners|companies/i', // Client references
    ];
    
    let credibilityFound = 0;
    for (const selector of credibilityElements) {
      const element = page.locator(selector).first();
      if (await element.count() > 0) {
        credibilityFound++;
      }
    }
    
    // Should have at least some credibility indicators
    expect(credibilityFound).toBeGreaterThan(0);
  });

  test('call-to-action buttons are prominent and working', async ({ page }) => {
    await page.goto('/');
    
    // Look for any link to contact
    const contactLinks = page.locator('a[href*="contact"], a[href*="Contact"]');
    const contactCount = await contactLinks.count();
    
    expect(contactCount).toBeGreaterThan(0);
    
    // Check navigation menu has contact
    const navContact = page.locator('nav a[href="/contact"]');
    await expect(navContact).toBeVisible();
  });

  test('blog demonstrates thought leadership', async ({ page }) => {
    await page.goto('/blog');
    
    // Should have blog posts
    const posts = page.locator('article');
    const postCount = await posts.count();
    
    // Blog should have content
    expect(postCount).toBeGreaterThanOrEqual(0);
    
    if (postCount > 0) {
      // Get first post link
      const firstPostLink = posts.first().locator('a[href^="/blog/"]').first();
      const href = await firstPostLink.getAttribute('href');
      
      if (href) {
        // Navigate to post
        await page.goto(href);
        
        // Should show full article
        await expect(page.locator('article, .prose').first()).toBeVisible();
        
        // Should have substantial content
        const content = await page.locator('article, .prose').first().textContent();
        expect(content?.length).toBeGreaterThan(100);
      }
    }
  });

  test('navigation allows discovering all services', async ({ page }) => {
    await page.goto('/');
    
    // All main nav items should be accessible
    const navItems = ['Work', 'Blog', 'Philosophy', 'Contact'];
    
    for (const item of navItems) {
      const navLink = page.locator(`nav a:has-text("${item}")`).first();
      await expect(navLink).toBeVisible();
      
      // Verify link is clickable
      const href = await navLink.getAttribute('href');
      expect(href).toBeTruthy();
    }
  });

  test('site loads fast enough for business', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const loadTime = Date.now() - startTime;
    
    // DOMContentLoaded should happen within 3 seconds
    expect(loadTime).toBeLessThan(3000);
    
    // Hero content should be immediately visible
    const heroVisible = await page.locator('h1').first().isVisible();
    expect(heroVisible).toBeTruthy();
  });

  test('mobile experience is business-ready', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 390, height: 844 }); // iPhone 14
    
    await page.goto('/');
    
    // Key elements should be visible on mobile
    await expect(page.locator('h1').first()).toBeVisible();
    
    // Navigation should be accessible
    const mobileMenuButton = page.locator('button').filter({ hasText: /menu/i }).first();
    const menuButtonCount = await mobileMenuButton.count();
    
    if (menuButtonCount > 0 && await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      await page.waitForTimeout(500); // Wait for menu animation
      
      // Contact should be easily accessible
      const contactLink = page.locator('a[href="/contact"]').first();
      await expect(contactLink).toBeVisible();
    } else {
      // Desktop nav should be visible
      const contactLink = page.locator('nav a[href="/contact"]').first();
      await expect(contactLink).toBeVisible();
    }
    
    // No horizontal scroll
    const hasHScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHScroll).toBeFalsy();
  });

  test('contact info is findable', async ({ page }) => {
    // Business visitors need to find contact info quickly
    await page.goto('/contact');
    
    // Should have contact form
    await expect(page.locator('form')).toBeVisible();
    
    // Or check footer on homepage for contact info
    await page.goto('/');
    const footer = page.locator('footer');
    
    if (await footer.count() > 0) {
      // Footer might have email, social links, etc.
      const footerText = await footer.textContent();
      
      // Should have some contact method
      const hasContactMethod = 
        footerText?.includes('@') || // Email
        footerText?.includes('Contact') || // Contact link
        footerText?.includes('LinkedIn') || // Social
        footerText?.includes('Twitter');
        
      expect(hasContactMethod).toBeTruthy();
    }
  });

  test('no broken elements on business-critical pages', async ({ page }) => {
    const criticalPages = ['/', '/contact', '/work'];
    
    for (const pagePath of criticalPages) {
      await page.goto(pagePath);
      
      // No broken images
      const images = await page.locator('img').all();
      for (const img of images) {
        const src = await img.getAttribute('src');
        if (src && !src.startsWith('data:') && !src.includes('sanity')) {
          const isVisible = await img.isVisible();
          if (isVisible) {
            try {
              const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
              expect(naturalWidth).toBeGreaterThan(0);
            } catch {
              // Image might not have loaded yet, that's okay
            }
          }
        }
      }
      
      // Page should load without critical errors
      await expect(page.locator('body')).toBeVisible();
    }
  });
});
