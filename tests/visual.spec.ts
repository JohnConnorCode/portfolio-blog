import { test, expect } from '@playwright/test'

test.describe('Visual Tests', () => {
  test('hero grid should be visible', async ({ page }) => {
    // Start the dev server first if not running
    await page.goto('http://localhost:3000')
    
    // Wait for the hero section to load
    await page.waitForSelector('section')
    
    // Check if the grid is visible
    const gridElement = await page.locator('.absolute.inset-x-0.bottom-0.h-full').first()
    await expect(gridElement).toBeVisible()
    
    // Take a screenshot for visual verification
    await page.screenshot({ 
      path: 'tests/screenshots/hero-grid.png',
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 720 }
    })
    
    // Check the grid has the perspective transform
    const transform = await gridElement.evaluate(el => 
      window.getComputedStyle(el).transform
    )
    expect(transform).not.toBe('none')
    
    // Check grid background is set
    const backgroundImage = await gridElement.evaluate(el => 
      window.getComputedStyle(el).backgroundImage
    )
    expect(backgroundImage).toContain('linear-gradient')
  })
  
  test('grid extends full width on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('http://localhost:3000')
    
    const gridElement = await page.locator('.absolute.inset-x-0.bottom-0.h-full').first()
    const box = await gridElement.boundingBox()
    
    // Grid should extend full viewport width
    expect(box?.width).toBeGreaterThanOrEqual(1920)
    
    await page.screenshot({ 
      path: 'tests/screenshots/hero-grid-desktop.png',
      fullPage: false
    })
  })
  
  test('grid visible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('http://localhost:3000')
    
    const gridElement = await page.locator('.absolute.inset-x-0.bottom-0.h-full').first()
    await expect(gridElement).toBeVisible()
    
    await page.screenshot({ 
      path: 'tests/screenshots/hero-grid-mobile.png',
      fullPage: false
    })
  })
})