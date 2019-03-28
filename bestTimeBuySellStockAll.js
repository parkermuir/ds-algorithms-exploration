const bestBuy = ( days ) => {
  let min = days[0];
  let maxProfit = 0;

  for (let i = 1; i < days.length; i++) {
    const price = days[i];
    maxProfit = Math.max(price - min, maxProfit);
    if ( price < min) {
      min = price;
    }
  }
  return maxProfit;
};


let a = [ 7, 1, 5, 3, 6, 4];
let b = [ 7, 8, 5, 4, 6, 12];
let c = [ 7, 6, 5, 3, 2, 1];

console.log(bestBuy(a)); // 5
console.log(bestBuy(b)); // 8
console.log(bestBuy(c)); // 0

// O(n)

//with unlimited trades but only one hold at a time

const multipleBuys = (days) => {
  let maxProfit = 0;
  for (let i = 0; i < days.length; i++) {
    if (days[i] > days[i - 1]) {
      maxProfit = maxProfit + days[i] - days[i - 1];
    }
  }
  return maxProfit;
};

//122
var maxProfit = function (prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    let profit = prices[i + 1] - prices[i];
    if (profit > 0) {
      maxProfit += profit;
    }
  }

  return maxProfit;
};
console.log(multipleBuys(a)); // 7
console.log(multipleBuys(b)); // 9
console.log(multipleBuys(c)); // 0


//309 with one day cooldown

/*
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) return 0;

  const cooldown = new Array(prices.length).fill(0);
  const buySell = new Array(prices.length).fill(0);

  buySell[1] = prices[1] - prices[0];

  for (let i = 2; i < prices.length; i++) {
    //treat day i as a cooldown day
    cooldown[i] = Math.max(cooldown[i - 1], buySell[i - 1]);

    //treat day i as a buy yesterday (i -1), sell today (i)
    //can only do this in addition to a cool down at i -2 
    buySell[i] = Math.max(cooldown[i - 2] + prices[i] - prices[i - 1], buySell[i - 1] + prices[i] - prices[i - 1]);
  }
  console.log({cooldown, })
  return Math.max(cooldown[cooldown.length - 1], buySell[buySell.length - 1]);
};

console.log(' ');
console.log(maxProfit([1, 2, 3, 0, 2]));
console.log(maxProfit([1, 0, 4, 5, 6]));
