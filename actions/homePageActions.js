var Pages = require('../pages/pages.js');
var pages = new Pages();
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;
var homePageActions = function () {

    this.userLogin = function () {
        pages.homePage.btnLogin().click();
        browser.sleep(2000);
        pages.loginPage.fieldEmail().sendKeys('mehice@ryanair.com');
        browser.sleep(2000);
        pages.loginPage.fieldPassword().sendKeys('ABcd1234');
        browser.sleep(2000);
        return pages.loginPage.btnLogin().click();
    };

    this.chooseFlightCriteria = function () {
        pages.homePage.radioBtnOneWay().click();
        pages.homePage.fieldFrom().clear();
        pages.homePage.fieldFrom().sendKeys('Dublin');
        pages.homePage.fieldFrom().sendKeys(protractor.Key.TAB);
        browser.sleep(500);
        pages.homePage.fieldTo().sendKeys('Lisbon');
        pages.homePage.fieldTo().sendKeys(protractor.Key.TAB);
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            pages.homePage.fieldFlyOutDate('10-06-2018').click();
        });
        pages.homePage.dropdownPassengers().click();
        pages.homePage.btnPlusAdults().click();
        return pages.homePage.btnSubmit().click();
    };

};

module.exports = homePageActions;