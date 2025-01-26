/**
 * <h1>Page Scroll Helper</h1>
 * Helper class to handle page scroll actions in Playwright, such as scrolling
 * by pixels, scrolling to the top, bottom, or a specific element.
 * @version : 1.0
 */

const log  = require("../Logger/logger.js");

class PageScrollHelper {
  
    /**
     * Scroll according to the given xPixels and yPixels.
     * 
     * @param {number} xPixels Number of pixels to scroll horizontally.
     * @param {number} yPixels Number of pixels to scroll vertically.
     */
    async scrollByAxisPixels(page,xPixels, yPixels) {
      await page.evaluate(([x, y]) => {
        window.scrollBy(x, y);
      }, [xPixels, yPixels]);
      await log().info(`Scrolled by ${xPixels} pixels horizontally and ${yPixels} pixels vertically.`);
    }
  
    /**
     * Scroll down to the end of the page.
     */
    async scrollDownToEndOfPage(page) {
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await log().info("Scrolled down to the end of the page.");
    }
  
    /**
     * Scroll up to the top of the page.
     */
    async scrollUpToTopOfPage(page) {
      await page.evaluate(() => {
        window.scrollTo(0, 0);
      });
      await log().info("Scrolled up to the top of the page.");
    }
  
    /**
     * Scroll until the element is visible in the viewport.
     * 
     * @param {Locator} element Locator of the element to scroll into view.
     */
    async scrollTillElementVisible(page,selector) {
      await page.waitForSelector(selector, { state: 'visible'});
      await page.locator(selector).scrollIntoViewIfNeeded();
      await log().info(`Scrolled until the element ${selector} is visible.`);
  }





  }
  
  module.exports = PageScrollHelper;
  