const h = require('http');
const fs = require('fs');

const server = h.createServer((req, res) => {
    const log = `${req.method} ${req.url} +"hello"`;
    fs.appendFileSync('log.txt', `${log}\n`);

    if (req.method === 'GET' && req.url === '/') {
        res.end('GET: hello');
    } else if (req.method === 'POST' && req.url === '/post') {
        res.end('POST: hello');
    } else if (req.method === 'DELETE' && req.url === '/delete') {
        res.end('DELETE: hello');
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(9000, () => {
    console.log('server is running on port 9000');
});