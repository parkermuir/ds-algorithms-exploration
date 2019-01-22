var fib = function (N) {
  if (N === 0) {
    return 0;
  }

  if (N === 1 || N === 2) {
    return 1;
  }

  return fib(N - 1) + fib(N - 2);
};

const fibDP = function(N) {
  if (N === 0) {
    return 0;
  }

  let prev1 = 1;
  let prev2 = 1;
  let sum = 0;

  for (let i = 2; i < N; i++) {
    sum = prev1 + prev2;
    prev1 = prev2;
    prev2 = sum;
  }

  return sum;
};

console.log(fibDP(6));