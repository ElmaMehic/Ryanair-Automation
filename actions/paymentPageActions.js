var Pages = require('../pages/pages.js');
var pages = new Pages();
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;

var paymentPageActions = function () {

    this.fillPassengersDetails = function () {
        browser.sleep(1500);
        browser.ignoreSynchronization = true;
        //this.verifyElementIsDisplayed(pages.paymentPage.dropdownPassengers(0));
        //pages.paymentPage.passengerTitlePO().click();
        //pages.paymentPage.chooseTitlePO();
        //pages.paymentPage.passengerFirstNamePO().sendKeys('Elma');
        //pages.paymentPage.passengerLastNamePO().sendKeys('Mehic');
        //pages.paymentPage.passengerTitlePT().click();
        //pages.paymentPage.chooseTitlePT().click();
        //pages.paymentPage.passengerFirstNamePT().sendKeys('Emina');
        //return pages.paymentPage.passengerLastNamePT().sendKeys('Mehic');
        pages.paymentPage.dropdownPassengers(0).click();
        pages.paymentPage.listOfCompanions().get(0).click();
        //browser.sleep(3000);
        pages.paymentPage.dropdownPassengers(1).click();
        return pages.paymentPage.listOfCompanions().get(1).click();

    };
    this.verifyElementIsDisplayed = function (element) {
        return expect(element.isDisplayed()).to.eventually.be.true;
    };
    this.fillCardDetails = function () {
        browser.executeScript('window.scrollTo(0,document.body.scrollHeight);').then(function () {
           browser.sleep(5000);
            pages.paymentPage.radioButtonPayment().get(5).click();
        });
        pages.paymentPage.securityCode().click();
        return pages.paymentPage.securityCode().sendKeys('333');
    };

    this.submitDeclinedPayment = function () {
        pages.paymentPage.acceptTermsOfService().get(4).click();
        return pages.paymentPage.payNow().click();
    };

    this.submitSecondTime = function () {
        pages.paymentPage.payNow().click();
        browser.sleep(2000);
        return pages.paymentPage.paymentDeclinedTwice().click();
    }

};

module.exports = paymentPageActions;