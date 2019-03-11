//#209

var minSubArrayLen = function (s, nums) {
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  let currentSum = 0;

  while (end < nums.length) {
    currentSum += nums[end];
    end++

    while (currentSum >= s) {
      minLen = Math.min(minLen, end - start)
      currentSum -= nums[start];
      start++
    }
  }
  return minLen === Infinity ? 0 : minLen;
};