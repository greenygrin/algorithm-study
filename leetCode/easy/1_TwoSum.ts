// https://leetcode.com/problems/two-sum/description/

// function twoSum(nums: number[], target: number): number[] {
//   for (let [index, num] of nums.entries()) {
//     for (let i = index + 1; i < nums.length; i++) {
//       if (num + nums[i] === target) {
//         return [index, i];
//       }
//     }
//   }
//   return [];
// }

function twoSum(nums: number[], target: number): number[] {
  const hash: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (hash.hasOwnProperty(complement)) {
      return [hash[complement], i];
    }
    hash[nums[i]] = i;
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
