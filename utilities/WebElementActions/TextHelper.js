/**
 * <h1>Text Helper</h1>
 * A helper class for Playwright to manage locators, setText, getText, clearText and more. 
 * @version : 1.0
 */
const log = require("../Logger/logger.js");

class textHelper {

    /**
     * Sends value to the text element.
     * @param {Page} page - The Playwright Page object.
     * @param {string} selector - The selector of the element to send the value to.
     * @param {string} value - The value to send.
     */
    async setText(page, selector, value) {
        await page.fill(selector, ''); // Clear existing value
        await page.fill(selector, value);
        await log().info(`Send Keys for ${selector} with value ${value}`);

    }

    /**
     * Gets the visible text of an element.
     * @param {Page} page - The Playwright Page object.
     * @param {string} selector - The selector of the element to get the text from.
     * @return {Promise<string>} - The text value of the given element.
     */
    async getText(page, selector) {
        await log().info(`Get text for element ${selector}`);
        return await page.textContent(selector);
    }

    /**
     * Clears the value of a text element.
     * @param {Page} page - The Playwright Page object.
     * @param {string} selector - The selector of the element to clear.
     */
    async clearText(page, selector) {
        await page.fill(selector, '');
        await log().info(`Clear text for element ${selector}`);
    }

    /**
   * Types text using JavaScript Executor.
   * @param {Page} page - The Playwright Page object.
   * @param {string} selector - The selector of the element to type text on.
   * @param {string} value - The value to type.
   */
    async typeUsingJS(page, selector, value) {
        await page.evaluate((sel, val) => {
            const element = document.querySelector(sel);
            if (element) {
                element.value = val;
            }
        }, selector, value);
        await log().info(`Send Keys using JavaScript for ${selector} with value ${value}`);
    }

}

module.exports = textHelper;
