const Node = function(value) {
  this.value = value;
  this.next = null;
};

const createList = (length) => {
  let head = new Node(0);
  let current = head;
  let count = 1;

  while (count < length) {
    current.next = new Node(count++);
    current = current.next;
  }

  return head;
};

const removeNthFromEnd = function (head, n) {
  let current = head;
  let leader = head;
  let count = 0;

  //move leader to starting point n + 1 nodes ahead of current
  //n + 1 because current wants to end up one before the target prior to removal
  while (count <= n) {
    leader = leader.next;
    count++;
  }

  // console.log('Count=', count);
  // console.log('leader', leader);
  
  while (leader !== null) {
    current = current.next;
    leader = leader.next;
  }
  
  let temp = current.next.next;
  current.next = temp;

  // console.log('leader', leader);
  // cogit adgnsole.log('current', current);

  return head;
};

console.log(removeNthFromEnd(createList(10), 1));


//Mar 10 WB, failing solution

var removeNthFromEnd = function (head, n) {
  let fast = head;
  let prev = head;
  let count = n + 1;

  while (count > 0 && fast !== null) {
    count--
    fast = fast.next;
  }

  while (fast !== null) {
    fast = fast.next;
    prev = prev.next;
  }

  if (head === prev) {
    return head.next;
  }

  let temp = prev.next.next;
  prev.next = temp;

  return head
}