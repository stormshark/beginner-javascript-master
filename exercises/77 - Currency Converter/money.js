const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};


const currencyFromCombo = document.querySelector('[name="from_currency"]');
const currencyToCombo = document.querySelector('[name="to_currency"]');
const currencyKeyValue = Object.entries(currencies);


//fill Events
currencyFromCombo.addEventListener('change', getCurrencyRates);
currencyToCombo.addEventListener('change', deneme => console.log("asdsadasdasdasda"));



let currencyList = currencyKeyValue
                        .map( ([currencyKey,currencyName] ) =>
                        `<option value="${currencyKey}">${currencyKey} - ${currencyName}</option>`
                            )
                       .join('');


currencyFromCombo.innerHTML = currencyList;


// TODO #1 remove selected one from second combo
currencyToCombo.innerHTML = currencyList;


// Call after first one and add it to the URL

// TODO #2 how to pass variable and stop event listener for first time ??????
async function getCurrencyRates(event) {

event.preventDefault();
baseCurrency ="USD";
 
var myHeaders = new Headers();
myHeaders.append("apikey", "Xys0dskeXw9MJLt1qdtWPGVwq6iu1EwG");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const requestResult = await fetch(`https://api.apilayer.com/exchangerates_data/latest?base=${baseCurrency}`, requestOptions)
  .catch(error => console.log('error', error));

console.log(await requestResult.json());


}
//Calculate based on second on 


// result 


