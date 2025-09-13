const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  
  // Check if hero-grid element exists
  const gridExists = await page.locator('.hero-grid').count();
  console.log('Grid elements found:', gridExists);
  
  // Get the computed styles if it exists
  if (gridExists > 0) {
    const styles = await page.locator('.hero-grid').first().evaluate(el => {
      const computed = window.getComputedStyle(el);
      return {
        display: computed.display,
        opacity: computed.opacity,
        background: computed.background,
        backgroundImage: computed.backgroundImage,
        transform: computed.transform,
        zIndex: computed.zIndex
      };
    });
    console.log('Grid styles:', styles);
  }
  
  // Check the HTML structure
  const heroHTML = await page.locator('section').first().innerHTML();
  console.log('Hero contains grid?', heroHTML.includes('hero-grid'));
  
  await browser.close();
})();
