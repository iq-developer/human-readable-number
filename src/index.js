//module.exports = function toReadable(number) {
function toReadable(number) {
  number = '' + number;
  let arrFirsts = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
  let arrTens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];

  let ones = number[number.length-1];
  let tens = number[number.length-2];
  let hundreds = number[number.length-3];
  let thousands = number.slice(-6, -3);
  let thousandsReadable;
  let millions = number.slice(-9, -6);
  let millionsReadable;

  if ( !Number.isInteger(+number)) {
    return 'float numbers not supported';
  }
  if (tens == 1) {
    ones = number.slice(number.length-2);
  }
  if (thousands) {
    thousandsReadable = toReadable(thousands);
  }
  if (millions) {
    millionsReadable = toReadable(millions);
  }

  if (number < 0){
    return 'minus ' + toReadable(Math.abs(number));

  } else if (number == 0){
    return 'zero';

  } else if (number < 20){
    return arrFirsts[number];

  } else if (number < 100){
    return arrTens[tens] + arrFirsts[ones];

  } else if (number < 1000){
    return arrFirsts[hundreds] + ' hundred' + arrTens[tens] + arrFirsts[ones];

  } else if (number < 1000000){
    return thousandsReadable + ' thousand' + arrFirsts[hundreds] + ' hundred' + arrTens[tens] + arrFirsts[ones];

  } else if (number < 1000000000){
    return millionsReadable + ' million' + thousandsReadable + ' thousand' + arrFirsts[hundreds] + ' hundred' + arrTens[tens] + arrFirsts[ones];

  } else {
    return 'wrong input';
  }

}

console.log ( toReadable(654321) );
