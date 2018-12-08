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
  console.log(current);
}


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