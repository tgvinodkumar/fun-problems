// function rotate(matrix, size){

//   console.log('before: ',matrix);

//   for (var layer = 0; layer < size; layer++) {
//     debugger
//     for (var i = layer; i < size - layer - 1; i++) {
//       var top = matrix[layer][i]; // save top
//       //left - > top
//       matrix[layer][i] = matrix[size - i - 1][layer];

//       // bottom -> left
//       matrix[size - i - 1][layer] = matrix[size - layer - 1][size - i - 1];

//       //right -> bottom
//       matrix[size - layer - 1][size - i - 1] = matrix[i][size - layer - 1];

//       // top -> right
//       matrix[i][size - layer - 1] = top;
//     }

//   }

//   return matrix;

// }

function rotate(matrix, size){

  let rotatedMatrix = [];
  let count = size-1;
  while(matrix[0].length > 0){
    count = size-1;
    let temp = [];
    while (count > -1){
      temp.push(matrix[count].pop());
      count -= 1;
    }
    rotatedMatrix.unshift(temp);
  }

  return rotatedMatrix;
}

console.log(rotate([
  [2, 7, 0, 4, 9, 1, 8, 3, 2, 9], 
  [0, 2, 3, 6, 1, 8, 2, 5, 8, 7], 
  [5, 7, 2, 1, 0, 4, 4, 8, 9, 0], 
  [7, 3, 8, 5, 7, 3, 7, 4, 4, 3], 
  [3, 9, 1, 4, 7, 7, 8, 7, 4, 6], 
  [1, 7, 7, 7, 1, 8, 9, 2, 2, 3], 
  [3, 7, 0, 9, 3, 7, 5, 6, 6, 5], 
  [4, 5, 5, 8, 9, 1, 9, 3, 9, 6], 
  [0, 4, 0, 0, 0, 0, 2, 7, 3, 4],
  [2, 5, 4, 0, 6, 0, 2, 7, 7, 2]], 10));

    // 2    0    4    3    1    3    7    5    0    2
    // 5    4    5    7    7    9    3    7    2    7
    // 4    0    5    0    7    1    8    2    3    0
    // 0    0    8    9    7    4    5    1    6    4
    // 6    0    9    3    1    7    7    0    1    9
    // 0    0    1    7    8    7    3    4    8    1
    // 2    2    9    5    9    8    7    4    2    8
    // 7    7    3    6    2    7    4    8    5    3
    // 7    3    9    6    2    4    4    9    8    2
    // 2    4    6    5    3    6    3    0    7    9