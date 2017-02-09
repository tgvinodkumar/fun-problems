function verifyPalindrome(headNode) {

	var slow = headNode;
	var fast = headNode;
	var stack = [];

	while(fast != null && fast.next !=null){
		stack.push(slow.data);
		slow = slow.next;
		fast = fast.next.next; // when fast reaches the end slow will be at the middle.
	}

	if (fast != null) {// has odd number of nodes, skip the middle node
		slow = slow.next;
	}
	// now we have the stack filled with data for the fist half of the linked list
	// now verify the rest of the linked list with the data in the stack.

	while (slow != null){
		if (slow.data != stack.pop()) return false;
		slow = slow.next;
	}
	return true;
}

// headNode = {
// 	data: 123,
// 	next: node,
// }