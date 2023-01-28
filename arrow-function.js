http = require("http");
// this a arrow function
const arrFnc = (req, resp) => {
  resp.write("hello 123");
  resp.end();
};
http.createServer(arrFnc).listen(1106);

const arrFnc2 = (a) => a * 10;
