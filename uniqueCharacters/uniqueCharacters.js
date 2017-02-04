function uniqueCharacters(str){
  // can't have unique characters if the length is greater than the no. of possible characters
  if (str.length > 256) return false;
  for(let i = 0; i < str.length; i++){
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
      return false;
    }
  }
  return true;
}

function uniqueCharacters(str){
  // can't have unique characters if the length is greater than the no. of possible characters
  if (str.length > 256) return false;
  var char_set = new Array(256);
  for(let i = 0; i < str.length; i++){
    if (char_set[str.charCodeAt(i)]){
      return false;
    }
    char_set[str.charCodeAt(i)] = true;
  }
  return true;
}

function bitFunc(str) { // This is brilliant;

  // return 37 << 3 == 37 * Math.pow(2,shiftAmt) && 37 << 3  == 37 * 8;

  //return -8 >> 2 // (-8 / 2^shiftAmt)
  var checker = 0;

  for (var i = 0; i < str.length; i++) {
    var val = str.charCodeAt(i) - 'a'.charCodeAt(0);
    console.log(str.charCodeAt(i) + " " + 'a'.charCodeAt(0));
    console.log(val);
    console.log((checker & (1 << val)).toString(2));
    if ((checker & (1 << val)) > 0) {
      //console.log((checker & (1 << val)).toString(2));
      return false;

    }
    checker |= (1 << val);
    console.log(checker.toString(2));
  }
  //console.log((999999999999999999999999999999999).toString(2));
  
  return true;


}

console.log(bitFunc("abcdefghijklmnopqrstuvwxyz"));