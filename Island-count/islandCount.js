function countIslands (mapStr) {
  var map = mapStr.split('\n').map( line => line.split(''));
  var count = 0;
  for (var row = 0; row < map.length; row++) {
    for (var col = 0; col < map[row].length; col++) {
      if (map[row][col] === '0') {
        count += 1;
        markAsVisited(row, col);
      }
    }
  }

  return count;

  function markAsVisited ( x, y) {

    map[x][y] = '.';
    if (map[x-1] && map[x-1][y] === '0'){
      markAsVisited(x-1, y);
    }
    if (map[x+1] && map[x+1][y] === '0'){
      markAsVisited(x+1, y);
    }
    if (map[x][y+1] === '0'){
      markAsVisited(x, y+1);
    }
    if (map[x][y-1] === '0'){
      markAsVisited(x, y-1);
    }
  }

}


// function countIslands (mapStr) {
//     var grid = mapStr.split('\n').map( line => line.split(''));
//     var x, y, count = 0, m = grid.length, n;
//     for(x = 0; x < m; x++){
//         n = grid[0].length;
//         for(y = 0; y < n; y++){
//             if(grid[x][y] === '0'){
//                 bfs([{row : x, col : y}]);
//                 count++;
//             }
//         }
//     }
//     return count;

//     function bfs(queue){
//         var len = queue.length, top, split, i, j;
//         while(len--){
//             top = queue.pop();        
//             i = top.row; j = top.col;
//             if(grid[i] && grid[i][j] && grid[i][j] === '0'){
//                 grid[i][j] = '2';
//                 queue.push({row : i + 1, col : j});
//                 queue.push({row : i - 1, col : j});
//                 queue.push({row : i, col : j + 1});
//                 queue.push({row : i, col : j - 1});
//             }
//         }
//         if(queue.length !== 0){
//             bfs(queue);
//         }
//     }
// };

console.log(countIslands(".0...\n.00..\n....0"))