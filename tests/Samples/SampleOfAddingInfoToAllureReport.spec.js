
const { test, expect } = require('@playwright/test');
const log = require("../../utilities/Logger/logger.js"); // Import the logger
const LoginPage = require('../../pages/login.page');
import * as allure from "allure-js-commons";


test('Login with allure report Customization', async ({ page }) => {
    
    await allure.description("The test checks if an active user with a valid password can sign in to the app.");
    await allure.epic("Signing in");
    await allure.feature("Sign in with a password");
    await allure.story("As an active user, I want to successfully sign in using a valid password");
    await allure.tags("signin", "ui", "positive");
    await allure.issue("https://github.com/allure-framework/allure-js/issues/331", "ISSUE-331");
    await allure.owner("eroshenkoam");
    await allure.parameter("browser", "chrome");
    await allure.severity("high");
 
    log().info('=================================================')
    log().info("TC: 'User should log in successfully' started");
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('Admin', 'admin123');
    log().info("TC: 'User should log in successfully' Ended");

});
