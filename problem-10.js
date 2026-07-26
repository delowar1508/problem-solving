// with function

function checksmallestN(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    if (currentElement < smallest) {
      smallest = currentElement;
    }
  }
  return smallest;
}
console.log(checksmallestN([10,50,5,7010,8160,9999]))