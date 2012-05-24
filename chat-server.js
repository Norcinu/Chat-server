var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\nApp (segchat) is running on Node.js ' + process.version);
}).listen(process.env['app_port'] || 3000);

var net = require('net');
 
// list of client sockets
var clients = [];

net.createServer(function(socket) {
    socket.name = socket.remoteAddress + ":" + socket.remotePort;
    clients.push(socket);   
});

/* Mongo stuff!! */
var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;

var server = new Server('ds029817.mongolab.com', 29817, {auto_reconnect:true});
var db = Db('steve_srwc', server);

db.open(function(err, db) {
    if (!err) {
        console.log("we are connected");
    }
    else {
        console.log("we are not connected");
    }

    db.collection('srwc_player', function(err, collection) {
        collection.find(function(err, cursor) {
            cursor.each(function(err, item) {
                if (item != null) console.dir(item);
            });
        });
    });
});
