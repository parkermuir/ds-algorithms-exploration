// #448

const findDisappearedNumbers = (nums) => {
  let results = [];
  let idx = 0;
  while (idx < nums.length) {
    //swap with it's correct index
    //if same num is there, don't swap, increment i
    if (nums[idx] === nums[nums[idx] - 1]) {
      idx++;
    } else {
      let temp = nums[idx];
      nums[idx] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
    console.log(nums);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      results.push(i + 1);
    }
  }

  return results;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
