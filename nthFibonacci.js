var fib = function (N) {
  if (N === 1 || N === 2) {
    return 1;
  }

  return fib(N - 1) + fib(N - 2);
};