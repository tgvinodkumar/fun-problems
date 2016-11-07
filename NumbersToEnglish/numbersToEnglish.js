function threeDigitNumber(num){
  var str ='';
var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
  if (num >= 100) {
    str += numbersToWords[Math.floor(num/100)] + " hundred ";
  }
  var temp = num % 100;
  if (temp===0) return str.trim(); 
  if (temp>0 && temp<20){
    str += numbersToWords[temp];
  } else if (temp%10===0){
    str += numbersToWords[temp];
  } else {
    str += numbersToWords[10 * Math.floor(temp/10)] + "-" + numbersToWords[temp%10];
  }
  return str.trim();
}

function numberToEnglish (number) {
  var string = '';
  var temp = number;
  var store;
  
   if (temp === 0) {return "zero"}

  if (temp >= 1000000000000000000){
    store = temp%1000000000000000000;
    temp = Math.floor(temp/1000000000000000000);
    string += threeDigitNumber(temp) + ' quintillion' + ' ';
    temp = store;
  }

  if (temp >= 1000000000000000){
    store = temp%1000000000000000
    temp = Math.floor(temp/1000000000000000);
    string += threeDigitNumber(temp) + ' quadrillion' + ' ';
    temp = store;
  }

  if (temp >= 1000000000000){
    store = temp%1000000000000
    temp = Math.floor(temp/1000000000000);
    string += threeDigitNumber(temp) + ' trillion' + ' ';
    temp = store;
  }

  if (temp >= 1000000000){
    store = temp%1000000000;
    temp = Math.floor(temp/1000000000);
    string += threeDigitNumber(temp) + ' billion' + ' ';
    temp = store;
  }

  if (temp >= 1000000){
    debugger
    store = temp%1000000
    temp = Math.floor(temp/1000000);
    string += threeDigitNumber(temp) + ' million' + ' ';
    temp = store;
  }

  if (temp >= 1000){
    store = temp%1000;
    temp = Math.floor(temp/1000);
    string += threeDigitNumber(temp) + ' thousand' + ' ';
    temp = store;
  }
  
 
  temp = temp % 1000;
  if (temp > 0){
    string += threeDigitNumber(temp);
  }
  
  return string.trim();
}

console.log(numberToEnglish(978987678))
