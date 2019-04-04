// #957

/*
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, N) {
  let state = cells.join('');
  let memo = {};
  while (N > 0) {
    if (memo.hasOwnProperty(state)) {
      N %= memo[state] - N;
    }
    memo[state] = N


    if (N > 0) {
      N--
      state = getNextDay(state)
    }
  }

  return state.split('');
};

const getNextDay = (cellString) => {

  let nextDay = '';
  for (let i = 0; i < cellString.length; i++) {
    if (cellString[i - 1] === cellString[i + 1]) {
      nextDay += '1'
    } else {
      nextDay += '0'
    }
  }
  return nextDay
}