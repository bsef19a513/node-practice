// HTTP module

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("Welcome to home");
  }
  if (req.url === '/about') {
    res.end("Welcome to about");
  } 
  else
    res.end(`<h1>Oops!</h1><p>Sorry we cannot find the desired page</p>`);
});

server.listen(5000);