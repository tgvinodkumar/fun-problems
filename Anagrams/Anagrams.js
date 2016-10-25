function isAnagram (a, b) {
  var string1 = a.split('').sort().filter(function(letter){ return (letter != ' ')}).join('');
  var string2 = b.split('').sort().filter(function(letter){ return (letter != ' ')}).join('');
  console.log(string1 , string2)

}

isAnagram("silent", "listen")