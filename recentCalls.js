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

// const instance = Object.create(recentCounter);

// console.log(instance.ping(1));
// console.log(instance.ping(100));
// console.log(instance.ping(3001));
// console.log(instance.ping(3002));

const rateLimiter = (func, n) => {
  calls = [];

  return function () {
    let timestamp = new Date();
    calls.push(timestamp);
    calls = calls.filter(call => call > (timestamp - 1000));
    if (calls.length <= n) {
      func.apply(null, arguments);
    } else {
      return;
    }
  };
};


let caller = rateLimiter( function () {
  let args = [...arguments];
  console.log(args);
}, 3);

caller('hi', 'hey');
caller('hi', 'hey');
caller('hi', 'hey');
caller('hi', 'hey');
caller('hi', 'hey');