/*
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = new Array(k).fill(null);
  this.size = 0;
  this.front = -1;
  this.rear = -1;
  
};

/*
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (!this.isFull()) {
    if (this.rear === -1 && this.front === -1) {
      this.rear = 0;
      this.front = 0;
    }
    else if (this.rear + 1 === this.queue.length) {
      this.rear = 0;
    } else {
      this.rear++;
    }

    this.queue[this.rear] = value;
    this.size++;
    return true;
  } else {
    return false;
  }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (!this.isEmpty()) {
    let temp = this.queue[this.front];

    this.queue[this.front] = null;
    this.size--;

    if (this.front === this.queue.length - 1) {
      this.front = 0;
    } else {
      this.front++;
    }

    if (this.size === 0) {
      this.front = -1;
      this.rear = -1;
    }

    return true;
  } else {
    return false;
  }
};