var Pages = require('../pages/pages.js');
var pages = new Pages();
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;

var extrasPageActions = function ()
{

    this.closeSeats = function()
    {
        return pages.extrasPage.buttonCloseSeatMap().click();
    };

    this.addingBags = function()
    {
        pages.extrasPage.openBags().click();
        pages.extrasPage.addBags().click();
        pages.extrasPage.closeBags().click();
        pages.extrasPage.checkOut().click();
        return pages.extrasPage.noThanksButton().click();
    };

};
module.exports = extrasPageActions;