// #206

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  
  
  while (curr) {
      let temp = curr.next;
      curr.next = prev;
      
      prev = curr;
      curr = temp;
  }
  
  return prev;
};