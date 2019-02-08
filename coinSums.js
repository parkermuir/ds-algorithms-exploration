

const coinSums = (coins, sum) => {

  const countWays = (coins, amount, num) => {
    if (amount = 0) {
      return 1;
    }

    if (amount < 0) {
      return 0;
    }

    if (num < 0 && amount > 0) {
      return 0;
    }

    return countWays(coins, amount - coins[num], num) + countWays(coins, amount, num - 1);
  };

  countWays(coins, sum, coins.length - 1);
};

console.log(coinSums([1, 2, 5], 9));