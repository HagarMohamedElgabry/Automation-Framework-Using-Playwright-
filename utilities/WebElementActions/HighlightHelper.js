/**
 * <h1>HighlightHelper Class</h1>
 * Highlights the elements with borders in different colors for verification.
 * @version : 1.0
 */

const log  = require("../Logger/logger.js");

class HighlightHelper {
  
    /**
     * Highlights the locator with a red border.
     * 
     * @param {Locator} locator Locator of the element to highlight.
     */
    async highlightWebElement(page,selector) {
      try {
        await page.evaluate((el) => {
          el.style.border = '3px solid red';
        }, await selector.elementHandle());
        await log().info(`Element ${selector} highlighted in red successfully.`);
      } catch (error) {
        await log().error(`Error highlighting element ${selector}:`, error.message);
      }
    }
  
    /**
     * Highlights the locator with a green border to indicate success.
     * 
     * @param {Locator} locator Locator of the element to highlight.
     */
    async highlightSuccess(page,selector) {
      try {
        await page.evaluate((el) => {
          el.style.border = '3px solid green';
        }, await selector.elementHandle());
        await log().info(`Element ${selector} highlighted in green successfully.`);
      } catch (error) {
        await log().error(`Error highlighting element ${selector}:`, error.message);
      }
    }
  
    /**
     * Highlights the locator with a red border to indicate failure.
     * 
     * @param {Locator} locator Locator of the element to highlight.
     */
    async highlightFailure(page,selector) {
      try {
        await page.evaluate((el) => {
          el.style.border = '3px solid red';
        }, await selector.elementHandle());
        await log().info(`Element ${selector} highlighted in red successfully.`);
      } catch (error) {
        await log().error(`Error highlighting element ${selector}:`, error.message);
      }
    }
  }
  
  module.exports = HighlightHelper;
  