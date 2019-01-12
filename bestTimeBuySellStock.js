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
var maxProfit = function(prices) {
  let maxProfit = 0;
  
  for (let i = 0; i < prices.length; i++) {
      let profit = prices[i+1] - prices[i];
      if (profit > 0) {
          maxProfit += profit
      }
  }
  
  return maxProfit
};
console.log(multipleBuys(a)); // 7
console.log(multipleBuys(b)); // 9
console.log(multipleBuys(c)); // 0