// sum of Range of number (1 to N)

// without function

// let number =7;
// let sum =0;
// for (let i=1; i<=number; i++){
//     sum = sum+i;
//     console.log("i=>>", i);
// }
// console.log("Total=>>", sum)

// with function

function rangeOfSum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
    console.log("i=>>", i);
  }
  return sum;
}
console.log(rangeOfSum(7));
console.log(rangeOfSum(4));
