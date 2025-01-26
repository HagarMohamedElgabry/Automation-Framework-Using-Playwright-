
const { test, expect } = require('@playwright/test');
const log = require("../../utilities/Logger/logger.js"); // Import the logger
const LoginPage = require('../../pages/login.page.js');
const PaymenytPage = require('../../pages/commonPages/PaymentPage.js');
const CookieHelper = require('../../utilities/WebElementActions/CookieHelper.js');

// create a global variable to save the cookies on it
let cookies;

test.describe.serial('Sequential Tests', () => {
    test('User should log in successfully', async ({ page }) => {

        await log().info('=================================================')
        await log().info("TC: 'User should log in successfully' started");
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('Admin', 'admin123');

        // Take the Cookies from first test cases and saved in global variable
        const cookieHelper = new CookieHelper();
        cookies = await cookieHelper.getAllCookies(page);
        await console.log(cookies);

        await log().info("TC: 'User should log in successfully' Ended");


    });

    test('Open Dashboard without Login', async ({ page }) => {

        await log().info('=================================================')
        await log().info("TC: 'Open Dashboard without Login' started");
        const loginPage = new LoginPage(page);

        // Open Original URL
        await loginPage.navigate();

        // Retreive Cookies from first test cases from global variable
        const cookieHelper = new CookieHelper();
        await cookieHelper.addCookies(page, cookies);

        // Open Dashboard URL
        await loginPage.navigate1();

        await log().info("TC: 'Open Dashboard without Login' Ended");
    });

});