var paymentPage = function ()
{
    this.dropdownPassengers = function(n)
    {
        return element.all(by.css("[id^='firstName']")).get(n);
    };

    this.listOfCompanions = function ()
    {
        return element.all(by.css('.companion-dropdown'));
    };

    this.radioButtonPayment = function()
    {
        return element.all(by.css('label.core-radio-label'));
    };

    this.securityCode = function ()
    {
        return element.all(by.css('.core-input.ng-pristine.ng-untouched.ng-empty.ng-invalid.ng-invalid-required.ng-valid-pattern.ng-valid-minlength.ng-valid-maxlength'));
    };

    this.acceptTermsOfService = function ()
    {
        return element.all(by.css('label.core-checkbox-label'));
    };

    this.payNow = function ()
    {
        return element(by.css('.core-btn-primary.core-btn-medium'));
    };

    this.paymentUnauthorized = function ()
    {
        return element(by.css('[translate="common.components.payment_forms.error_explain_declined"]'));
    };
    this.paymentDeclinedTwice = function()
    {
        return element(by.css('[translate="common.components.failed-payment.ok"]'));
    };
};
module.exports = paymentPage;