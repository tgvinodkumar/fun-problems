function findBeginning(headNode) {

	var slow = headNode;
	var fast = headNode;

	while(fast != null && fast.next !=null){
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) { // this means it is a circular linked list
			break;
		}
	}

	// lets find the beginning of the circular list

	// rest slow to head and leave the fast where it is
	slow = headNode;
	while(slow != fast){
		slow = slow.next;
		fast = fast.next;
	}
	// after exiting while loop slow and fast should be at the beginnig node of the circular linked list

	return fast;
}

// headNode = {
// 	data: 123,
// 	next: node,
// }