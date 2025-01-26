const TextHelper = require('../../utilities/WebElementActions/TextHelper.js');
const ButtonHelper = require('../../utilities/WebElementActions/ButtonHelper.js');
const FrameHelper = require('../../utilities/WebElementActions/FrameHelper.js');

// const allPayment = JSON.parse(JSON.stringify(require("../fixtures/paymentData.json")))

class payment {

    constructor(page) {
        this.page = page;
        // Payment Methods identifiers
        this.selectMada = '#payment-form > div > div.card-group > div:nth-child(1) > label > span';
        this.selectVisa = '#payment-form > div > div.card-group > div:nth-child(2) > label > span';
        this.selectMaster = '#payment-form > div > div.card-group > div:nth-child(3) > label > span';
        this.selectSadaa = '#payment-form > div > div.card-group > div:nth-child(5) > label > span';
        
        // Fill credit card identifiers
        this.enterCardNumber = 'input[name="card.number"]';
        this.enterExpiryDate = "//input[@class='wpwl-control wpwl-control-expiry']";
        this.enterCardHolder = "//input[@name='card.holder']";
        this.enterCVV = 'input[name="card.cvv"]';

        // Payment buttons identifiers
        this.payNowBtn = 'span[class="pay-amount"]';
        this.payBtn = '//button[@class="wpwl-button wpwl-button-pay"]';
        this.submitPayBtn = "//input[@name='submit']";
        this.enterInvoiceNumber = '';
        

    }



    async paymentWithCard(PaymentMethodSelector, CardNumber, ExpireDate, CardHolder, CVV) {

        // Identify the objects from used pages
        const textHelper = new TextHelper();
        const buttonHelper = new ButtonHelper();
        const frameHelper = new FrameHelper();

        // Click on payment type button
        await buttonHelper.click(this.page, PaymentMethodSelector)
        // await this.page.waitForNavigation();

        // Click on Pay Now button
        await buttonHelper.click(this.page, this.payNowBtn)
      
        // wait to lead the payment fields
        await this.page.waitForTimeout(7000);

        // fill card Details
        const cardNumberframe = await frameHelper.switchToFrameByName(this.page, 'card.number');
        await cardNumberframe.fill(this.enterCardNumber, CardNumber);
        await textHelper.setText(this.page, this.enterExpiryDate, ExpireDate);
        await textHelper.setText(this.page, this.enterCardHolder, CardHolder);
        const cvvframe = await frameHelper.switchToFrameByName(this.page, 'card.cvv');
        await cvvframe.fill(this.enterCVV, CVV);

        // Click on payment Now
        await buttonHelper.click(this.page, this.payBtn);
        // await this.waitForNavigation();  // wait for page navigation after clicking on Pay Button
        await this.page.waitForTimeout(2000);
        
        // Click on submit payment Now
        const submitPayBtnframe = await frameHelper.switchToFrameByClass(this.page, 'wpwl-target');
        await submitPayBtnframe.click(this.submitPayBtn);

        await this.page.waitForTimeout(2000);
    }

}
module.exports = payment;
