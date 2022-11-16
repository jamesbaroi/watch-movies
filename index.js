import http from 'http';
import fs from 'fs';

function route(req, res) {
  switch(req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile('index.html', (error, content) => {
        if (error) throw error;
        res.end(content);
      });
      break;
    default:
      res.writeHead(301, { 'Location': 'http://localhost:8080' });
      res.end();
  }
}

http.createServer(route).listen(8080);
