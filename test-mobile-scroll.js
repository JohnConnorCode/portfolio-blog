const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  
  // Test dark mode
  await page.goto('http://localhost:3001');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'mobile-dark-top.png' });
  
  // Scroll down to see content
  await page.evaluate(() => window.scrollBy(0, 300));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'mobile-dark-scrolled.png' });
  
  // Switch to light mode
  await page.click('button:has(svg)');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'mobile-light.png' });
  
  // Test desktop light mode
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'desktop-light-beach.png' });
  
  await browser.close();
  console.log('Mobile and light mode tests completed');
})();