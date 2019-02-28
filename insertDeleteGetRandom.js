//#380

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.indexes = {}
  this.selections = [];
};

/*
* Inserts a value to the set. Returns true if the set did not already contain the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (!this.indexes.hasOwnProperty(val)) {
      this.selections.push(val)
      this.indexes[val] = this.selections.length - 1;
      return true;
  } else {
      return false;
  }
};

/*
* Removes a value from the set. Returns true if the set contained the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if (this.indexes.hasOwnProperty(val)) {
      //index to be removed
      let index = this.indexes[val];
      let lastIndex = this.selections[this.selections.length - 1];
      
      //update last item with it's new index
      this.indexes[lastIndex] = index
      
      //swap them in selections
      let temp = this.selections[index];
      this.selections[index] = lastIndex
      this.selections.pop()
      delete this.indexes[val];
      
      return true;
  }  else {
      return false
  }
};

/*
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  let randomIndex = Math.floor(Math.random() * this.selections.length);
  return this.selections[randomIndex];
};

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = Object.create(RandomizedSet).createNew()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/