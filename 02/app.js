const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let parsedURL = url.parse(req.url, false);
    let parsedQuery = querystring.parse(parsedURL.query);
    console.log(parsedQuery);
    let result;
    let number1 = Number(parsedQuery.number1);
    let number2 = Number(parsedQuery.number2);
    let operation = parsedQuery.operation;
    switch (operation) {
        case 'plus':
            result = number1 + number2;
            operation = '+';
            break;
        case 'minus':
            result = number1 - number2;
            operation = '-';
            break;
        case 'multiply':
            result = number1 * number2;
            operation = '*';
            break;
        case 'divide':
            result = number1 / number2;
            operation = '/';
            break;
        default:
                operation = 'Unknown operation!';
    };
    fs.readFile('./index.html', 'utf8', (error, data) => {
        data = data.replace('{param1}', number1).replace('{param2}', number2).replace('{operation}', operation).replace('{result}', result);
        res.end(data);
    });

    console.log(result);
}).listen(3000);
//http://localhost:3000/?number1=90&number2=33&operation=multiply