You are given the head of a linked list, a value to be inserted, and an offset n. Write a function that inserts the provided value n spaces from the end of the linked list.

Explanation:

You are given a linked list as shown:

A -> B -> C -> D -> E -> null

Calling insertFromEnd(linkedList, F, 2) would return the following:

A -> B -> C -> F -> D -> E -> null

An offset of 0 should place the value at the end of the list.
An offset that is equal to the length of the list should place the value at the head of the list.
An offset that is greater than the length of the list should return the original linked list unmodified.

Constraint 1: Do this in linear time

Constraint 2: Do this in constant space