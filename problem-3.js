// problem: Factorial of a number.

// without function

// let number = 5;
// let result = 1;
// for (let i = 1; i <= number; i++) {
//   console.log("i=>>", i);
//   result = result * i;
// }

// console.log("result=>>", result);

// with function

function factorialNumber(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    console.log("i=>>", i);
    result = result * i;
  }
  return result;
}

console.log(factorialNumber(5))
console.log(factorialNumber(4))