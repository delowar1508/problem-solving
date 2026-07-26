// let arr = [1, 2, 5, 10];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   // console.log(arr[i]);
//   sum = sum + arr[i];
// }
// console.log("Total->>", sum);
// let avg = sum / arr.length;
// console.log("Average->>", avg);

function sumAndAvgNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    sum = sum + arr[i];
  }
  console.log("Total->>", sum);
  let avg = sum / arr.length;
  console.log("Average->>", avg);
}

console.log(sumAndAvgNumber([1, 2, 5, 10]));
