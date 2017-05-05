var http = require("http");
var gw = require("./greenworks");

gw.init();

greenworks.getAuthSessionTicket(function(ticket) {
  http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(ticket);
  }).listen(8081);
  console.log('Server running at http://127.0.0.1:8081/');
}, function(err) { throw err; });

// Console will print the message
