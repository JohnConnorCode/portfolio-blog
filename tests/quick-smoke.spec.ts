import { test, expect } from '@playwright/test';

test.describe('Quick Smoke Tests', () => {
  test('site is running and homepage loads', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
    await expect(page.locator('nav')).toBeVisible();
  });

  test('blog works without 404', async ({ page }) => {
    const response = await page.goto('/blog');
    expect(response?.status()).not.toBe(404);
    
    // Check blog posts are displayed
    await expect(page.locator('article').first()).toBeVisible();
  });
});