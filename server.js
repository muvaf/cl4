const http = require('http');
const port = process.env.PORT || 8080

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello World! My name is cl4 and my owner is muvaf');
}

const server = http.createServer(requestListener);
server.listen(port);