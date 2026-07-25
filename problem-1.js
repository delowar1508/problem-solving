// Check if a number is even or odd.

// without fanction

let number = 7;
if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("odd Number");
}

// With function


function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even number";
  } else {
    return "Odd Number";
  }
}
console.log(checkEvenOrOdd(26));
console.log(checkEvenOrOdd(27));


