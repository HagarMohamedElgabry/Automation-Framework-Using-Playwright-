// pages/login.page.js
const TextHelper = require('../utilities/WebElementActions/TextHelper.js');
const ActionHelper = require('../utilities/WebElementActions/ActionHelper.js');
const AlertHelper = require('../utilities/WebElementActions/AlertHelper.js');
const ButtonHelper = require('../utilities/WebElementActions/ButtonHelper.js');
const CheckboxHelper = require('../utilities/WebElementActions/CheckboxHelper.js');
const DropDownHelper = require('../utilities/WebElementActions/DropDownHelper.js');
const FrameHelper = require('../utilities/WebElementActions/FrameHelper.js');
const PageScrollHelper = require('../utilities/WebElementActions/PageScrollHelper.js');
const WebElementHelper = require('../utilities/WebElementActions/WebElementHelper.js');
const WebElementWaitHelper = require('../utilities/WebElementActions/WebElementWaitHelper.js');
const WindowHelper = require('../utilities/WebElementActions/WindowHelper.js');
const CookieHelper = require('../utilities/WebElementActions/CookieHelper.js');
const ValidationHelper = require('../utilities/Validation/ValidationHelper.js');

const PaymenytPage = require('../pages/commonPages/PaymentPage');
const allPayment = JSON.parse(JSON.stringify(require("../DataFiles/paymentData.json")));

const LoginPageA = require('../pages/commonPages/LoginPage');





class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = "//input[@placeholder='Username']"; // Update with actual selector
        this.passwordInput = "//input[@placeholder='Password']"; // Update with actual selector
        this.loginButton = "//button[normalize-space()='Login']";     // Update with actual selector
        // this.loginButton = "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button";
        this.TextInScreen = "//label[normalize-space()='Username']";
        this.Image = "//div[@class='example']//div[1]//img[1]";
        this.source = "//div[@id='column-a']";
        this.target = "//div[@id='column-b']";
        this.slider = "//input[@value='0']";
        this.Home = "//a[normalize-space()='Home']";
        this.parabanklogo = "//img[@title='ParaBank']";
        this.alertButton1 = "#content > div > ul > li:nth-child(1) > button";
        this.alertButton2 = "//button[normalize-space()='Click for JS Confirm']";
        this.ComputerMenu = "(//a[normalize-space()='Computers'])[1]";
        this.DesktopMenu = "(//a[normalize-space()='Desktops'])[1]";
        this.checkbox1 = "(//input[@type='checkbox'])[1]";
        this.checkbox2 = "(//input[@type='checkbox'])[2]";
        this.checkboxs = "(//input[@type='checkbox'])";
        this.dropdownLocator = "//select[@id='dropdown']";
        this.frameTextArea = "//p[normalize-space()='Your content goes here.']";
        this.alertButton3 = "//button[contains(text(),'click the button to display an')]";

        // this.selectMada = '#payment-form > div > div.card-group > div:nth-child(1) > label > span';
        this.selectVisa = '#payment-form > div > div.card-group > div:nth-child(2) > label > span';
        // this.selectMaster = '#payment-form > div > div.card-group > div:nth-child(3) > label > span';
        // this.selectSadaa = '#payment-form > div > div.card-group > div:nth-child(5) > label > span';





    }

    async navigate() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Update with actual login path
        // await this.page.goto('https://the-internet.herokuapp.com/javascript_alerts'); // Update with actual login path
        // await this.page.goto('https://parabank.parasoft.com/parabank/index.htm'); // Update with actual login path
        // await this.page.goto('https://demo.nopcommerce.com/'); // Update with actual login path
        // await this.page.goto('https://demo.automationtesting.in/Alerts.html');
        // await this.page.goto('https://payui-uat.rasan.co/Payment/PaymentDetails?inputs=VEW7EQ1sye8-co6aWaTKQ1qNkyTohWDiNrCkdQITHsSRRz901at9Hg%24%24&lang=ar');
        // await this.page.goto('https://mmpuat.gettameeni.com/');
    }

    async navigate1() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); // Update with actual login path
        await this.page.waitForTimeout(2000);
    }


    async login(username, password) {
        const textHelper = new TextHelper();
        const actionHelper = new ActionHelper();
        const alertHelper = new AlertHelper();
        const buttonHelper = new ButtonHelper();
        const checkboxHelper = new CheckboxHelper();
        const dropDownHelper = new DropDownHelper();
        const frameHelper = new FrameHelper();
        const pageScrollHelper = new PageScrollHelper();
        const webElementHelper = new WebElementHelper();
        const webElementWaitHelper = new WebElementWaitHelper();
        const windowHelper = new WindowHelper();
        const cookieHelper = new CookieHelper();
        const validationHelper = new ValidationHelper();
        const paymentPage = new PaymenytPage(this.page);
        const loginPageA = new LoginPageA(this.page);

        // await this.page.waitForTimeout(5000);
        // await loginPageA.login('2353659432','123456','1234');
        // await loginPageA.signUp('1055858350', '0555522333', 'test@testComp.com', '123456')
        //('2353659432','123456','1234')


        /****************  Text ************/
        await textHelper.setText(this.page, this.usernameInput, username);
        await textHelper.clearText(this.page, this.usernameInput);
        await textHelper.setText(this.page, this.usernameInput, username);
        await textHelper.setText(this.page, this.passwordInput, password);
        const x = await textHelper.getText(this.page, this.TextInScreen);
        await console.log(`Get TExt Command is: ${x}`);
        await buttonHelper.click(this.page, this.loginButton);
        await this.page.waitForTimeout(2000);   

        // await actionHelper.takeScreenshot(this.page, 'Example.png');

        /****************  Mouse Hover ************/
        // await this.page.waitForTimeout(2000);
        // await actionHelper.mouseHover(this.page, this.Image);
        // await this.page.waitForTimeout(2000);
        // await actionHelper.mouseHoverRelease(this.page);
        // await this.page.waitForTimeout(2000);

        /****************  Drag aand drop ************/
        // await this.page.waitForTimeout(2000);
        // await actionHelper.dragAndDrop(this.page,this.source, this.target)
        // await this.page.waitForTimeout(2000);

        /****************  Move Slider ************/
        //  await this.page.waitForTimeout(2000);
        //  await actionHelper.moveSlideBar(this.page,this.slider,129,13)
        //  await this.page.waitForTimeout(2000);

        /****************  Mouse hover and click ************/
        //  await this.page.waitForTimeout(2000);
        //  await actionHelper.mouseHoverAndClickOnElement(this.page,this.Home)
        //  await this.page.waitForTimeout(2000);

        /****************  ToolTip ************/
        // await this.page.waitForTimeout(2000);
        // const xxx = await actionHelper.captureToolTipText(this.page, this.parabanklogo)
        // await this.page.waitForTimeout(2000);
        // console.log(`test: ${xxx}`)

        /****************  Buttons ************/
        // await this.page.waitForTimeout(2000);
        // const x = await buttonHelper.isButtonEnabled(this.page,this.loginButton)
        // await this.page.waitForTimeout(2000);
        // if (x === true) {
        //     console.log("True")
        //   } else {
        //     console.log("false")
        //   }
        // await buttonHelper.click(this.page,this.loginButton)
        // await buttonHelper.hoverAndClick(this.page,this.ComputerMenu,this.DesktopMenu);
        // await buttonHelper.click(this.page,this.alertButton2);
        // await this.page.waitForTimeout(2000);
        // const y = await buttonHelper.isButtonSelected(this.page,this.checkbox2)
        // await this.page.waitForTimeout(2000);
        // if (y === true) {
        //     console.log("True")
        //   } else {
        //     console.log("false")
        //   }

        /****************  Checkbox ************/
        // await this.page.waitForTimeout(2000);
        //  await checkboxHelper.checkOnCheckbox(this.page,this.checkbox1);
        //  await this.page.waitForTimeout(2000);
        //  await checkboxHelper.unCheckOnCheckbox(this.page,this.checkbox2);
        //  await this.page.waitForTimeout(2000);

        //  await checkboxHelper.checkAllCheckboxes(this.page,this.checkboxs);
        //  await this.page.waitForTimeout(2000);

        //  await checkboxHelper.uncheckAllCheckboxes(this.page,this.checkboxs);
        //  await this.page.waitForTimeout(2000);

        /****************  DropDown list ************/
        // await this.page.waitForTimeout(2000);
        // await dropDownHelper.selectUsingValue(this.page,this.dropdownLocator, '2')
        // await this.page.waitForTimeout(2000);
        // await dropDownHelper.selectUsingVisibleText(this.page,this.dropdownLocator, 'Option 1')
        // await this.page.waitForTimeout(2000);
        // await dropDownHelper.selectUsingIndex(this.page,this.dropdownLocator, 2)
        // await this.page.waitForTimeout(2000);

        /****************  Frame ************/
        // await this.page.waitForTimeout(2000);
        // await frameHelper.switchToFrame(this.page,1);
        // await this.page.waitForTimeout(2000);
        // this.page.click("div[aria-label='Close'] svg");
        // await this.page.waitForTimeout(2000);
        // await frameHelper.switchToParentWindow(this.page);
        // await this.page.waitForTimeout(2000);
        // this.page.click("//a[normalize-space()='Elemental Selenium']");
        // await this.page.waitForTimeout(2000);

        /****************  Scroll ************/
        // await this.page.waitForTimeout(2000);
        // await pageScrollHelper.scrollDownToEndOfPage(this.page);
        // await this.page.waitForTimeout(2000);
        // await pageScrollHelper.scrollUpToTopOfPage(this.page);
        // await this.page.waitForTimeout(2000);
        // await pageScrollHelper.scrollTillElementVisible(this.page,"//a[normalize-space()='Hovers']");
        // // await pageScrollHelper.scrollByAxisPixels(this.page,0,100);
        // await this.page.waitForTimeout(5000);

        /****************  WelElement Helper ************/
        // await this.page.waitForTimeout(2000);
        // await webElementHelper.isElementDisplayed(this.page,this.usernameInput)
        // await this.page.waitForTimeout(2000);
        // await webElementHelper.getAttributeOfElement(this.page,this.usernameInput,'class')
        // await this.page.waitForTimeout(2000);
        // await webElementHelper.isElementPresent(this.page,this.passwordInput)
        // await this.page.waitForTimeout(2000);

        /****************  WelElement waits ************/
        //  await this.page.waitForTimeout(2000);
        //  await webElementWaitHelper.waitForPageLoad(this.page);
        //  await this.page.waitForTimeout(2000);
        //  await webElementWaitHelper.waitUntilVisibilityOfElementLocated(this.page,this.usernameInput,5000);
        //  await this.page.waitForTimeout(2000);

        /****************  WelElement waits ************/
        //  await this.page.waitForTimeout(2000);
        //  await windowHelper.goTo(this.page,'https://the-internet.herokuapp.com/')
        //  await this.page.waitForTimeout(2000);
        //  await windowHelper.refreshPage(this.page)
        //  await this.page.waitForTimeout(2000);
        //  await windowHelper.goBack(this.page)
        //  await this.page.waitForTimeout(2000);
        //  await windowHelper.goForward(this.page)
        //  await this.page.waitForTimeout(2000);

        /****************  Cookie ************/
        //  await this.page.waitForTimeout(2000);
        //  await cookieHelper.getAllCookies(this.page)
        //  console.log('-----------------')
        //  await this.page.waitForTimeout(2000);
        //  await cookieHelper.getCookie(this.page,'orangehrm')
        //  console.log('-----------------')
        //  await this.page.waitForTimeout(2000);
        //  await cookieHelper.getAllCookies(this.page)
        //  console.log('-----------------')
        //  await cookieHelper.addCookie(this.page,"{name: 'session_id',value: 'abc123'}")
        //  await cookieHelper.getAllCookies(this.page)
        //  console.log('-----------------')

        /****************  Alert ************/
        //  await this.page.waitForTimeout(2000);
        //  await buttonHelper.click(this.page,this.alertButton1);
        //  await buttonHelper.clickUsingJSExecutor(this.page,this.alertButton1)
        //  await this.page.waitForEvent('dialog', { timeout: 10000 });
        // await this.page.waitForTimeout(5000);
        //  await alertHelper.dismissAlert(this.page)
        //  await this.page.waitForTimeout(2000);

        /****************  Assertion ************/
        // const Actualx = 'test1';
        // validationHelper.assertObjectEquals("step1",Actualx,"test","Error in step1","soft")
        // console.log("Tesssssssssst1");
        // const Actualy = true;
        // validationHelper.assertTrue("step2",Actualy,"Error in step2","soft")
        // console.log("Tesssssssssst2");
        // const Actualz = false;
        // validationHelper.assertFalse("step2",Actualz,"Error in step2","soft")
        // console.log("Tesssssssssst3");
        // const Actuala = 'test';
        // validationHelper.assertObjectContains("step1",Actuala,"using automation test for regression ","Error in step1","soft")
        // console.log("Tesssssssssst4");

        // validationHelper.assertAll();

        // await this.page.waitForTimeout(2000);
        // validationHelper.assertObjectVisible(this.page,"step1", this.loginButton, "Error in step1", "soft")
        // console.log("Tesssssssssst5")

        // const Actualb = 'testttt';
        // validationHelper.assertObjectNull("step1", Actualb, "Error in step1", "soft")
        // console.log("Tesssssssssst6");

        // validationHelper.assertAll();

        // const Actualc = null;
        // await validationHelper.assertObjectNotNull("step1", Actualc, "Error in step1", "hard")
        // await console.log("Tesssssssssst7");

        // validationHelper.assertAll();


        // const Actuald = 'ParaBank | Welcome | Online Banking111';
        // await validationHelper.assertPageTitle(this.page,"step1", Actuald, "Error in step1", "soft")
        // await console.log("Tesssssssssst8");

        // validationHelper.assertAll();

        // await console.log(this.selectVisa);
        // await console.log(allPayment.VisacardNumber);
        // await console.log(allPayment.VisaexpiryDate);
        // await console.log(allPayment.VisaCardHolder);
        // await console.log(allPayment.Visacvv);

        // await this.page.waitForTimeout(5000);
        // await paymentPage.paymentWithCard(allPayment.VisacardNumber, allPayment.VisaexpiryDate, allPayment.VisaCardHolder, allPayment.Visacvv);


        /****************  Payment ************/
        // await paymentPage.paymentWithCard(this.selectVisa,allPayment.VisacardNumber, allPayment.VisaexpiryDate, allPayment.VisaCardHolder, allPayment.Visacvv);



    }




}


module.exports = LoginPage;
