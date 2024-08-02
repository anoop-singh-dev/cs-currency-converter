import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_YcZxtffiz0mOj6KwG5uSM1sqMdhEnLIGkXeaNukL');

// Convert currency from one unit to other unit
export async function convertCurrency(fromCurrency, toCurrency, units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });

    const multiplier = res.data[toCurrency];
    return multiplier*units;
}

