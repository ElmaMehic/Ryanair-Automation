var Pages = require('../pages/pages.js');
var pages = new Pages();
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;
var homePageActions = function ()
{
    this.userLogin = function ()
    {
        pages.homePage.login().click();
        browser.sleep(2000);
        pages.loginPage.inputEmail().sendKeys('mehice@ryanair.com');
        browser.sleep(2000);
        pages.loginPage.inputPassword().sendKeys('ABcd1234');
        browser.sleep(2000);
        return pages.loginPage.loginButton().click();
    };

    this.chooseFlightCriteria = function ()
    {
        pages.homePage.oneWayFlight().click();
        pages.homePage.flightFrom().clear();
        pages.homePage.flightFrom().sendKeys('Dublin');
        pages.homePage.flightFrom().sendKeys(protractor.Key.TAB);
        browser.sleep(500);
        pages.homePage.flightTo().sendKeys('Lisbon');
        pages.homePage.flightTo().sendKeys(protractor.Key.TAB);
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,400);').then(function ()
        {
            pages.homePage.chooseFlyOutDate('05-06-2018').click();
        });
        pages.homePage.choosePassengers().click();
        pages.homePage.addAdults().click();
        return pages.homePage.submit().click();
    };

};

module.exports = homePageActions;