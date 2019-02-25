/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/*
 * @param {Node} head
 * @return {Node}
 */
// var flatten = function(head) {
//     let result = new Node(-1, null, null, null) 
//     let ans = result

//     const traverse = (node) => {
//         if (!node) {
//             return
//         }
//         console.log(node.val)
//         result.next = new Node(node.val, result, null, null)
//         result = result.next;

//         if (node.child) {
//             console.log('deeper', node.child.val)
//             traverse(node.child)
//         }
//         traverse(node.next)
//     }

//     traverse(head)

//     return ans.next
// };

// const flatten = (head) => {
//     let result = new Node(-1);
//     let ans = result;
//     let stack = [];

//     let node = head;

//     while (node !== null || stack.length !== 0) {
//         if (node) {
//             console.log(node.val)
//             result.next = new Node(node.val)
//             let temp = result
//             result = result.next;
//             result.prev = result

//             if (node.child) {
//                 stack.push(node)
//                 node = node.child
//             } else {
//                 node = node.next;
//             }
//         } else {
//             node = stack.pop()
//             node = node.next
//         }
//     }
//     return ans.next
// }

const flatten = (head) => {

  const traverse = (node) => {
    if (!node) return

    if (node.child) {
      let temp = node.next
      node.next = node.child
      node.child.prev = node


      let p1 = node.child;
      while (p1.next) {
        p1 = p1.next
      }

      if (temp) temp.prev = p1
      p1.next = temp
      node.child = null
    }

    traverse(node.next)
  }
  traverse(head)
}