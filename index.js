const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("<h1>1hello</h1>");
    resp.end();
  })
  .listen(1106); // createServer take function as a parameter
