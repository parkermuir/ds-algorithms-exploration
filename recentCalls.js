//933

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */

const recentCounter = {
  calls: [],
  ping: function (t) {
    this.calls.push(t);
    this.calls = this.calls.filter( call => call >= (t - 3000));
    return this.calls.length;
  },
};

const instance = Object.create(recentCounter);

console.log(instance.ping(1));
console.log(instance.ping(100));
console.log(instance.ping(3001));
console.log(instance.ping(3002));