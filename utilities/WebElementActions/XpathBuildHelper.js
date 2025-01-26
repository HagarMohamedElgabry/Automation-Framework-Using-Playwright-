/**
 * <h1>XpathBuild Helper</h1>
 * Helper class to build dynamic XPaths for Playwright locators.
 * 
 * @version : 1.0
 */

const log  = require("../Logger/logger.js");

class XpathBuildHelper {
    /**
     * Builds the final XPath of dynamic elements by replacing a placeholder with a string value.
     * 
     * @param {string} dynamicXpath The dynamic XPath containing the placeholder `<<<>>>`.
     * @param {string} replacementValue The value to replace the placeholder.
     * @returns {string} The final XPath with the placeholder replaced.
     */
    static getDynamicXpath(dynamicXpath, replacementValue) {
      const finalXpath = dynamicXpath.replace('<<<>>>', replacementValue);
      log().info(`Dynamic XPath created: ${finalXpath}`);
      return finalXpath;
    }
  
    /**
     * Builds the final XPath of dynamic elements by replacing a placeholder with a numeric value.
     * 
     * @param {string} dynamicXpath The dynamic XPath containing the placeholder `<<<>>>`.
     * @param {number} replacementValue The numeric value to replace the placeholder.
     * @returns {string} The final XPath with the placeholder replaced.
     */
    static getDynamicXpathWithNumber(dynamicXpath, replacementValue) {
      const finalXpath = dynamicXpath.replace('<<<>>>', replacementValue.toString());
      log().info(`Dynamic XPath created: ${finalXpath}`);
      return finalXpath;
    }
  }
  
  module.exports = XpathBuildHelper;
  