const Node = function(value) {
  this.value = value;
  this.next = null;
};

let head = new Node(0);
let current = head;
let n = 1;
while (n < 11) {
  current.next = new Node(n++);
  current = current.next;
}


const removeNthFromEnd = function (head, n) {
  let current = head;
  let leader = head;
  let count = 0;

  //
  while (count <= n) {
    leader = leader.next;
    count++;
  }

  console.log('Count=', count);
  console.log('leader', leader);
  
  while (leader !== null) {
    current = current.next;
    leader = leader.next;
  }
  
  current.next = current.next.next;
  // current.next = temp;

  console.log('leader', leader);
  console.log('current', current);

  //once this loop breaks you need remove the node
  //then return head

};


removeNthFromEnd(head, 3);