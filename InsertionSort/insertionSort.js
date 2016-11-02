function insertionSort (array) {
  for (var i = 0; i < array.length; i++) {
    var index = i;
    for (var j = i-1; j >= 0; j--) {
      if (array[j] > array[index]){
        var temp = array[j];
        array[j] = array[index];
        array[index] = temp;
        index = j;
      }
    }
  }
  return array;
}

console.log(sort([ 428, 578, 292, 708, 867, 965, 529, 112, 802, 982 ]))