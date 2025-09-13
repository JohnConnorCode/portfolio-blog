const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Test dark mode (default)
  await page.goto('http://localhost:3001');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'test-dark-theme.png' });
  
  // Click theme toggle to switch to light mode
  await page.click('button:has(svg)');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'test-light-theme.png' });
  
  // Click again to go back to dark mode
  await page.click('button:has(svg)');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'test-dark-theme-2.png' });
  
  await browser.close();
  console.log('Theme tests completed');
})();