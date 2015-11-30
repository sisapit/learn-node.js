
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    // Read file asynchronously.
    fs.readFile('response.txt', function(err, data) {
        if (err) throw err;
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(data);
    });
    response.end();
});

server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
