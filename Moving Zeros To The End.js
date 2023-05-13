// Moving Zeros To The End
// < 5 kyu >
//
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript

// TASK
//
// Write an algorithm that takes an array and moves all
//of the zeros to the end, preserving the order
//of the other elements.

// SOLUTION

function moveZeros(arr) {
  let resultArray = [];
  let zeroArray = [];
  resultArray = arr.reduce((acc, elem) => {
    console.log(acc, elem);
    if (elem === 0) {
      zeroArray.push(0);
    } else {
      acc.push(elem);
    }
    return acc;
  }, []);
  return resultArray.concat(zeroArray);
}

//  TEST

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
