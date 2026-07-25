// Without function
// let str = "I Love Bangladesh";
// let reverseword = " ";
// for (let i=str.length-1; i>=0; i--){
//     let letter = str[i];
//     console.log("i->", i, letter);
//     reverseword = reverseword + letter;
// }
// console.log(reverseword);

// with function

function reverseword(word) {
  let reverseword = "";
  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i];
    console.log("i->", i, letter);
    reverseword = reverseword + letter;
  }
  return reverseword;
}
console.log(reverseword("Programming"));
console.log(reverseword("Bangladesh"));
