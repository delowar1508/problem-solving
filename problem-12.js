// without function

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let value = 45;

// let fileteredArray = [];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if (arr[i] > value) {
//     fileteredArray.push(arr[i]);
//   }
// }

// console.log(fileteredArray);

// with function

function fileterNumber(arr) {
  let value = 45;

  let fileteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] > value) {
      fileteredArray.push(arr[i]);
    }
  }
  return fileteredArray;
}

console.log(fileterNumber([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]))
