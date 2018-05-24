var HomePage = function ()
{
    this.login = function ()
    {
        return element(by.css('[ui-sref="login"]'));
    };

    this.oneWayFlight = function ()
    {
        return element(by.css('[type="radio"][value="one-way"]'));
    };

    this.flightFrom = function ()
    {
        return element(by.css('input[aria-labelledby="label-airport-selector-from"]'));
    };

    this.flightTo = function ()
    {
        return element(by.css('input[aria-labelledby="label-airport-selector-to"]'));
    };

    this.choosePassengers = function ()
    {
        return element(by.css('.dropdown-handle'));
    };

    this.addAdults = function ()
    {
        return element.all(by.css('[data-ref="core-inc-dec-increment"]')).get(0);
    };

    this.submit = function ()
    {
        return element(by.css('[translate="common.buttons.lets_go"]'));
    };

    this.chooseFlyOutDate = function (date)
    {
        return element(by.css('[data-id="'+date+'"]'));
    };
}

module.exports = HomePage;