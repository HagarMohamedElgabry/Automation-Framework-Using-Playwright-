/**
 * <h1>Frame Helper</h1>
 * Helper class to manage frame actions in Playwright, like switching to a frame
 * by index or returning to the main content.
 * @version : 1.0
 */

const log  = require("../Logger/logger.js");

class FrameHelper {

  /**
   * Switches to a frame by its Name.
   * 
   * @param {number} frameName The name of the frame to switch to.
   */
  async switchToFrameByName(page, frameName) {

    const frame = page.frame({ name: frameName });
    await log().info(`Switched to frame Named: ${frameName}`);
    return frame;
  }

  /**
     * Switches to a frame by its index.
     * 
     * @param {number} frameIndex The index of the frame to switch to.
     */
  async switchToFrameByIndex(page, frameIndex) {
    const frames = await page.frames();
    if (frameIndex < 0 || frameIndex >= frames.length) {
      throw new Error(`Invalid frame index: ${frameIndex}. Total frames: ${frames.length}`);
    }
    const frame = frames[frameIndex];
    await await log().info(`Switched to frame at index: ${frameIndex}`);
    return frame;
  }

  /**
   * Switches to a frame by its index.
   * 
   * @param {number} frameIndex The index of the frame to switch to.
   */
  async switchToFrameByClass(page, frameClassName) {
    const iframeElementHandle = await page.$(`iframe.${frameClassName}`); // Replace 'className' with the actual class name of the iframe

    if (iframeElementHandle) {
      // Get the frame associated with the iframe element
      const frame = await iframeElementHandle.contentFrame();

      if (frame) {
        await log().info(`Switched to frame: ${frame.url()}`);
        // Perform actions in the frame
        return frame;
      } else {
        await log().info('Frame not found.');
      }
    } else {
      await log().info('Iframe with the specified class name not found.');
      return null;
    }
  }

  /**
   * Switches back to the main content (parent frame).
   */
  async switchToParentWindow(page) {
    await page.mainFrame();
    await log().info('Switched to the main (parent) content.');
  }
}

module.exports = FrameHelper;
