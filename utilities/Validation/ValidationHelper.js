/**
 * <h1>Validation Helper</h1>
 * Helper class to handle Playwright actions like drag and drop, mouse hover,
 * double click, and more.
 * @version : 1.0
 */

const { expect } = require('@playwright/test');
const log  = require("../Logger/logger.js");

class ValidationHelper {

  constructor() {
    this.errors = [];
  }

  /**
   * Assert that two objects are equal.
   *
   * @param {string} testAssertStepName - The Test Assert Step Name to be added in the log
   * @param {*} actualValue - The actual value of this assertion
   * @param {*} expectedValue - The expected value of this assertion
   * @param {string} assertionErrorMessage - Message to display if the assertion fails
   * @param {string} assertType - 'hard' or 'soft' assertion type
   */
  async assertObjectEquals(testAssertStepName, actualValue, expectedValue, assertionErrorMessage, assertType) {
    
    if (assertType === 'hard') {
      await expect(actualValue).toBe(expectedValue);
      await log().info(`[PASS] ${testAssertStepName} | Expected: ${expectedValue}, Actual: ${actualValue}`);
    } else if (assertType === 'soft') {
      try {
        await expect(actualValue).toBe(expectedValue);
        await log().info(`[PASS] ${testAssertStepName} | Expected: ${expectedValue}, Actual: ${actualValue}`);
      } catch (error) {
        await log().error(`[FAIL] ${testAssertStepName} | Expected: ${expectedValue}, Actual: ${actualValue}`);
        await this.errors.push(assertionErrorMessage || error.message);
        // console.warn(`Soft assert failed: ${assertionErrorMessage}`);
      }
    }
  }

  /**
   * Assert that a condition is true.
   *
   * @param {string} testAssertStepName - The Test Assert Step Name to be added in the log
   * @param {boolean} actualValue - The boolean value to assert
   * @param {string} assertionErrorMessage - Message to display if the assertion fails
   * @param {string} assertType - 'hard' or 'soft' assertion type
   */
  async assertTrue(testAssertStepName, actualValue, assertionErrorMessage, assertType) {
   
    if (assertType === 'hard') {
      await expect(actualValue).toBeTruthy();
      await log().info(`[PASS] ${testAssertStepName} | Expected: true , Actual: ${actualValue}`);
    } else if (assertType === 'soft') {
      try {
        await expect(actualValue).toBeTruthy();
        await log().info(`[PASS] ${testAssertStepName} | Expected: true , Actual: ${actualValue}`);
      } catch (error) {
        await log().error(`[FAIL] ${testAssertStepName} | Expected: true , Actual: ${actualValue}`);
        await this.errors.push(assertionErrorMessage || error.message);
        // console.warn(`Soft assert failed: ${assertionErrorMessage}`);
      }
    }
  }

  /**
   * Assert that a condition is false.
   *
   * @param {string} testAssertStepName - The Test Assert Step Name to be added in the log
   * @param {boolean} actualValue - The boolean value to assert
   * @param {string} assertionErrorMessage - Message to display if the assertion fails
   * @param {string} assertType - 'hard' or 'soft' assertion type
   */
  async assertFalse(testAssertStepName, actualValue, assertionErrorMessage, assertType) {
    
    if (assertType === 'hard') {
      await expect(actualValue).toBeFalsy();
      await log().info(`[PASS] ${testAssertStepName} | Expected: false , Actual: ${actualValue}`);
    } else if (assertType === 'soft') {
      try {
        await expect(actualValue).toBeFalsy();
        await log().info(`[PASS] ${testAssertStepName} | Expected: false , Actual: ${actualValue}`);
      } catch (error) {
        await log().error(`[FAIL] ${testAssertStepName} | Expected: false , Actual: ${actualValue}`);
        await this.errors.push(assertionErrorMessage || error.message);
        // console.warn(`Soft assert failed: ${assertionErrorMessage}`);
      }
    }
  }

   /**
   * Assert that object is contain in another string.
   *
   * @param {string} testAssertStepName - The Test Assert Step Name to be added in the log
   * @param {*} actualValue - The actual value of this assertion
   * @param {*} expectedValue - The expected value of this assertion
   * @param {string} assertionErrorMessage - Message to display if the assertion fails
   * @param {string} assertType - 'hard' or 'soft' assertion type
   */
   async assertObjectContains(testAssertStepName, substringValue, FullValue, assertionErrorMessage, assertType) {
    
    if (assertType === 'hard') {
      await expect(FullValue).toContain(substringValue);
      await log().info(`[PASS] ${testAssertStepName} | FullText: ${FullValue}, SubstringText: ${substringValue}`);
    } else if (assertType === 'soft') {
      try {
        await expect(FullValue).toContain(substringValue);
        await log().info(`[PASS] ${testAssertStepName} | FullText: ${FullValue}, SubstringText: ${substringValue}`);
      } catch (error) {
        await log().error(`[FAIL] ${testAssertStepName} | FullText: ${FullValue}, SubstringText: ${substringValue}`);
        await this.errors.push(assertionErrorMessage || error.message);
        // console.warn(`Soft assert failed: ${assertionErrorMessage}`);
      }
    }
  }


/**
   * Assert that object is Visible.
   *
   * @param {*} page - The page object
   * @param {string} testAssertStepName - The Test Assert Step Name to be added in the log
   * @param {*} actualValue - The actual value of this assertion
   * @param {*} expectedValue - The expected value of this assertion
   * @param {string} assertionErrorMessage - Message to display if the assertion fails
   * @param {string} assertType - 'hard' or 'soft' assertion type
   */
async assertObjectVisible(page,testAssertStepName, selector, assertionErrorMessage, assertType) {
    
  const Locator = page.locator(selector);
  if (assertType === 'hard') {
    await expect(Locator).toBeVisible();
    await log().info(`[PASS] ${testAssertStepName} | Selector: ${selector} is Visible`);
  } else if (assertType === 'soft') {
    try {
      await expect(Locator).toBeVisible();
      await log().info(`[PASS] ${testAssertStepName} | Selector: ${selector} is Visible`);
    } catch (error) {
      await log().error(`[FAIL] ${testAssertStepName} | Selector: ${selector} is InVisible`);
      await this.errors.push(assertionErrorMessage || error.message);
      // console.warn(`Soft assert failed: ${assertionErrorMessage}`);
    }
  }
}


/**
   * Assert that object is hidden.
   *
   * @param {*} page - The page object
   * @param {string} testAssertStepName - The Test Assert Step Name to be added in the log
   * @param {*} actualValue - The actual value of this assertion
   * @param {*} expectedValue - The expected value of this assertion
   * @param {string} assertionErrorMessage - Message to display if the assertion fails
   * @param {string} assertType - 'hard' or 'soft' assertion type
   */
async assertObjectHidden(page,testAssertStepName, selector, assertionErrorMessage, assertType) {
    
  const Locator = page.locator(selector);
  if (assertType === 'hard') {
    await expect(Locator).toBeHidden();
    await log().info(`[PASS] ${testAssertStepName} | Selector: ${selector} is Hidden`);
  } else if (assertType === 'soft') {
    try {
      await expect(Locator).toBeHidden();
      await log().info(`[PASS] ${testAssertStepName} | Selector: ${selector} is Hidden`);
    } catch (error) {
      await log().error(`[FAIL] ${testAssertStepName} | Selector: ${selector} is not Hidden`);
      await this.errors.push(assertionErrorMessage || error.message);
      // console.warn(`Soft assert failed: ${assertionErrorMessage}`);
    }
  }
}

/**
   * Assert that object is disabled.
   *
   * @param {*} page - The page object
   * @param {string} testAssertStepName - The Test Assert Step Name to be added in the log
   * @param {*} actualValue - The actual value of this assertion
   * @param {*} expectedValue - The expected value of this assertion
   * @param {string} assertionErrorMessage - Message to display if the assertion fails
   * @param {string} assertType - 'hard' or 'soft' assertion type
   */
async assertObjectDisabled(page,testAssertStepName, selector, assertionErrorMessage, assertType) {
    
  const Locator = page.locator(selector);
  if (assertType === 'hard') {
    await expect(Locator).toBeDisabled();
    await log().info(`[PASS] ${testAssertStepName} | Selector: ${selector} is Disabled`);
  } else if (assertType === 'soft') {
    try {
      await expect(Locator).toBeDisabled();
      await log().info(`[PASS] ${testAssertStepName} | Selector: ${selector} is Disabled`);
    } catch (error) {
      await log().error(`[FAIL] ${testAssertStepName} | Selector: ${selector} is not Disabled`);
      await this.errors.push(assertionErrorMessage || error.message);
      // console.warn(`Soft assert failed: ${assertionErrorMessage}`);
    }
  }
}


/**
   * Assert that object Attribute Found.
   *
   * @param {*} page - The page object
   * @param {string} testAssertStepName - The Test Assert Step Name to be added in the log
   * @param {*} actualValue - The actual value of this assertion
   * @param {*} expectedValue - The expected value of this assertion
   * @param {string} AttributeName - the name of Attribute
   * @param {string} assertionErrorMessage - Message to display if the assertion fails
   * @param {string} assertType - 'hard' or 'soft' assertion type
   */
async assertObjectAttribute(page,testAssertStepName, selector, AttributeName, assertionErrorMessage, assertType) {
    
  const Locator = page.locator(selector);
  if (assertType === 'hard') {
    await expect(Locator).toHaveAttribute(AttributeName, '');
    await log().info(`[PASS] ${testAssertStepName} | Selector: ${selector} has Attribute ${AttributeName}`);
  } else if (assertType === 'soft') {
    try {
      await expect(Locator).toHaveAttribute(AttributeName, '');
      await log().info(`[PASS] ${testAssertStepName} | Selector: ${selector} has Attribute ${AttributeName}`);
    } catch (error) {
      await log().error(`[FAIL] ${testAssertStepName} | Selector: ${selector} has Attribute ${AttributeName}`);
      await this.errors.push(assertionErrorMessage || error.message);
      // console.warn(`Soft assert failed: ${assertionErrorMessage}`);
    }
  }
}

/**
   * Assert that object is null.
   *
   * @param {string} testAssertStepName - The Test Assert Step Name to be added in the log
   * @param {*} actualValue - The actual value of this assertion
   * @param {string} assertionErrorMessage - Message to display if the assertion fails
   * @param {string} assertType - 'hard' or 'soft' assertion type
   */
async assertObjectNull(testAssertStepName, actualValue, assertionErrorMessage, assertType) {
    
  if (assertType === 'hard') {
    await expect(actualValue).toBeNull();
    await log().info(`[PASS] ${testAssertStepName} | Expected: null , Actual: ${actualValue}`);
  } else if (assertType === 'soft') {
    try {
      await expect(actualValue).toBeNull();
      await log().info(`[PASS] ${testAssertStepName} | Expected: null , Actual: ${actualValue}`);
    } catch (error) {
      await log().error(`[FAIL] ${testAssertStepName} | Expected: null , Actual: ${actualValue}`);
      await this.errors.push(assertionErrorMessage || error.message);
      // console.warn(`Soft assert failed: ${assertionErrorMessage}`);
    }
  }
}

/**
   * Assert that object is not null.
   *
   * @param {string} testAssertStepName - The Test Assert Step Name to be added in the log
   * @param {*} actualValue - The actual value of this assertion
   * @param {string} assertionErrorMessage - Message to display if the assertion fails
   * @param {string} assertType - 'hard' or 'soft' assertion type
   */
async assertObjectNotNull(testAssertStepName, actualValue, assertionErrorMessage, assertType) {
    
  if (assertType === 'hard') {
    await expect(actualValue).not.toBeNull();
    await log().info(`[PASS] ${testAssertStepName} | Expected: not null , Actual: ${actualValue}`);
  } else if (assertType === 'soft') {
    try {
      await expect(actualValue).not.toBeNull();
      await log().info(`[PASS] ${testAssertStepName} | Expected: not null , Actual: ${actualValue}`);
    } catch (error) {
      await log().error(`[FAIL] ${testAssertStepName} | Expected: not null , Actual: ${actualValue}`);
      await this.errors.push(assertionErrorMessage || error.message);
      // await console.warn(`Soft assert failed: ${assertionErrorMessage}`);
    }
  }
}

/**
   * Assert that object is not null.
   *
   * @param {string} testAssertStepName - The Test Assert Step Name to be added in the log
   * @param {*} actualValue - The actual value of this assertion
   * @param {string} assertionErrorMessage - Message to display if the assertion fails
   * @param {string} assertType - 'hard' or 'soft' assertion type
   */
async assertPageTitle(page, testAssertStepName, ExpectedTitle, assertionErrorMessage, assertType) {
    
  if (assertType === 'hard') {
    await expect(page).toHaveTitle(ExpectedTitle);
    await log().info(`[PASS] ${testAssertStepName} | ExpectedTitle: ${ExpectedTitle} has Found`);
  } else if (assertType === 'soft') {
    try {
      await expect(page).toHaveTitle(ExpectedTitle);
      await log().info(`[PASS] ${testAssertStepName} | ExpectedTitle: ${ExpectedTitle} has Found`);
    } catch (error) {
      await log().error(`[FAIL] ${testAssertStepName} | ExpectedTitle: ${ExpectedTitle} has not Found`);
      await this.errors.push(assertionErrorMessage || error.message);
      // await console.warn(`Soft assert failed: ${assertionErrorMessage}`);
    }
  }
}

/**
 * Assert All function to collect the result of soft assertion.
 *
 */
assertAll() {
  if (this.errors.length) {
    log().error(`[FAIL] Soft Assertion is Failed`);
    throw new Error(`Soft Assertion Errors:\n${this.errors.join('\n')}`);
  }
}



}

module.exports = ValidationHelper;
