const coinSums = (coins, sum) => {

  const countWays = (coins, amount, num, callStack) => {
    if (amount === 0) {
      return 1;
    }

    if (amount < 0) {
      return 0;
    }

    if (num < 0 && amount > 0) {
      return 0;
    }

    //two options a) use the coin, decrement the amount b) don't use the coin decrement the num
    return countWays(coins, amount - coins[num], num) + countWays(coins, amount, num - 1);
  };

  return countWays(coins, sum, coins.length - 1);
};

console.log(coinSums([1, 2, 5], 9));