var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;
module.exports = function ()
{
    this.setDefaultTimeout(400 * 1000);

    this.Before(function ()
    {
        browser.driver.manage().window().maximize();
        browser.get('https://sit-aem.ryanair.com/gb/en/');
    });

    this.Given(/^I am logged in user$/, function ()
    {
        return actions.homePageActions.userLogin();
    });

    this.Given(/^I select flight$/, function ()
    {
        return actions.homePageActions.chooseFlightCriteria();
    });

    this.Given(/^I select fare$/, function ()
    {
        return actions.bookingPageActions.chooseFlight();
    });

    this.When(/^I proceed to Potential trip page$/, function ()
    {
        return actions.bookingPageActions.continueBooking();
    });

    this.When(/^I cancel seat pop up$/, function ()
    {
        browser.sleep(1000);
        return actions.extrasPageActions.closeSeats();
    });

    this.When(/^I add bags to my booking$/, function ()
    {
        return actions.extrasPageActions.addingBags();
    });

    this.When(/^I pay with declined card$/, function ()
    {
        actions.paymentPageActions.fillPassengersDetails();
        actions.paymentPageActions.fillCardDetails();
        return actions.paymentPageActions.submitDeclinedPayment();
    });

    this.Then(/^I see payment declined message$/, function ()
    {
        browser.sleep(6000);
        return expect(pages.paymentPage.paymentUnauthorized().isDisplayed()).to.eventually.be.true;
    });

    this.Then(/^after second declined payment I am redirected to home page$/, function ()
    {
        browser.sleep(5000);
        actions.paymentPageActions.submitSecondTime();
        browser.sleep(5000);
        return expect(browser.driver.getCurrentUrl()).to.eventually.contain('sit-aem.ryanair.com');
    });
}