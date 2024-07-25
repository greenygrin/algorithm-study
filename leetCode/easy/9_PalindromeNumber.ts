// https://leetcode.com/problems/palindrome-number/description/

// function isPalindrome(x: number): boolean {
//   if(x < 0) return false;
//
//   const arr = x.toString();
//   const length = arr.length;
//
//   for (let i = 0; i < length/2; i++) {
//     if (arr[i] !== arr[length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };

function isPalindrome(x: number): boolean {
  if(x < 0) return false;

  let source: number = x;
  let mirror: number = 0;

  while(source > 0){
    mirror = mirror * 10 + source % 10
    source = Math.floor(source/10)
  }

  return x === mirror;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
