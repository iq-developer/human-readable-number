module.exports = function toReadable(number) {

  number = '' + +number;
  let arrFirsts = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
  let arrTens = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

  let ones = number[number.length-1];
  let tens = number[number.length-2];
  let hundreds = number[number.length-3];
  let hundredsReadable = '';
  let thousands = number.slice(-6, -3);
  let thousandsReadable = '';
  let millions = number.slice(-9, -6);
  let millionsReadable = '';

  if ( !Number.isInteger(+number)) {
    return 'float numbers not supported';
  }
  if (tens == 1) {
    ones = number.slice(number.length-2);
  }
  if (+hundreds) {
    hundredsReadable = toReadable(hundreds) + ' hundred ';
  }
  if (+thousands) {
    thousandsReadable = toReadable(thousands) + ' thousand ';
  }
  if (+millions) {
    millionsReadable = toReadable(millions) + ' million ';
  }

  if (number < 0){
    return 'minus' + toReadable( Math.abs(number) );

  } else if (number == 0){
    return 'zero';

  } else if (number < 20){
    return (arrFirsts[number]).trim();

  } else if (number < 100){
    return (arrTens[tens] + arrFirsts[ones]).trim();

  } else if (number < 1000){
    return (arrFirsts[hundreds] + 'hundred ' + arrTens[tens] + arrFirsts[ones]).trim();

  } else if (number < 1000000){
    return (thousandsReadable + hundredsReadable + arrTens[tens] + arrFirsts[ones]).trim();

  } else if (number < 1000000000){
    return (millionsReadable + thousandsReadable + hundredsReadable + arrTens[tens] + arrFirsts[ones]).trim();

  } else {
    return 'wrong input';
  }

}
