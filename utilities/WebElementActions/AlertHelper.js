/**
 * <h1>Alert Helper</h1>
 * Alert Helper class handles Playwright Alerts like accepting alerts,
 * dismissing alerts, capturing the alert message, and more.
 * @version : 1.0
 */

const log  = require("../Logger/logger.js");

class AlertHelper {

  /**
   * Handles the alert dialog using a callback function.
   * 
   * @param {function} callback Function to handle the alert (accept, dismiss, etc.).
   */
  async handleAlert(page, callback) {
    page.on('dialog', async (dialog) => {
      await log().info(`Alert text: ${dialog.message()}`);
      await callback(dialog);
    });
  }

  /**
   * Accepts the alert dialog.
   */
  async acceptAlert(page) {
    await this.handleAlert(page, async (dialog) => {
      await dialog.accept();
      await log().info('Accepted the alert.');
    });
  }


  /**
   * Dismisses the alert dialog.
   */
  async dismissAlert() {
    await this.handleAlert(async (dialog) => {
      await dialog.dismiss();
      await log().info('Dismissed the alert.');
    });
  }

  /**
   * Captures the text of the alert dialog.
   * 
   * @returns {Promise<string>} The alert message.
   */
  async getAlertText() {
    let alertText = '';
    await this.handleAlert(async (dialog) => {
      alertText = dialog.message();
      await dialog.dismiss(); // Or `accept` based on your need.
    });
    return alertText;
  }

  /**
   * Sends input to a prompt dialog.
   * 
   * @param {string} inputText Text to send to the alert prompt.
   */
  async setAlertInput(inputText) {
    await this.handleAlert(async (dialog) => {
      if (dialog.type() === 'prompt') {
        await dialog.accept(inputText);
        await log().info(`Set alert input: ${inputText}`);
      } else {
        await log().info('Dialog is not a prompt. Cannot send input.');
        await dialog.dismiss();
      }
    });
  }
}

module.exports = AlertHelper;
