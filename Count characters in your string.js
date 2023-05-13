// Count characters in your string
// < 6 kyu >
//
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/javascript

// TASK
//
// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

// SOLUTION

function count(string) {
  const originalArray = string.trim().split('');
  const result = originalArray.reduce((acc, currentValue) => {
    if (!(currentValue in acc)) {
      acc[`${currentValue}`] = 1;
    } else {
      acc[`${currentValue}`] += 1;
    }
    return acc;
  }, {});
  return result;
}

// TEST

console.log(count('aabbcc'));
console.log(count('aaa'));
console.log(count('aAbcc'));
console.log(count(''));
