const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    fs.readFile('./sometext.docx', 'utf8', (err, data) => {
        fs.readFile('index.html', 'utf8', (err1, data1) => {
            data1 = data1.replace('{article}', data);
            res.end(data1);
        })
    })
}).listen(3000);