class minHeap {
  constructor () {
    this.storage = [];
  }
  
  hasParent(index) {
    let parent = Math.floor((index - 1) / 2);
    return parent >= 0;
  }

  hasLeftChild(index) {
    let left = (index * 2) + 1;
    return left < this.storage.length;
  }

  hasRightChild(index) {
    let right = (index * 2) + 2;
    return right < this.storage.length;
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
    return this.storage[0];
  }

  poll() {
    
  }

  add() {

  }





}