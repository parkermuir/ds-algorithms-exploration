/*

Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
*/

var ListNode = function(value) {
  this.value = value;
  this.next = null;
};

var middleNode = function(head) {
  let length = 0;
  let node1 = head;

  while (node1 !== null) {
    length++;
    node1 = node1.next;
  }

  // if (length === 1) {
  //     return head;
  // }
  let target = Math.floor(length / 2) + 1;
  let node2 = head;
    
  for (let i = 1; i <= length; i++) {
    console.log(i, target);
    if (i === target) {
      return node2;
    } else {
      node2 = node2.next;
    }
  }
};

console.log(middleNode({value: 1, next: null}));