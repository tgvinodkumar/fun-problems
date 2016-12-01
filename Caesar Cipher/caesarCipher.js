function cipher (alpha, offset, message, command) {
  // Write your code here, and
  // return your final answer.
  // let index = 0;
  // let obj = {};
  // let result = '';
  // for (let i = alpha.length - 1; i >= 0; i--) {
  //   debugger
  //   if (command === 'encode'){
  //     if ( (i+offset)>=alpha.length){
  //       index = Math.abs(alpha.length - (i+offset));
  //     } else {
  //       index = i + offset;
  //     }
  //   } else {
  //     if ( (i-offset) < 0 ){
  //       index = Math.abs(alpha.length + (i-offset));
  //     } else {
  //       index = i - offset;
  //     }
  //   }

  //   if (!obj[alpha[i]]){
  //     obj[alpha[i]] = alpha[index]
  //   }
  // }
  // console.log(obj)

  // for (var i = 0; i < message.length; i++) {
  //   if (obj[message[i]]){

  //   result += obj[message[i]];
  //   } else {
  //     result += message[i];
  //   }
  // }
    
  // return result;

  const encode = (id) => id + offset;
  const decode = (id) => id - offset + alpha.length;
  const func = (command === 'encode') ? encode : decode;

  return message
        .split('')
        .map( (ch) => {
          let pos = alpha.indexOf(ch);
          return (pos > -1)?alpha[func(pos) % alpha.length] : ch;})
        .join('');
}

console.log(cipher("abcde", 1, "hallo thara","decode"));

