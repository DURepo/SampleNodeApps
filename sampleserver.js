var http = require('http');

console.log('server is up');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
}

http.createServer(onRequest).listen(8000);