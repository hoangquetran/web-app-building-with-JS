// import logger from "./logger.js";

let animals = new Set();

// add new animal
animals.add("tiger");
animals.add("cat");
animals.add("elephant");
animals.add("lion");
animals.add("bird");
animals.add("monkey");

console.log(animals);


// check animal in list
var checkAnimal = (item) => {
    if(animals.has(item)) {
        console.log("There is a " + item);
    }else {
        console.log("There isn't " + item);
    }
}

checkAnimal("tiger");
checkAnimal("dog");


//  remove animal

animals.delete("tiger");

console.log(animals);
