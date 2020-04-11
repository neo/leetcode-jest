/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length + nums2.length <= 2) {
    return ((nums1[0] || 0) + (nums1[1] || 0) + (nums2[0] || 0) + (nums2[1] || 0)) / (nums1.length + nums2.length);
  }
  if (nums1.length === 0 || nums2.length === 0) {
    const nonEmpty = nums1.length ? nums1 : nums2;
    const midIndex = nonEmpty.length / 2;
    return (nonEmpty[Math.ceil(midIndex - 1)] + nonEmpty[Math.floor(midIndex)]) / 2;
  }
  if (nums1[nums1.length - 1] > nums2[nums2.length - 1]) {
    nums1.pop();
  } else {
    nums2.pop();
  }
  if (nums1[0] < nums2[0] || nums2.length === 0) {
    nums1.shift();
  } else {
    nums2.shift();
  }
  return findMedianSortedArrays(nums1, nums2);
};

test("4. Median of Two Sorted Arrays", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  expect(findMedianSortedArrays([], [1])).toBe(1);
  expect(findMedianSortedArrays([0, 5, 100], [])).toBe(5);
  expect(findMedianSortedArrays([0, 5, 100], [1, 2, 3])).toBe(2.5);
  expect(findMedianSortedArrays([0, 5, 100], [1, 3, 5])).toBe(4);
  expect(findMedianSortedArrays([0, 5, 100], [1, 5, 9])).toBe(5);
  expect(findMedianSortedArrays([2, 3], [1])).toBe(2);
});
