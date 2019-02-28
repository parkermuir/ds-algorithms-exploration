// #78 Subsets (no duplicates)

var subsets = function (nums) {
  let results = []

  const createSets = (nums, start, current) => {
    results.push([...current])

    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      createSets(nums, i + 1, current)
      current.pop()
    }
  }
  createSets(nums, 0, [])
  return results
}