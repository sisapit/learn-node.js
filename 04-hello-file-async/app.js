
// ab -n 1000 -c 100 -vhr http://127.0.0.1:8000/

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    // Read file asynchronously.
    fs.readFile('response.txt', function(err, buf) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end(buf.toString());
    });
});

server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
