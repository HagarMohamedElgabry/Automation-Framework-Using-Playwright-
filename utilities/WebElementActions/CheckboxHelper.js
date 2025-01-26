/**
 * <h1>Checkbox Helper</h1>
 * Helper class to handle Playwright actions like checkOnCheckbox, unCheckOnCheckbox, 
 * checkOnAllCheckboxs, unCheckOnAllCheckboxs, and more.
 * @version : 1.0
 */

const log  = require("../Logger/logger.js");

class CheckBoxHelper {
  /**
   * Check a checkbox for the given selector.
   * @param {Page} page - The Playwright Page object.
   * @param {string} selector - The CSS selector of the checkbox to check.
   */
  async checkOnCheckbox(page, selector) {
    const isChecked = await page.isChecked(selector);
    if (!isChecked) {
      await page.click(selector);
      await log().info(`Checked the checkbox with selector: ${selector}`);
    }
  }

  /**
   * Uncheck a checkbox for the given selector.
   * @param {Page} page - The Playwright Page object.
   * @param {string} selector - The CSS selector of the checkbox to uncheck.
   */
  async unCheckOnCheckbox(page, selector) {
    const isChecked = await page.isChecked(selector);
    if (isChecked) {
      await page.click(selector);
      await log().info(`Unchecked the checkbox with selector: ${selector}`);
    }
  }

  /**
   * Uncheck all checkboxes matching the given selector.
   * @param {Page} page - The Playwright Page object.
   * @param {string} selector - The CSS selector of the checkboxes to uncheck.
   */
  async uncheckAllCheckboxes(page, selector) {
    const checkboxes = await page.locator(selector).elementHandles();
    for (const checkbox of checkboxes) {
      const isDisplayed = await checkbox.isVisible();
      const isChecked = await checkbox.isChecked();
      if (isDisplayed && isChecked) {
        await checkbox.click();
        await log().info(`Unchecked a checkbox matching selector: ${selector}`);
      }
    }
  }

  /**
   * Check all checkboxes matching the given selector.
   * @param {Page} page - The Playwright Page object.
   * @param {string} selector - The CSS selector of the checkboxes to check.
   */
  async checkAllCheckboxes(page, selector) {
    const checkboxes = await page.locator(selector).elementHandles();
    for (const checkbox of checkboxes) {
      const isDisplayed = await checkbox.isVisible();
      const isChecked = await checkbox.isChecked();
      if (isDisplayed && !isChecked) {
        await checkbox.click();
        await log().info(`Checked a checkbox matching selector: ${selector}`);
      }
    }
  }
}

module.exports = CheckBoxHelper;
