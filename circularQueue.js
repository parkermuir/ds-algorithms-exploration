/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = new Array(k).fill(null);
  this.size = 0;
  this.front = -1;
  this.rear = -1;
  
};

