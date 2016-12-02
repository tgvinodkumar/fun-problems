function volume (heights) {
  // Write your code here, and
  // return your final answer.
  var leftWall = 0;
  var rightWall = 0;
  var leftWallFixed = false;
  var rightWallFixed = false;
  var vol = 0;
  for (var i = 0; i < heights.length; i++) {
    debugger
    if (heights[leftWall] > heights[i] && !leftWallFixed){
      leftWall = i-1;
      leftWallFixed = true;
    }
    if (leftWallFixed && i-1 !== leftWall){
      if (heights[leftWall] <= heights[i]){
        rightWall = i;
        rightWallFixed = true;
      }
    }
    if (leftWallFixed && rightWallFixed){
      // vol += heights[leftWall];
      temp = heights[leftWall]
      leftWall += 1;
      while(leftWall <= rightWall-1){
        vol += (temp - heights[leftWall]);
        leftWall += 1;
      }
      leftWall = rightWall;
      leftWallFixed = false;
      rightWallFixed = false;
    }
  }
  console.log(vol);
  return vol;
}

volume([4,3,0,3,4]); //6