// https://leetcode.com/problems/roman-to-integer/description/

// function romanToInt(s: string): number {
//   let result: number = 0;
//   Array.from(s).forEach((letter: string, index: number) => {
//     switch (letter) {
//       case 'M':
//         result += s[index - 1] === 'C' ? 900 : 1000;
//         break;
//       case 'D':
//         result += s[index - 1] === 'C' ? 400 : 500;
//         break;
//       case 'C':
//         result += s[index - 1] === 'X' ? 90 : !['D', 'M'].includes(s[index + 1]) ? 100 : 0;
//         break;
//       case 'L':
//         result += s[index - 1] === 'X' ? 40 : 50;
//         break;
//       case 'X':
//         result += s[index - 1] === 'I' ? 9 : !['L', 'C'].includes(s[index + 1]) ? 10 : 0;
//         break;
//       case 'V':
//         result += s[index - 1] === 'I' ? 4 : 5;
//         break;
//       case 'I':
//         result += !['V', 'X'].includes(s[index + 1]) ? 1 : 0;
//         break;
//       default:
//         break;
//     }
//   });
//   return result;
// }

function romanToInt(s: string): number {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  const arr: string[] = Array.from(s);
  let result: number = 0;

  arr.forEach((letter: string, index: number) => {
    let value: number = romanValues[letter];
    if (index < arr.length - 1 && value < romanValues[arr[index + 1]]) {
      value = value * -1;
    }
    result += value;
  });
  return result;
}

console.log(romanToInt('III')); // 3
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
