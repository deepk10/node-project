// readymade modules
fs = require("fs"); // this is non global
http = require("http"); // this is non global
//Global Modules => which are not need to import
//non global modules => which need to import
fs.writeFileSync("hello.txt", "hi deepak1");
console.log(__dirname); // this is global
console.log(__filename); // this is global
