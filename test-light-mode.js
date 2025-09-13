const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set light mode
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('http://localhost:3000');
  
  await page.screenshot({ path: 'hero-light-mode.png', fullPage: false });
  
  await browser.close();
})();
