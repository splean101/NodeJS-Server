const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/style') {
        fs.readFile('./styles/style.css', 'utf8', (err, data) => {
            res.end(data);
        })
    } else if (req.url === '/image') {
        fs.readFile('./image.jpeg', (err, data) => {
            res.end(data);
        })
    };
    fs.readFile('./index.html', 'utf8', (err, data) => {
        res.end(data);
    })

}).listen(3000);