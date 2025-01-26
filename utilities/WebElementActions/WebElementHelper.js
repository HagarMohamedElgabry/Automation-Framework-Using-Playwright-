/**
 * <h1>Web Element Helper</h1>
 * A helper class for Playwright to manage locators, check visibility, fetch attributes, and more. 
 * @version : 1.0
 */

const log  = require("../Logger/logger.js");

class WebElementHelper {
  
    /**
     * Checks if an element is displayed on the page.
     * 
     * @param {Locator} locator Locator of the element.
     * @returns {Promise<boolean>} True if the element is displayed, false otherwise.
     */
    async isElementDisplayed(page,selector) {
      try {
        const isVisible = await page.isVisible(selector);
        await log().info(`Element displayed: ${isVisible}`);
        return isVisible;
      } catch (error) {
        await log().error(`Error checking if element is displayed: ${error.message}`);
        return false;
      }
    }
  
    /**
     * Gets the attribute of an element.
     * 
     * @param {Locator} locator Locator of the element.
     * @param {string} attribute Name of the attribute to fetch.
     * @returns {Promise<string|null>} The value of the attribute, or null if it doesn't exist.
     */
    async getAttributeOfElement(page,selector, attribute) {
      try {
        const value = await page.getAttribute(selector,attribute);
        await log().info(`Attribute value for ${attribute}: ${value}`);
        return value;
      } catch (error) {
        await log().error(`Error fetching attribute: ${error.message}`);
        return null;
      }
    }
  
    /**
     * Checks if an element is present in the DOM.
     * 
     * @param {Locator} locator Locator of the element.
     * @returns {Promise<boolean>} True if the element is present, false otherwise.
     */
    async isElementPresent(page,selector) {
      try {
        const count = await page.locator(selector).count();
        const isPresent = count > 0;
        await log().info(`Element present: ${isPresent}`);
        return isPresent;
      } catch (error) {
        await log().error(`Error checking element presence: ${error.message}`);
        return false;
      }
    }
  
    /**
     * Transforms a locator into a DOM element handle.
     * 
     * @param {Locator} locator Locator of the element.
     * @returns {Promise<ElementHandle|null>} The element handle, or null if not found.
     */
    async webElmCreate(page,selector) {
      try {
        const elementHandle = await page.locator(selector).elementHandle();
        await log().info(`Element handle created: ${elementHandle ? 'Success' : 'Failure'}`);
        return elementHandle;
      } catch (error) {
        await log().error(`Error creating element handle: ${error.message}`);
        return null;
      }
    }
  }
  
  module.exports = WebElementHelper;
  