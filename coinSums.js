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



const coinSumsDP = (coins, sum) => {
  let solutions = new Array(sum + 1);
  solutions.fill(0);
  solutions[0] = 1;
  
  //for each coin
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];

    for (let j = coin; j < solutions.length; j++) {
      let leftover = j - coin;
      solutions[j] += solutions[leftover];
    }
    console.log(solutions);
  }

  return solutions[sum];
};

console.log(coinSumsDP([5, 2, 1], 9));