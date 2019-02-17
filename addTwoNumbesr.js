// #2
/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let head = new ListNode(-1);
  let node = head;

  while (l1 !== null || l2 !== null) {
    let val1;
    let val2;
    if (l1 === null) {
      val1 = 0;
    } else {
      val1 = l1.val;
    }

    if (l2 === null) {
      val2 = 0;
    } else {
      val2 = l2.val;
    }

    if (val1 + val2 + carry >= 10) {
      node.next = new ListNode(val1 + val2 + carry - 10);
      carry = 1;
    } else {
      node.next = new ListNode(val1 + val2 + carry);
      carry = 0;
    }

    node = node.next;
    if (l1 !== null) { l1 = l1.next; }
    if (l2 !== null) { l2 = l2.next; }

  }

  if (carry === 1) {
    node.next = new ListNode(1);
  }

  return head.next;
};