var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Meu primeiro app NodeJS, isabeli');
}).listen(8080); 