// https://leetcode.com/problems/valid-parentheses/

// function isValid(s: string): boolean {
//   const parentheses = {
//     open: ['(', '[', '{'],
//     close: [')', ']', '}'],
//   }
//   let arr: string[] = Array.from(s);
//   let result = true;
//   let count = 0;
//   while (arr.length > 0) {
//     if (parentheses.close.includes(arr[0])) {
//       result = false;
//       break;
//     }
//     if (parentheses.open.includes(arr[count + 1])) {
//       count++;
//     } else {
//       const index = parentheses.open.indexOf(arr[count]);
//       if (arr[count + 1] === parentheses.close[index]) {
//         arr.splice(count, 2);
//         count--;
//       } else {
//         result = false;
//         break;
//       }
//     }
//   }
//   return result;
// }

function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  const valid = {
    '(': ')',
    '[': ']',
    '{' : '}'
  };
  let opened = [];
  let result = true;

  s.split('').forEach(value => {
    if(value in valid) {
      opened.push(value);
    } else {
      let lastOpen = opened.pop();
      if(valid[lastOpen] != value) {
        result = false;
      }
    }
  });
  return result && opened.length === 0;
}

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('(([]){})')); // true
console.log(isValid('{()}')); // true
