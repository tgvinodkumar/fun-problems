var asyncMap = function(tasks, callback){
  var results = [];
  var track = 0
  for(var i=0; i < tasks.length; i++){
    (function(i){
      tasks[i]((val) => {
        results[i] = val;
        track += 1;
        if (track === tasks.length){
          callback(results);
        }
      })
    })(i)
  }
};  

