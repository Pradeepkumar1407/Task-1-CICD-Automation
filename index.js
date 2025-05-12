const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Updated Docker Container Running Successfully n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});