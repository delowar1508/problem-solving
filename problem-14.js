const student = {
    name: "Mahim",
    age: 20,
    institute: "BHPI",
    department: "CST",
};

function objOperation (obj) {
    for (let key in obj) {
        console.log(key);
    }
    for (let key in obj) {
        console.log(obj[key]);
    }
    for (let key in obj) {
        console.log(key, ": ", obj[key]);
    }
    let objKeyCount = Object.keys(obj).length;
    console.log("Total propertis: ", objKeyCount);

    let hasEmailProperty = obj.hasOwnProperty ("Email");
    console.log("Has Email: " ,hasEmailProperty);
}
objOperation (student);