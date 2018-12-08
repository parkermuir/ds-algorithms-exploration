
const removeNthFromEnd = function (head, n) {
  let current = head;
  let leader;
  let count;

  while (current2 !== null) {
    while (count < n) {
      leader = leader.next;
      count++;
    }

    current = current.next;
    leader = leader.next;

  }
  //once this loop breaks you need remove the node
  //then return head
  
};