var removeElements = function (head, val) {

  if (!head) {
    return null;
  }

  if (head.val === val) {
    head = head.next;
  }

  let prev = head;
  let current = head.next;

  while (current !== null) {
    if (current.val === val) {
      let temp = current;
      prev.next = current.next;
      current = temp.next;
    } else {
      current = current.next;
      prev = prev.next;
    }
  }
  return head;
};