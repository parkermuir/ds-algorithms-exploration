// #70

const climbStairs = (n) => {
  let count = 0;

  const climb = (stairs) => {
    if (stairs === n) {
      count++
      return;
    }
    if (stairs > n) {
      return;
    }

    climb(stairs + 1)
    climb(stairs + 2)
  }

  climb(0)
  return count;
};