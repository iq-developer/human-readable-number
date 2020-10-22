//module.exports = function toReadable(number) {
function toReadable(number) {
  number = '' + number;
  let units1_9 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let units20_90 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let unitsBig = ['hundred', 'thousand', 'million', 'billion', 'trillion'];
  let result = '';
  let ones = number[number.length-1];
  let tens = number[number.length-2];
  let hundreds = number[number.length-3];

  if (number === 0){
    result = 'zero';

  } else if (number < 20){
    result = units1_9[number];

  } else if (number < 100){
    tens = ('' + number)[0];
    ones = ('' + number)[1];
    result = units20_90[tens] + ' ' + units1_9[ones];

  }  else if (number < 1000){
    hundreds = ('' + number)[0];
    tens = ('' + number)[1];
    ones = ('' + number)[2];
    result = units1_9[hundreds] + ' ' + unitsBig[0] + ' ' + units20_90[tens] + ' ' + units1_9[ones];
  }

  else if (number < 1000000){
    thousands = ('' + number).slice(0, -3);
    thousandsReadable = toReadable(thousands);

  }

  return result;
}

console.log ( toReadable(123456) );
