// Without function

// let arr = [500, 120, 20, 5010, 1020];
// let largest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   let currentElement = arr[i];
//   if (currentElement > largest) {
//     largest = currentElement;
//   }
//   console.log("currentElement", currentElement);
// }
// console.log("largest", largest);

// With function

function checkLargestN(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    if (currentElement > largest) {
      largest = currentElement;
    }
  }
  return largest;
}
console.log(checkLargestN([10,50,20,7010,8160,9999]))
