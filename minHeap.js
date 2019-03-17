class minHeap {
  constructor () {
    this.storage = [];
    this.size = 0;
  }
  
  hasParent(index) {
    let parent = Math.floor((index - 1) / 2);
    return parent >= 0;
  }

  hasLeftChild(index) {
    let left = (index * 2) + 1;
    return left < this.size;
  }

  hasRightChild(index) {
    let right = (index * 2) + 2;
    return right < this.size;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftIndex(index) {
    return index * 2 + 1;
  }

  getRightIndex(index) {
    return index * 2 + 2;
  }

  peek() {
    return this.storage[0] || 'Empty heap';
  }

  poll() {
    if (this.storage.length === 0) {
      return 'Empty heap';
    }

    //swap min with last item
    [this.storage[0], this.storage[this.size - 1]] = [this.storage[this.size - 1], this.storage[0]];
    let polled = this.storage.pop();
    this.size--;
    let i = 0;

    //heapify down
    while (this.hasLeftChild(i)) {
      //determine smaller child
      let smallerChildIndex = this.getLeftIndex(i);
      if (this.hasRightChild(i) && this.storage[this.getRightIndex(i)] < this.storage[smallerChildIndex]) { 
        smallerChildIndex = this.getRightIndex(i); 
      }

      if (this.storage[i] <= this.storage[smallerChildIndex]) {
        return polled;
      } else {
        //swap parent and smaller child
        [this.storage[i], this.storage[smallerChildIndex]] = [this.storage[smallerChildIndex], this.storage[i]];
        i = smallerChildIndex;
      }
    }

    //decrement size
    
    return polled;
  }

  add(value) {
    this.storage.push(value);
    this.size++;

    let i = this.size - 1;
    let parent = this.getParentIndex(i);

    //heapify up
    while (this.hasParent(i) && this.storage[parent] > this.storage[i]) {
      //swap with parent
      //console.log(swapping)
      [this.storage[i], this.storage[parent]] = [this.storage[parent], this.storage[i]];
      i = parent;
    }
  }
}

let minHeap1 = new minHeap();
// minHeap1.add(1);
minHeap1.add(2);
minHeap1.add(5);
minHeap1.add(6);
// minHeap1.add(1);
minHeap1.add(12);
console.log('storage:', minHeap1.storage);
console.log('peek:', minHeap1.peek());
console.log('size:', minHeap1.size);
console.log('poll:', minHeap1.poll());
console.log('storage:', minHeap1.storage);
console.log('peek:', minHeap1.peek());
console.log('size:', minHeap1.size);
console.log('poll:', minHeap1.poll());
console.log('storage:', minHeap1.storage);
console.log('peek:', minHeap1.peek());
console.log('size:', minHeap1.size);
console.log('poll:', minHeap1.poll());
console.log('storage:', minHeap1.storage);
console.log('peek:', minHeap1.peek());
console.log('size:', minHeap1.size);
console.log('poll:', minHeap1.poll());
console.log('storage:', minHeap1.storage);
console.log('peek:', minHeap1.peek());
console.log('size:', minHeap1.size);
console.log('poll:', minHeap1.poll());
console.log('storage:', minHeap1.storage);