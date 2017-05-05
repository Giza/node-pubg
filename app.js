var http = require("http");
var gw = require("./greenworks");

gw.init();

gw.getAuthSessionTicket(function(ticket) {
  const ticketStr = ticket.ticket.toString('hex');
  const steamId = gw.getSteamId();

  http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('ticket: ' + ticketStr + '\n\nsteam id: ' + steamId.getRawSteamID() + ', ' + steamId.getAccountID());
  }).listen(8081);
  console.log('Server running at http://127.0.0.1:8081/');
}, function(err) {
  throw err;
});
