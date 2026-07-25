// Without function

// let str = "Programming Hero";
// let vowels = "aeiou";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   let letter = str[i];
//   console.log("i -> letter ->>>", i, letter);
//   if (vowels.includes(letter)) {
//     console.log("vowels");
//     count++;
//   }
// }

// console.log("count->>", count);

// with function

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    console.log("i -> letter ->>>", i, letter);
    if (vowels.includes(letter)) {
      console.log("vowels");
      count++;
    }
  }
  return count;
}

let phVowels = countVowels("Programming Hero");
console.log("Programming Hero te Vowel ache:", phVowels);

let bdVowelCount = countVowels("Bangladesh") 
console.log("Bangladesh e vowel ache: ", bdVowelCount);
