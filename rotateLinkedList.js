var rotateRight = function (head, k) {
  let newTail = head;
  if (!head) return head;
  let size = 1;

  while (newTail.next) {
    newTail = newTail.next;
    size++
  }

  newTail.next = head;

  let offset = size - (k % size)

  while (offset > 0) {
    head = head.next;
    newTail = newTail.next;
    offset--;
  }

  newTail.next = null;
  return head;
};