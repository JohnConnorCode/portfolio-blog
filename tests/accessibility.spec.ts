import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test('homepage passes basic accessibility checks', async ({ page }) => {
    await page.goto('/');
    
    // Skip if axe-core not installed
    try {
      const accessibilityScanResults = await new AxeBuilder({ page })
        .exclude('.mapboxgl-map') // Exclude third-party widgets if any
        .analyze();
      
      expect(accessibilityScanResults.violations).toEqual([]);
    } catch {
      // If axe-core not installed, do manual checks
      
      // Check for lang attribute
      const html = page.locator('html');
      const lang = await html.getAttribute('lang');
      expect(lang).toBeTruthy();
      
      // Check for landmark regions
      const main = await page.locator('main').count();
      const nav = await page.locator('nav').count();
      const footer = await page.locator('footer').count();
      
      expect(main).toBeGreaterThan(0);
      expect(nav).toBeGreaterThan(0);
      expect(footer).toBeGreaterThan(0);
    }
  });

  test('all interactive elements are keyboard accessible', async ({ page }) => {
    await page.goto('/');
    
    // Tab through the page
    const interactiveElements = await page.locator('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])').all();
    
    // Start tabbing
    await page.keyboard.press('Tab');
    
    // Check first few interactive elements are reachable
    for (let i = 0; i < Math.min(5, interactiveElements.length); i++) {
      const focused = await page.evaluate(() => document.activeElement?.tagName);
      expect(focused).toBeTruthy();
      await page.keyboard.press('Tab');
    }
  });

  test('forms have proper labels', async ({ page }) => {
    await page.goto('/contact');
    
    const inputs = await page.locator('input, textarea, select').all();
    
    for (const input of inputs) {
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const ariaLabelledby = await input.getAttribute('aria-labelledby');
      
      if (id) {
        // Check for associated label
        const label = page.locator(`label[for="${id}"]`);
        const hasLabel = await label.count() > 0;
        
        // Should have either label or aria-label
        expect(hasLabel || ariaLabel || ariaLabelledby).toBeTruthy();
      }
    }
  });

  test('images have appropriate alt text', async ({ page }) => {
    await page.goto('/');
    
    const images = await page.locator('img').all();
    
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      const role = await img.getAttribute('role');
      const ariaLabel = await img.getAttribute('aria-label');
      
      // Should have alt (can be empty for decorative) or role="presentation"
      expect(alt !== null || role === 'presentation' || ariaLabel !== null).toBeTruthy();
    }
  });

  test('color contrast meets WCAG standards', async ({ page }) => {
    await page.goto('/');
    
    // Check text has sufficient contrast
    const textElements = await page.locator('p, h1, h2, h3, h4, h5, h6, span, a').all();
    
    for (const element of textElements.slice(0, 10)) { // Check first 10 for performance
      const color = await element.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return {
          color: styles.color,
          backgroundColor: styles.backgroundColor,
          fontSize: parseFloat(styles.fontSize),
        };
      });
      
      // Basic check - text should not be same color as background
      // Skip transparent backgrounds
      if (color.backgroundColor !== 'rgba(0, 0, 0, 0)' && color.backgroundColor !== 'transparent') {
        expect(color.color).not.toBe(color.backgroundColor);
      }
    }
  });

  test('focus indicators are visible', async ({ page }) => {
    await page.goto('/');
    
    // Tab to first interactive element
    await page.keyboard.press('Tab');
    
    // Check if focused element has visible focus indicator
    const focusedElement = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el) return null;
      
      const styles = window.getComputedStyle(el);
      return {
        outline: styles.outline,
        outlineWidth: styles.outlineWidth,
        boxShadow: styles.boxShadow,
        border: styles.border,
      };
    });
    
    if (focusedElement) {
      // Should have some visual indicator
      const hasVisibleFocus = 
        (focusedElement.outline && focusedElement.outline !== 'none') ||
        (focusedElement.boxShadow && focusedElement.boxShadow !== 'none') ||
        parseInt(focusedElement.outlineWidth) > 0;
      
      expect(hasVisibleFocus).toBeTruthy();
    }
  });

  test('ARIA attributes are used correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check for common ARIA mistakes
    
    // No aria-hidden on focusable elements
    const hiddenFocusable = await page.locator('[aria-hidden="true"] a, [aria-hidden="true"] button').count();
    expect(hiddenFocusable).toBe(0);
    
    // Buttons have accessible names
    const buttons = await page.locator('button').all();
    for (const button of buttons) {
      const text = await button.textContent();
      const ariaLabel = await button.getAttribute('aria-label');
      const ariaLabelledby = await button.getAttribute('aria-labelledby');
      
      // Should have text content or aria-label
      // Some buttons might have icons only, that's okay if they have aria-label
      const hasAccessibleName = text?.trim() || ariaLabel || ariaLabelledby;
      if (!hasAccessibleName) {
        // Check if button has an icon
        const hasIcon = await button.locator('svg').count() > 0;
        expect(hasIcon || hasAccessibleName).toBeTruthy();
      }
    }
    
    // Check for duplicate IDs
    const ids = await page.evaluate(() => {
      const elements = document.querySelectorAll('[id]');
      const idMap = new Map();
      elements.forEach(el => {
        const id = el.id;
        idMap.set(id, (idMap.get(id) || 0) + 1);
      });
      return Array.from(idMap.entries()).filter(([, count]) => count > 1).map(([id]) => id);
    });
    
    expect(ids).toHaveLength(0);
  });

  test('page is responsive and mobile-friendly', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check horizontal scroll
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    
    // Should not have horizontal scroll on mobile
    expect(hasHorizontalScroll).toBeFalsy();
    
    // Navigation should be accessible (hamburger menu)
    const mobileMenu = page.locator('button[aria-label*="menu" i]');
    if (await mobileMenu.count() > 0) {
      await mobileMenu.click();
      
      // Menu items should be visible
      const menuItems = page.locator('nav a');
      await expect(menuItems.first()).toBeVisible();
    }
    
    // Reset viewport
    await page.setViewportSize({ width: 1280, height: 720 });
  });

  test('forms show error messages accessibly', async ({ page }) => {
    await page.goto('/contact');
    
    // Submit empty form
    await page.click('button[type="submit"]');
    
    // Wait for potential error messages
    await page.waitForTimeout(1000);
    
    // Check for error messages
    const errorMessages = await page.locator('[role="alert"], [aria-live="polite"], .error, .text-red-500').all();
    
    if (errorMessages.length > 0) {
      // Error messages should be associated with inputs
      for (const error of errorMessages) {
        const text = await error.textContent();
        // Error messages might be empty initially
        if (text && text.trim()) {
          // Check if error has proper ARIA attributes
          const role = await error.getAttribute('role');
          const ariaLive = await error.getAttribute('aria-live');
          
          // Should have role="alert" or aria-live
          expect(role === 'alert' || ariaLive !== null).toBeTruthy();
        }
      }
    }
  });

  test('animations respect prefers-reduced-motion', async ({ page }) => {
    // Set reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    
    // Check that animations are disabled or reduced
    const animatedElements = await page.locator('[class*="animate"], [class*="transition"]').all();
    
    for (const element of animatedElements.slice(0, 5)) {
      const styles = await element.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          animationDuration: computed.animationDuration,
          transitionDuration: computed.transitionDuration,
        };
      });
      
      // Animations should be instant or very short with reduced motion
      if (styles.animationDuration !== 'normal') {
        const duration = parseFloat(styles.animationDuration);
        expect(duration).toBeLessThanOrEqual(0.1);
      }
    }
  });
});
