// import logger from "./logger.js";

class Infor {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
    }

    static calculate = (a = 1) => {
        return a*3;
    }
    
}

let infor = Infor.calculate();

console.log(infor);

class geometry extends Infor {
    constructor(length, descGeometry) {
        this.length = length;
        this.descGeometry = descGeometry;
    }
}
