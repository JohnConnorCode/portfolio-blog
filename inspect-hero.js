const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  
  // Get the full hero section HTML
  const heroHTML = await page.locator('section').first().innerHTML();
  
  // Find divs with class containing 'grid'
  const gridDivs = await page.locator('div').evaluateAll(divs => 
    divs.filter(div => div.className.includes('grid')).map(div => ({
      className: div.className,
      innerHTML: div.innerHTML.substring(0, 100)
    }))
  );
  
  console.log('Divs with grid in class:', gridDivs);
  
  // Look for the specific hero-grid div
  const heroGridHTML = heroHTML.match(/<div[^>]*hero-grid[^>]*>.*?<\/div>/);
  console.log('Hero grid HTML:', heroGridHTML ? heroGridHTML[0] : 'NOT FOUND');
  
  await browser.close();
})();
