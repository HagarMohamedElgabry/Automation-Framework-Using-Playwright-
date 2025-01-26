/**
 * <h1>Window Helper</h1>
 * Helper class to manage browser window actions in Playwright, such as navigating back, forward, refreshing the page, and more.
 * 
 * @version : 1.0
 */

const log  = require("../Logger/logger.js");

class WindowHelper {
  
    /**
     * Move back a single "item" in the browser's history.
     */
    async goBack(page) {
      try {
        await page.goBack();
        await log().info("Navigated back in browser history.");
      } catch (error) {
        await log().error(`Error navigating back: ${error.message}`);
      }
    }
  
    /**
     * Move a single "item" forward in the browser's history.
     */
    async goForward(page) {
      try {
        await page.goForward();
        await log().info("Navigated forward in browser history.");
      } catch (error) {
        await log().error(`Error navigating forward: ${error.message}`);
      }
    }
  
    /**
     * Refresh the current page.
     */
    async refreshPage(page) {
      try {
        await page.reload();
        await log().info("Page refreshed.");
      } catch (error) {
        await log().error(`Error refreshing page: ${error.message}`);
      }
    }
  
    /**
     * Load a new web page in the current browser window.
     * 
     * @param {string} url The URL to navigate to.
     */
    async goTo(page,url) {
      try {
        await page.goto(url);
        await log().info(`Navigated to URL: ${url}`);
      } catch (error) {
        await log().error(`Error navigating to URL ${url}: ${error.message}`);
      }
    }
  }
  
  module.exports = WindowHelper;
  