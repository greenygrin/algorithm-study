// https://leetcode.com/problems/longest-common-prefix/description/

// function longestCommonPrefix(strs: string[]): string {
//   let index = strs.length - 1;
//   let prefix = strs[0];
//
//   while (prefix.length > 0 && index > 0) {
//     const minLength = Math.min(prefix.length, strs[index].length);
//     if (minLength === 0) prefix = '';
//     for (let i = 0; i < minLength; i++) {
//       if (!strs[index].startsWith(prefix.substring(0, i + 1))) {
//         prefix = prefix.substring(0, i);
//         break;
//       }
//       if (i === minLength - 1 && prefix.length > strs[index].length) {
//         prefix = strs[index].substring(0, i + 1);
//       }
//     }
//     index--;
//   }
//   return prefix;
// }

function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
    if (prefix === '') break;
  }
  return prefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ''
console.log(longestCommonPrefix(['ab', 'a'])); // 'a'
