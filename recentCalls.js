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

    // setTimeout(()=> {
    //   calls.shift();
    // }, 1000);

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

// caller('hi', 1);
// caller('hi', 2);
// caller('hi', 3);
// caller('hi', 4);
// caller('hi', 5);

// setTimeout(() => {
//   caller('hi', 4);
//   caller('hi', 5);
//   caller('hi', 6);
// }, 1000);



var RecentCounter = function () {
  calls: [];
};

RecentCounter.prototype.ping = function (t) {
  this.calls.push(t);
  this.calls = this.calls.filter((call) => {
    return call >= (t - 3000);
  });
  return this.calls.length;
};


var obj = Object.create(RecentCounter);
console.log(obj.ping(1));
console.log(obj.ping(100));
console.log(obj.ping(3001));
console.log(obj.ping(3002));