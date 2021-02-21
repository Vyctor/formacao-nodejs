const http = require("http");

http
  .createServer((req, res) => {
    res.write("Bem vindo!");
    res.end();
  })
  .listen(8181);
