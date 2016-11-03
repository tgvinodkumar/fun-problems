function mergeSort (array) {

  if (array.length === 1) return array;
  debugger
  var mid = Math.floor(array.length/2);
  var left = mergeSort(array.slice(0,mid));
  var right = mergeSort(array.slice(mid));

  return merge (left, right);
}

function merge(a, b){
  var result = [];
  while(a.length > 0 && b.length> 0){
    if (a[0] > b[0]){
      result.push(b.shift())
    } else {
      result.push(a.shift())
    }
  }
  return result.concat(a.length ? a : b)

}

console.log(mergeSort([38,27,43,3,9,82,10]));