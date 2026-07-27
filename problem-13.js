let monitor = {
    color : "Black",
    brand : "Dami",
    display : "Something",
    size : "Something",
    
}

// console.log(monitor["color"]);
// console.log(monitor.brand);
// for in loop
for (let key in monitor) {
    // console.log(key,":", monitor[key]);
}

// using key method

let objectkey = Object.keys(monitor);
// console.log(objectkey);

// for (let i=0; i< objectkey.length; i++) {
//     let key = objectkey[i];
//     console.log(key, ": ", monitor[key]);
// }

for (let key of objectkey) {
    console.log(key, ": ", monitor[key]);
}