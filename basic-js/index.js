// import logger from "./logger.js";

let birds = [
    {"ID": "DV8", "Name": "Eurasian Collared-Dove", "Type": "Dove" },
    {"ID": "HK12", "Name": "Bald Eagle", "Type": "Hawk" },
    {"ID": "HK6", "Name": "Cooper's Hawk", "Type": "Hawk" },
    {"ID": "SP11", "Name": "Bell's Sparrow", "Type": "Sparrow" },
    {"ID": "DV2", "Name": "Mourning Dove", "Type": "Dove" }
];


const idBirds = [];

birds.forEach((bird) => {
    idBirds.push({
        id: bird.ID
    })
})

console.log(idBirds);
