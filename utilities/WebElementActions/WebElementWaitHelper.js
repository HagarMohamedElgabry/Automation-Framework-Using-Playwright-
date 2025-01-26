/**
 * <h1>Web Element Wait Helper</h1>
 * Helper class to handle web waits in Playwright, including waiting for visibility, 
 * page load completion, and Angular readiness.
 * 
 * @version : 1.0
 */

const log = require("../Logger/logger.js");

class WebElementWaitHelper {

  /**
   * Waits until the specified locator is visible on the page.
   * 
   * @param {Locator} locator Locator of the element to wait for.
   * @param {number} timeout Timeout in milliseconds (default: 5000ms).
   */
  async waitUntilVisibilityOfElementLocated(page, selector, timeout = 5000) {
    try {
      await page.waitForSelector(selector, { state: 'visible', timeout });
      await log().info(`Element ${selector} is visible.`);
    } catch (error) {
      await log().error(`Error waiting for element visibility: ${error.message}`);
    }
  }

  /**
   * Waits for the page to complete loading (document ready state).
   */
  async waitForPageLoad(page) {
    try {
      await page.waitForFunction(() => document.readyState === 'complete', { timeout: 30000 });
      await log().info("Page has completed loading.");
    } catch (error) {
      await log().error(`Error waiting for page load: ${error.message}`);
    }
  }

  /**
   * Waits for navigation after an action.
   */
  async waitForNavigation(page) {
    try {
      await page.waitForNavigation();
      await log().info("Page Navigated completely.");
    } catch (error) {
      await log().error(`Error Navigation to page: ${error.message}`);

    }

  }

  /**
   * Waits until operation to be finished when the DOMContentLoaded event is fired.
   */
  async WaitDOMContentLoaded(page) {

    try {
      await page.waitForLoadState('domcontentloaded');
      await log().info("DOMContentLoaded is completely loaded.");

    } catch (error) {
      await log().error(`Error in loading DOMContentLoaded: ${error.message}`);
    }

  }


  /**
   * Waits until operation to be finished when there are no  for at least 500 ms.
   */
  async WaitNetworkConnections(page) {

    try {
      await page.waitForLoadState('networkidle');
      await log().info("Waiting till network connections back.");

    } catch (error) {
      await log().error(`Error in retrieve network connection: ${error.message}`);
    }

  }

  /**
   * Waits for Angular to finish loading (pending HTTP requests to be 0).
   */
  async waitForAngularLoad(page) {
    const angularReadyScript = `return window.angular ? window.angular.element(document.body).injector().get('$http').pendingRequests.length === 0 : true;`;

    try {
      await page.waitForFunction(angularReadyScript, { timeout: 30000 });
      await log().info("Angular has finished loading.");
    } catch (error) {
      await log().error(`Error waiting for Angular load: ${error.message}`);
    }
  }

  /**
    * Waits for respone to finish loading (pending till the request is loaded).
    */
  async waitForResponse(page, WaitedResponse) {
    try {
      await page.waitForResponse(WaitedResponse);
      await log().info("Response has finished loading.");
    } catch (error) {
      await log().error(`Error waiting for response load: ${error.message}`);
    }
  }


}

module.exports = WebElementWaitHelper;
