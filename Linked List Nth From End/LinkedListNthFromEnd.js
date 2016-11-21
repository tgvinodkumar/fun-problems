var insertFromEnd = function(linkedList, value, offset) {
  var length = 0;
  function calculateLength(node){
    length += 1;
    if (node.next === null) return;
    calculateLength(node.next);
  }
  calculateLength(linkedList);
  if (offset === length){
    var newNode = Node(value);
    newNode.next = linkedList;
    linkedList = newNode;
    return linkedList;
  }

  function traverseNinsert(node, count){
    if (count+offset === length){
      var newNode = Node(value);
      var temp = node.next;
      node.next = newNode;
      newNode.next = temp;
      return;
    }
    count += 1;
    traverseNinsert(node.next, count);
  }

  traverseNinsert(linkedList, 1);
  return linkedList;

};

function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

    var list = Node('A');
    var nodeB = list.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');

console.log(insertFromEnd(list, 'F', 2))