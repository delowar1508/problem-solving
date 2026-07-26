// without function

let str = "madam";
// let reverseStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   let letter = str[i];
//   reverseStr = reverseStr + letter;
// }
// console.log(reverseStr);
// if (str === reverseStr) {
//   console.log("Palindrom");
// } else {
//   console.log("Not Palindrom");
// }

// with function

function checkPalindrom(madam) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i];
    reverseStr = reverseStr + letter;
  }
  console.log(reverseStr);
  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrom("str"))
console.log(checkPalindrom("did"))

