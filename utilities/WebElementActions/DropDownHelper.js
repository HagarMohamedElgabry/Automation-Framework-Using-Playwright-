/**
 * <h1>DropDown Helper</h1>
 * Helper class to handle dropdown actions in Playwright, like selecting by value, index, or visible text.
 * @version : 1.0
 */

const log  = require("../Logger/logger.js");

class DropDownHelper {

  /**
   * Select an option with a value matching the provided string.
   * 
   * @param {Locator} dropdownLocator Locator of the dropdown element.
   * @param {string} value The value to match against.
   */
  async selectUsingValue(page,dropdownLocator, value) {
    await page.selectOption(dropdownLocator,{ value });
    await log().info(`DropDown Select Using Value: ${value}`);
  }

  /**
   * Select an option at the given index.
   * 
   * @param {Locator} dropdownLocator Locator of the dropdown element.
   * @param {number} index The index of the option to select.
   */
  async selectUsingIndex(page,dropdownLocator, index) {
    await page.selectOption(dropdownLocator,{ index });
    await log().info(`DropDown Select Using Index: ${index}`);
  }

  /**
   * Select an option with text matching the provided visible text.
   * 
   * @param {Locator} dropdownLocator Locator of the dropdown element.
   * @param {string} visibleText The visible text to match against.
   */
  async selectUsingVisibleText(page,dropdownLocator, visibleText) {
    await page.selectOption(dropdownLocator,{ label:  visibleText });
    await log().info(`DropDown Select Using Visible Text: ${visibleText}`);
  }
}

module.exports = DropDownHelper;
