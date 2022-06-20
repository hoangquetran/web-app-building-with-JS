// import logger from "./logger.js";

// logger("Xin chào");

let regex = /^[_a-z0-9]{6,}$/;

function isValidateAccount(str) {
    if(regex.test(str)) {
        console.log("Invalid account.");
    }else {
        console.log("Please enter a valid account.");
    }
}

let listAcc = [
    "123abc_",
    "_abc123",
    ".@",
    "ab______",
    "abcde "
]

for (var i = 0; i < listAcc.length; i++) {
    console.log(listAcc[i]);
    isValidateAccount(listAcc[i]);
}
  