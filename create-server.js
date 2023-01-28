http = require("http");
http
  .createServer((req, resp) => {
    resp.write("Hi dear, my name is deepak tyagi");
    resp.end();
  })
  .listen(1106);
