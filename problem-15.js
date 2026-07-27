let arr = [10, 20, 50, 150, 6, 7, 9, 11, 13, 21];
// let evenNumber = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenNumber.push(arr[i]);
//   }
// }
// console.log(evenNumber);

// let sum = 0;
// for (let key of evenNumber) {
//   sum += key;
// }

// console.log("Total: ", sum);

function getEvenNumber(arr) {
    let evenNumber = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumber.push(arr[i]);
    }
  }
  return evenNumber;
}

function getSum(arr) {
  let sum = 0;
  for (let key of arr) {
    console.log(key);
    sum += key;
  }
  return sum;
}

let evenNumber = getEvenNumber(arr);
let sum = getSum(evenNumber);
console.log("Sum: ->>", sum);
