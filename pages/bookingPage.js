var BookingPage = function ()
{
    this.selectFlight = function ()
    {
        return element.all(by.css('.flight-header__min-price .flights-table-price .core-btn-primary')).get(0);
    };

    this.chooseStandardFare = function ()
    {
        return element.all(by.css('span.flights-table-fares__fare-radio.ng-scope')).get(0);
    };

    this.continueWithBooking = function ()
    {
        return element.all(by.css('[class="cart ng-scope cart-empty"] [class="trips-basket trips-cnt ng-scope"]'));
    };
}
module.exports = BookingPage;