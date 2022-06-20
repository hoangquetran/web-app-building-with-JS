// import logger from "./logger.js";

// logger("Xin chào");

// let regex = /^[A -Z]/;

// function isFirstLetterUpperCase(str) {
//     if(regex.test(str)) {
//         console.log("The first letter is uppercase");
//     } else {
//         console.log("The first letter is not uppercase");
//     }
// }

// isFirstLetterUpperCase("dAbd");


// check Zipcode

let regex = /^[0-9]{5}(?:-[0-9]{4})?$/;

function isUSZipCode(zipcode) {
    if(regex.test(zipcode)) {
        return true;
    }
    return false;
}

var zipcode = "82941";
console.log(isUSZipCode(zipcode));

zipcode = "0320";
console.log(isUSZipCode(zipcode));