/**
 * <h1>Cookie Helper</h1>
 * Helper class to handle Playwright Cookies like addCookie, deleteCookie, getAllCookies, getCookie and more.
 * @version : 1.0
 */

const log = require("../Logger/logger.js");

class CookieHelper {
  /**
   * Add a cookie to the browser context.
   * @param {Page} page - The Playwright Page object.
   * @param {Object} cookie - The cookie object (e.g., { name, value, domain, path, etc. }).
   */
  async addCookie(page, cookie) {
    await log().info(`Adding cookie: ${JSON.stringify(cookie)}`);
    await page.context().addCookies([cookie]);
  }


  /**
      * Add a cookie to the browser context.
      * @param {Page} page - The Playwright Page object.
      * @param {Object} cookies - The cookie object (e.g., [{ name, value, domain, path, etc. }]).
      */
  async addCookies(page, cookies) {
    await log().info(`Adding cookies: ${JSON.stringify(cookies)}`);
    await page.context().addCookies(cookies);
  }


  /**
   * Delete a specific cookie by its name.
   * @param {Page} page - The Playwright Page object.
   * @param {string} cookieName - The name of the cookie to delete.
   */
  async deleteCookie(page, cookieName) {
    const cookies = await page.context().cookies();
    const cookieToDelete = cookies.find((cookie) => cookie.name === cookieName);
    if (cookieToDelete) {
      await page.context().clearCookies();
      await log().info(`Deleted cookie with name: ${cookieName}`);
    } else {
      await log().error(`Cookie with name ${cookieName} not found.`);
    }
  }

  /**
   * Get all cookies from the browser context.
   * @param {Page} page - The Playwright Page object.
   * @returns {Promise<Array>} - An array of all cookies.
   */
  async getAllCookies(page) {
    const cookies = await page.context().cookies();
    await log().info('All Cookies:', cookies);
    return cookies;
  }

  /**
   * Get a specific cookie by its name.
   * @param {Page} page - The Playwright Page object.
   * @param {string} cookieName - The name of the cookie to retrieve.
   * @returns {Promise<Object|null>} - The cookie object or null if not found.
   */
  async getCookie(page, cookieName) {
    const cookies = await page.context().cookies();
    const cookie = cookies.find((cookie) => cookie.name === cookieName);
    await log().info(`Retrieved cookie: ${JSON.stringify(cookie)}`);
    return cookie || null;
  }
}

module.exports = CookieHelper;
