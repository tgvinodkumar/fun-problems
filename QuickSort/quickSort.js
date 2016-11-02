const sort = numbers => {
  function recurse (array) {
    if (array.length === 0) return [];
    var random = Math.floor(array.length * Math.random());
    var temp = array[random];
    array[random] = array[0];
    array[0] = temp;
    var pivot = array[0];
    var left = [];
    var right = [];
    for (var i = 1; i < array.length; i++) {
      if (array[i] <= pivot) left.push(array[i]);
      if (array[i] > pivot) right.push(array[i])
    }
    return(recurse(left).concat(pivot, recurse(right)))

  }
  return recurse(numbers);
}

console.log(sort([ 428, 578, 292, 708, 867, 965, 529, 112, 802, 982 ]))