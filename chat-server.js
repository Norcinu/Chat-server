var net = require('net');
 
// list of client sockets
var clients = [];

net.createServer(function(socket) {
    socket.name = socket.remoteAddress + ":" + socket.remotePort;
    clients.push(socket);
    
}
