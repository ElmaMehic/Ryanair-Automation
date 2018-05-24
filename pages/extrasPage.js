var extrasPage = function ()
{
    this.buttonCloseSeatMap = function()
    {
        return element(by.css('.core-btn-link.footer-message-content__button'));
    };

    this.openBags = function()
    {
        return element(by.css('.extras-card__wrapper.extras-card__wrapper--BAGS.extras-card__state.extras-card__state--DEFAULT'));
    };

    this.addBags = function()
    {
        return element.all(by.css('[data-ref="single-bag-in-row-bags-selector-icon-0"]')).get(0);
    };

    this.closeBags = function()
    {
        return element(by.css('.core-btn-primary.dialog-overlay-footer__ok-button'));
    };

    this.checkOut = function ()
    {
        return element(by.css('[data-ref="header-checkout-btn"]'));
    };

    this.noThanksButton = function ()
    {
        return element(by.css('.popup-msg__button.popup-msg__button--cancel'));
    };
};
module.exports = extrasPage;