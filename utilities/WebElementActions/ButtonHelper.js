/**
 * <h1>Button Helper</h1>
 * Helper class to handle Playwright actions like click, isSelected, 
 * isButtonEnabled and hoverAndClick and more.
 * @version : 1.0
 */

const log  = require("../Logger/logger.js");

class ButtonHelper {

  /**
   * Click on the element by its selector.
   * @param {Page} page - The Playwright Page object.
   * @param {string} selector - The CSS selector of the button to click.
   */
  async click(page, selector) {
    await page.waitForSelector(selector, { state: 'visible' });
    await page.click(selector);
    await log().info(`Clicked on element with selector: ${selector}`);
  }

  /**
   * Click on the element directly using JavaScript if standard click fails.
   * @param {Page} page - The Playwright Page object.
   * @param {string} selector - The CSS selector of the button to click.
   */
  async clickUsingJSExecutor(page, selector) {
    await page.evaluate((sel) => {
      const element = document.querySelector(sel);
      if (element) {
        element.click();
      }
    }, selector);
    await log().info(`Clicked using JavaScript on element with selector: ${selector}`);
  }

  /**
   * Check if a button is enabled.
   * @param {Page} page - The Playwright Page object.
   * @param {string} selector - The CSS selector of the button.
   * @returns {Promise<boolean>} - True if the button is enabled, false otherwise.
   */
  async isButtonEnabled(page, selector) {
    const isEnabled = await page.isEnabled(selector);
    await log().info(`Button with selector ${selector} is enabled: ${isEnabled}`);
    return isEnabled;
  }

  /**
   * Check if a button is selected (for radio or checkbox buttons).
   * @param {Page} page - The Playwright Page object.
   * @param {string} selector - The CSS selector of the button.
   * @returns {Promise<boolean>} - True if the button is selected, false otherwise.
   */
  async isButtonSelected(page, selector) {
    const isSelected = await page.isChecked(selector);
    await log().info(`Button with selector ${selector} is selected: ${isSelected}`);
    return isSelected;
  }

  /**
   * Hover over one element and click another.
   * @param {Page} page - The Playwright Page object.
   * @param {string} hoverSelector - The CSS selector of the element to hover over.
   * @param {string} clickSelector - The CSS selector of the element to click.
   */
  async hoverAndClick(page, hoverSelector, clickSelector) {
    await page.hover(hoverSelector);
    await log().info(`Hovered over element with selector: ${hoverSelector}`);
    await page.click(clickSelector);
    await log().info(`Clicked on element with selector: ${clickSelector}`);
  }
}

module.exports = ButtonHelper;
