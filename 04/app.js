const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/hello' && req.method === 'GET') {
        fs.createReadStream('./index.html', 'utf8').on('data', (chunk) => {
            res.write(chunk);
            res.end();
        });
    } else if (req.url === '/hello' && req.method === 'POST') {
        let body = "";
        req.on('data', (chunk) => {
            body += String(chunk);
        });
        req.on('end', () => {
            body = body.slice(5).replace('+', ' ');
            res.end(`Hello ${body}!`);
        });
    };
}).listen(3000);