
const { test, expect } = require('@playwright/test');
const log = require("../utilities/Logger/logger.js"); // Import the logger
const LoginPage = require('../pages/login.page');
const PaymenytPage = require('../pages/commonPages/PaymentPage');
const WriteTOJSON = require("../utilities/DataDriven/ReadWriteData.js");
const DataGeneration = require("../utilities/DataDriven/DataGeneratorHelper.js")
import * as allure from "allure-js-commons";


const allPayment = JSON.parse(JSON.stringify(require("../DataFiles/paymentData.json")));

const CookieHelper = require('../utilities/WebElementActions/CookieHelper.js');
const WindowHelper = require('../utilities/WebElementActions/WindowHelper.js');

let cookies;

test.describe.serial('Sequential Tests', () => {
    test('User should log in successfully', async ({ page }) => {
        test.setTimeout(120000); // Set timeout to 120 seconds for this test

        log().info('=================================================')
        log().info("TC: 'User should log in successfully' started");
        const loginPage = new LoginPage(page);
        const paymentPage = new PaymenytPage(page);
        await loginPage.navigate();
        await loginPage.login('Admin', 'admin123');    
        log().info("TC: 'User should log in successfully' Ended");

        
        // await console.log('test',DataGeneration.randomName());
        // await console.log('test',DataGeneration.randomIntegerBetween(70000,90000));
        // await console.log('test',DataGeneration.randomNumber());
        // await console.log('test',DataGeneration.randomPhoneNumber());
        // await console.log('test',DataGeneration.randomEmail());
        // await console.log('test',DataGeneration.randomPassword());
        // await console.log('test',DataGeneration.randomEGYNationalId(35));
        // await console.log('test',DataGeneration.extractDataFromEGYNid('29009260198090'));
      

    });

    // test('User should log in successfully1', async ({ page }) => {
    //     test.setTimeout(120000); // Set timeout to 120 seconds for this test

    //     log().info('=================================================')
    //     log().info("TC: 'User should log in successfully1' started");
    //     const loginPage = new LoginPage(page);
    //     const paymentPage = new PaymenytPage(page);
    //     await loginPage.navigate();
    //     await loginPage.login('Admin', 'admin123');
    //     log().info("TC: 'User should log in successfully1' Ended");
    // });

});