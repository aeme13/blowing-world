const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello I am listening to this port.");
  }
  if (req.url === "/about") {
    res.end("This is the about page");
  }
  res.end(`<h1>OOPS!!</h1>
  <p>You are on the wrong spot baby</p>`);
});

server.listen(5000);
