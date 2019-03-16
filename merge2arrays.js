/*
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;

  let insert = m + n - 1;

  let p1 = m - 1;
  let p2 = n - 1;

  while (p2 >= 0 & p1 >= 0) {
    if (nums2[p2] >= nums1[p1]) {
      nums1[insert--] = nums2[p2--];
    } else {
      nums1[insert--] = nums1[p1--];
    }
  }

  for (let i = 0; i <= p2; i++) {
    nums1[i] = nums2[i];
  }
};