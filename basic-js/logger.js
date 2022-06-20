// export default function logger(mess) {
//     console.log(mess);
// }
// function asyncFunction(callback) {
//     console.log("start");
//     setTimeout (() => {
//         callback();
//     }, 1000);
//     console.log("waiting");
// }

// let printEnd = () => {
//     console.log("end");
// }

// asyncFunction(printEnd);


// const count = true;
// let countValue = new Promise((resolve, reject) => {
//     if (count) {
//         resolve("there is a count value");
//     }else {
//         reject("there is no count value");
//     }
// });

// console.log(countValue);


// import fs from "fs";
// const readFile = (fileName) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, { encoding: "utf8"}, (error, contents) => {
//             if (error) {
//                 reject(error);
//                 return;
//             }
//             resolve(contents);
//         })
//     });
// }

// let promise = readFile("package.json");
// promise.then(contents => {
//     console.log("success");
//     console.log(contents);
//     let content = JSON.parse(contents);
//     console.log(content["type"]);
// }).catch(error => {
//     console.error(error.message);
// });


