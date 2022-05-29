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
const to_amountText = document.querySelector('.to_amount');

//fill Events
//let firstComboResult = currencyFromCombo.addEventListener('change', getCurrencyRates("USD"));
//currencyToCombo.addEventListener('change', test => console.log("inside second combo"));



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
async function getCurrencyRates(_baseCurrency) {
baseCurrency =_baseCurrency;
 
var myHeaders = new Headers();
myHeaders.append("apikey", "Xys0dskeXw9MJLt1qdtWPGVwq6iu1EwG");
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const requestResult = await fetch(`https://api.apilayer.com/exchangerates_data/latest?base=${baseCurrency}`, requestOptions)
  .catch(error => console.log('error', error));

let result = await requestResult.json();
let conversionRate= await result.rates.TRY;
console.log("turkish lira rate: "+ conversionRate);
return conversionRate;
}

//Calculate based on second on 
const inputNumber = document.querySelector('input');
inputNumber.addEventListener('change',calculateCurrencyChange);
//inputNumber.addEventListener('input',calculateCurrencyChange);

async function calculateCurrencyChange(e) {
e.preventDefault();
const enteredValue= e.currentTarget.value;
const conversionRate = await getCurrencyRates("USD");
to_amountText.textContent= enteredValue * conversionRate ;

}

// result 









// // events and args should be of type Array
// function addMultipleListeners(element,events,handler,useCapture,args){
//   if (!(events instanceof Array)){
//     throw 'addMultipleListeners: '+
//           'please supply an array of eventstrings '+
//           '(like ["click","mouseover"])';
//   }
//   //create a wrapper to be able to use additional arguments
//   var handlerFn = function(e){
//     handler.apply(this, args && args instanceof Array ? args : []);
//   }
//   for (var i=0;i<events.length;i+=1){
//     element.addEventListener(events[i],handlerFn,useCapture);
//   }
// }

// function handler(e) {
//   // do things
// };

// // usage
// addMultipleListeners(
//     document.getElementById('first'),
//     ['touchstart','click'],
//     handler,
//     false);


