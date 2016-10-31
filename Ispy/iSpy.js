function spyOn(fn) {
  // todo
  var count=0;
  var args = [];
  var returnedVals = [];
  function spy() {
    count += 1;
    debugger
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    var result = fn.apply(null, arguments);
    returnedVals.push(result);
    return result;
  }

  spy.callCount = function() {
    return count;
  }
  spy.wasCalledWith = function(arg) {
    return (args.indexOf(arg) !== -1)
  }
  spy.returned = function(val) {
    if (returnedVals.length > 0){
      return (returnedVals.indexOf(val) !== -1)
    }
    return false;
  }
  return spy;
}

    var spy = spyOn(function(str) {
      return str + ' world';
    });

    spy('hello');

    spy.wasCalledWith('hello')