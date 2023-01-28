const http = require("http");
http
  .createServer((req, resp) => {
    resp.write("<h1>hello123454232</h1>");
    resp.end();
  })
  .listen(1106); // createServer take function as a parameter

arr = [2, 4, 3, 3, 5, 6, 1, 7];
let result = arr.filter((item) => {
  return item < 3;
});
console.log(result);
