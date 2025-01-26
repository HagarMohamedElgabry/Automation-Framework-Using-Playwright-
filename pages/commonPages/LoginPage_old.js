import { Page, expect } from "@playwright/test";

class Login {

    constructor(page) {
        this.page = page;



    }

    elements = {


        PolicyHolderField: () => this.page.frameLocator('iframe[title="loginIframe"]').locator("(//*[@id='IdentityNumber'])"),
        Captcha: () => this.page.frameLocator('iframe[title="loginIframe"]').locator('#captchaCodeForMBIRegister'),
        loginBtnInForm: () => this.page.frameLocator('iframe[title="loginIframe"]').locator('//*[@type="submit"]'),
        password: () => this.page.frameLocator('iframe[title="loginIframe"]').locator('#Password'),
        Otp: () => this.page.locator('.auth-form-otp'),
        OTPInput: () => this.page.frameLocator('iframe[title="loginIframe"]').locator('#OTPInput'),
        VerifyBtn: () => this.page.frameLocator('iframe[title="loginIframe"]').locator('#btnVerify'),
        SchemeCaptchaErrorMessage: () => this.page.locator('#SchemeCaptchaErrorMessage'),
        errorMsgFromcaptcha: () => this.page.frameLocator('iframe[title="loginIframe"]').getByText('رمز التحقق المدخل غير صحيح'),

        //signup
        signupTap: () => this.page.frameLocator('iframe[title="loginIframe"]').locator("#btnsignup"),
        mobileNumberInput: () => this.page.frameLocator('iframe[title="loginIframe"]').locator("#MobileNumber"),
        emailInput: () => this.page.frameLocator('iframe[title="loginIframe"]').locator("#Email"),
        passwordInput: () => this.page.frameLocator('iframe[title="loginIframe"]').locator("#Password"),
        wrongPassVaildationMsg: () => this.page.frameLocator('iframe[title="loginIframe"]').locator("#Password-error"),
        CaptchaErrorMsgInSignup: () => this.page.frameLocator('iframe[title="loginIframe"]').locator(".validation-summary-errors"),

        //otpPopDigts
        otpFirstDigt: () => this.page.locator("#DigtOne"),

        //PymentOTP
        otpInput: () => this.page.locator("#otp"),
        verifybtn: () => this.page.getByRole('button', { name: 'تحقق' }),


    }


    /**
     * Fill the Captcha form for Login.
     */

    async entercaptchaForm() {
        for (let attempt = 1; attempt <= 10; attempt++) {


            await expect(this.page.frameLocator('iframe[title="loginIframe"]').locator("#CaptchaImageForMBIRegister")).toHaveJSProperty('complete', true);
            await expect(this.page.frameLocator('iframe[title="loginIframe"]').locator("#CaptchaImageForMBIRegister")).not.toHaveJSProperty('naturalWidth', 0);


            const captchaElement = await this.page.frameLocator('iframe[title="loginIframe"]').locator("#CaptchaImageForMBIRegister");
            const captchaImage = await captchaElement.screenshot();
            const { data: { text } } = await Tesseract.recognize(captchaImage, 'eng', {
                tessedit_char_whitelist: '0123456789', // Specify characters to recognize (e.g., numbers only)
            });

            const captchaCodeWithoutSpaces = text.replace(/\D/g, '');// extract numbers only
            console.log('Extracted CAPTCHA code:', captchaCodeWithoutSpaces);

            await this.elements.Captcha().fill(captchaCodeWithoutSpaces)
            await this.elements.loginBtnInForm().click()
            if (captchaCodeWithoutSpaces.length === 5) {
                await this.Captcha.clear()
            }

            //   if(this.elements.wrongPassVaildationMsg().isVisible()){
            //     await this.elements.password().clear()
            //     await this.elements.password().fill('123456')
            // }

            await this.page.waitForTimeout(3000); // Adjust this timeout based on your app's behavior
            //await expect( this.elements.errorMsgFromcaptcha()).toBeVisible({ timeout: 12000 });

            const errorMessageVisible = await this.elements.errorMsgFromcaptcha().isVisible({ timeout: 100000 });
            if (!errorMessageVisible) {
                // If the error message is not visible, the CAPTCHA input was accepted
                console.log(`CAPTCHA accepted on attempt ${attempt}`);
                return true;
            } else {
                console.log(`Error on attempt ${attempt}, retrying...`);
            }
        }

        console.log('CAPTCHA input failed after maximum retries');
        return false;


    }


    /**
     * Fill the Captcha form for Signup.
     */

    async entercaptchaSignUpForm() {
        for (let attempt = 1; attempt <= 10; attempt++) {


            await expect(this.page.frameLocator('iframe[title="loginIframe"]').locator("#CaptchaImageForMBIRegister")).toHaveJSProperty('complete', true);
            await expect(this.page.frameLocator('iframe[title="loginIframe"]').locator("#CaptchaImageForMBIRegister")).not.toHaveJSProperty('naturalWidth', 0);


            const captchaElement = await this.page.frameLocator('iframe[title="loginIframe"]').locator("#CaptchaImageForMBIRegister");
            const captchaImage = await captchaElement.screenshot();
            const { data: { text } } = await Tesseract.recognize(captchaImage, 'eng', {
                tessedit_char_whitelist: '0123456789', // Specify characters to recognize (e.g., numbers only)
            });

            const captchaCodeWithoutSpaces = text.replace(/\D/g, '');// extract numbers only
            console.log('Extracted CAPTCHA code:', captchaCodeWithoutSpaces);

            await this.elements.Captcha().fill(captchaCodeWithoutSpaces)
            await this.elements.loginBtnInForm().click()
            if (captchaCodeWithoutSpaces.length === 5) {
                await this.elements.Captcha().clear()
            }

            if (this.elements.wrongPassVaildationMsg().isVisible()) {
                await this.elements.password().clear()
                await this.elements.password().fill('123456')
            }

            await this.elements.loginBtnInForm().click()

            await this.page.waitForTimeout(1000); // Adjust this timeout based on your app's behavior

            const errorMessageVisible = await this.elements.CaptchaErrorMsgInSignup().isVisible({ timeout: 100000 });
            if (!errorMessageVisible) {
                // If the error message is not visible, the CAPTCHA input was accepted
                console.log(`CAPTCHA accepted on attempt ${attempt}`);
                return true;
            } else {
                console.log(`Error on attempt ${attempt}, retrying...`);
            }
        }

        console.log('CAPTCHA input failed after maximum retries');
        return false;


    }


    /**
     * Fill OTP
     */
    async fillOtp() {

        await this.page.waitForLoadState('load')


        const iframeElementHandle = await this.page.waitForSelector('iframe[title="loginIframe"]'); // Replace with the actual iframe selector
        const iframe = await iframeElementHandle.contentFrame();

        await this.elements.otpFirstDigt().isVisible()

        //await iframe.waitForSelector('#DigtOne', { state: 'visible', timeout: 5000 });
        //await this.page.waitForSelector('iframe[title="loginIframe"] #DigtOne', { visible: true });
        // await this.elements.OTPInput().fill("1234")

        const otpValues = ['1', '2', '3', '4'];

        // Assuming the OTP input fields have unique IDs or selectors
        const otpSelectors = [
            '#DigtOne',
            '#DigtTwo',
            '#DigtThree',
            '#DigtFour'
        ];

        // Fill the OTP input fields with the respective digits
        for (let i = 0; i < otpSelectors.length; i++) {
            await iframe.fill(otpSelectors[i], otpValues[i]);
        }

        // await this.elements.Otp().fill(otpCode)

        await this.elements.VerifyBtn().click()
    }


    /**
     * Fill OTP for payment only
     */
    async fillOtpPayment() {
        await this.elements.otpInput().fill("4321")
        await this.elements.verifybtn().click()

    }

    /**
     * Login functionality
     */
    async login(userName, pass, otpCode) {
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForLoadState('networkidle');
        await this.elements.PolicyHolderField().fill(userName)
        this.entercaptchaForm()
        await this.elements.loginBtnInForm().click()
        await this.elements.password().fill(pass)
        await this.elements.loginBtnInForm().click()

        await this.page.waitForLoadState('load')
        await this.page.waitForTimeout(3000);

        this.fillOtp()

        // await this.elements.Otp().fill(otpCode)
        await this.elements.VerifyBtn().click()
        await this.page.waitForTimeout(3000);
    }


    /**
     * Signup functionality
     */

    async signUp(userName, mobile, email, pass) {
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForLoadState('networkidle');
        await this.elements.signupTap().click()
        // await this.page.waitForTimeout(3000);

        await this.elements.PolicyHolderField().fill(userName)
        await this.elements.mobileNumberInput().fill(mobile)
        await this.elements.emailInput().fill(email)
        await this.elements.password().fill(pass)
        this.entercaptchaSignUpForm()
        // await this.page.waitForTimeout(4000);
        this.fillOtp()

    }


}
module.exports = Login;
