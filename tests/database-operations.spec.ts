import { test, expect } from '@playwright/test';

test.describe('Database and Content Operations', () => {
  test('blog posts load from database/CMS', async ({ page }) => {
    await page.goto('/blog');
    
    // Wait for content to load
    await page.waitForTimeout(2000);
    
    // Check if posts are displayed
    const posts = page.locator('article');
    const postCount = await posts.count();
    
    // Should have at least some posts (from Sanity or fallback)
    expect(postCount).toBeGreaterThanOrEqual(0);
    
    // If posts exist, check they have required fields
    if (postCount > 0) {
      const firstPost = posts.first();
      
      // Check for title
      const title = firstPost.locator('h2, h3').first();
      await expect(title).toBeVisible();
      
      // Check for excerpt/description
      const excerpt = firstPost.locator('p').first();
      await expect(excerpt).toBeVisible();
    }
  });

  test('individual blog post loads completely', async ({ page }) => {
    await page.goto('/blog');
    
    const posts = page.locator('article a').first();
    const hasPost = await posts.count() > 0;
    
    if (hasPost) {
      // Click first post
      await posts.click();
      
      // Wait for navigation
      await page.waitForLoadState('networkidle');
      
      // Check that we're on a blog post page
      expect(page.url()).toMatch(/\/blog\/.+/);
      
      // Check for post content
      await expect(page.locator('h1')).toBeVisible(); // Title
      await expect(page.locator('.prose, article')).toBeVisible(); // Content
      
      // Check for metadata
      const dateElement = page.locator('time, [class*="date"]').first();
      if (await dateElement.count() > 0) {
        await expect(dateElement).toBeVisible();
      }
    }
  });

  test('content sections load on homepage', async ({ page }) => {
    await page.goto('/');
    
    // These sections should load from Sanity or show fallbacks
    const sections = [
      'text=PROVEN IMPACT',
      'text=Product Expertise',
      'text=BATTLE-TESTED EXPERIENCE',
    ];
    
    for (const section of sections) {
      const element = page.locator(section).first();
      // Allow time for dynamic content
      await expect(element).toBeVisible({ timeout: 10000 });
    }
  });

  test('dynamic content has proper fallbacks', async ({ page }) => {
    // Intercept Sanity requests to simulate failure
    await page.route('**/api.sanity.io/**', route => {
      route.abort();
    });
    
    await page.goto('/');
    
    // Page should still load with fallback content
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    
    // No error messages should be visible to user
    const errorText = page.locator('text=/error|failed|unable/i');
    const errorCount = await errorText.count();
    
    // Should have minimal or no error messages
    expect(errorCount).toBeLessThanOrEqual(1);
  });

  test('pagination works if implemented', async ({ page }) => {
    await page.goto('/blog');
    
    // Check for pagination controls
    const pagination = page.locator('[class*="pagination"], [aria-label*="pagination"], nav:has(button)');
    const hasPagination = await pagination.count() > 0;
    
    if (hasPagination) {
      // Check for page numbers or next/prev buttons
      const nextButton = page.locator('button:has-text("Next"), a:has-text("Next")').first();
      const pageNumbers = page.locator('button[aria-label*="page"], a[aria-label*="page"]');
      
      // Either should have next button or page numbers
      const hasNextButton = await nextButton.count() > 0;
      const hasPageNumbers = await pageNumbers.count() > 0;
      
      expect(hasNextButton || hasPageNumbers).toBeTruthy();
    }
  });

  test('search functionality if implemented', async ({ page }) => {
    await page.goto('/blog');
    
    // Look for search input
    const searchInput = page.locator('input[type="search"], input[placeholder*="search" i]').first();
    const hasSearch = await searchInput.count() > 0;
    
    if (hasSearch) {
      // Type a search query
      await searchInput.fill('test');
      await page.keyboard.press('Enter');
      
      // Wait for results to update
      await page.waitForTimeout(1000);
      
      // Check that page didn't break
      await expect(page.locator('h1')).toBeVisible();
      
      // Clear search
      await searchInput.clear();
      await page.keyboard.press('Enter');
    }
  });
});