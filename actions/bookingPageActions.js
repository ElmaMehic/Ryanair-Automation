var Pages = require('../pages/pages.js');
var pages = new Pages();
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;
var bookingPageActions = function ()
{
    this.chooseFlight = function ()
    {
        browser.sleep(3000);
        pages.bookingPage.selectFlight().click();
        browser.sleep(1500);
       return pages.bookingPage.chooseStandardFare().click();
    };
    this.continueBooking = function()
    {
        browser.sleep(1500);
        return pages.bookingPage.continueWithBooking().click();
    }
};
module.exports = bookingPageActions;