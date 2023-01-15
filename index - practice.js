const app = require("./app");
//console.log(app.z());  // call variables & function from another file

/******Array ****/
const arr = [2, 4, 2, 3, 6, 8];
let cnt = 0;
var result = arr.filter((i) => {
  return i === 3;
});
//console.log(result);
/******Array end****/

// there are two types of modules
// 1) global modules
// 3) no global modules

//console.log(__dirname);    // get current directory name
//console.log(__filename);   // get current file name  path

/*File system*/
const fs = require("fs");
//fs.writeFileSync("file1.txt", "This is my first file");

const fs = require("fs").writeFileSync; // only one function include
//fs.("file2.txt", "This is my second file");
/*File system end*/

const test = (a) => a * 10; // testing in arrow function
console.log(test(2)); // output 20

const test = (a, b) => {
  // another testing for arrow function
  a = a + b;
  return a * 10;
};
console.log(test(1, 2)); // output 30
