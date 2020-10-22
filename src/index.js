//module.exports = function toReadable(number) {
function toReadable(number) {
  number = '' + number;
  let arrFirsts = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arrTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let arrBig = ['hundred', 'thousand', 'million', 'billion', 'trillion'];
  let result = '';
  let ones = number[number.length-1];
  let tens = number[number.length-2];
  let hundreds = number[number.length-3];
  let thousands = number.slice(0, -3);

  if (number === 0){
    result = 'zero';

  } else if (number < 20){
    result = arrFirsts[number];

  } else if (number < 100){
    result = arrTens[tens] + ' ' + arrFirsts[ones];

  }  else if (number < 1000){
    result = arrFirsts[hundreds] + ' ' + arrBig[0] + ' ' + arrTens[tens] + ' ' + arrFirsts[ones];
  }

  else if (number < 1000000){
    thousandsReadable = toReadable(thousands);

  }

  return result;
}

console.log ( toReadable(123) );
