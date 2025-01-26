/**
 * <h1>Action Helper</h1>
 * Helper class to handle Playwright actions like drag and drop, mouse hover,
 * double click, and more.
 * @version : 1.0
 */

const log  = require("../Logger/logger.js");
const path = require('path');

class ActionHelper {
      
    /**
     * Moves the mouse to the middle of the element.
     * 
     * @param {Locator} element Target element to move to.
     */
    async mouseHover(page,selector) {
      await page.hover(selector);
      await log().info(`Mouse Hover for element ${selector}`);
    }
  
    /**
     * Releases the depressed left mouse button.
     * 
     * @param {selector} element Target element to release the mouse button.
     */
    async mouseHoverRelease(page) {
      await page.mouse.move(0, 0);;
      await log().info(`Mouse Hover Release`);
    }
  
    /**
     * Performs a double-click on the given element.
     * 
     * @param {selector} element Target element to double-click.
     */
    async doubleClick(page,selector) {
      await page.dblclick(selector);
      await log().info(`Double clicked on element ${await page.textContent(selector)}`);
    }
  
    /**
     * Performs drag and drop from the source element to the target element.
     * 
     * @param {selectorsource} source Element to emulate button down at.
     * @param {selectortarget} target Element to move to and release the mouse at.
     */
    async dragAndDrop(page,selectorsource, selectortarget) {
      await page.dragAndDrop(selectorsource, selectortarget);
      await log().info(`Drag and drop from element to target`);
    }
  
    /**
     * Captures the tooltip text of an element.
     * 
     * @param {selector} element Target element to capture tooltip text.
     * @returns {Promise<string>} Tooltip text of the element.
     */
    async captureToolTipText(page,selector) {
      await page.hover(selector);
      const tooltip = await page.getAttribute(selector,'title');
      await log().info(`Captured ToolTip Text: ${tooltip}`);
      return tooltip;
    }
  
    /**
     * Moves a slide bar.
     * 
     * @param {selector} element Target slider element to move.
     * @param {number} xOffset Value to move in the X direction.
     * @param {number} yOffset Value to move in the Y direction.
     */
    async moveSlideBar(page,selector, xOffset, yOffset) {
      const box = await page.selector.boundingBox();
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
      await page.mouse.move(box.x + xOffset, box.y + yOffset);
      await page.mouse.up();
      await log().info(`Slide bar moved with xOffset: ${xOffset} and yOffset: ${yOffset}`);
    }
  
    /**
     * Mouse hovers over and clicks the element.
     * 
     * @param {selector} element Target element to hover and click.
     */
    async mouseHoverAndClickOnElement(page,selector) {
      await page.hover(selector);
      await page.click(selector);
      await log().info(`Mouse hover and clicked element`);
    }

    /**
     * Takes a screenshot and saves it with the provided file name.
     * @param {string} screenshotName - screenshot Name and saved on Screenshots Folder in root Path.
     */
    async takeScreenshot(page, screenshotName) {
      const filePath = path.join('Screenshots', screenshotName);
      await page.screenshot({ path: filePath });
      await log().info(`Taking Screenshot and saved into ${filePath}`);
  }





  }
  
  module.exports = ActionHelper;
  