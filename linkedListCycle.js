var hasCycle = function (head) {

  if (head === null) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    if (slow === fast) {
      return true;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};