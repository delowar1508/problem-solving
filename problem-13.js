let monitor = {
    color : "Black",
    brand : "LG",
    display : "Something",
    size : "Something",
}

// console.log(monitor["color"]);
// console.log(monitor.brand);

for (let key in monitor) {
    console.log(key,":", monitor[key]);
}